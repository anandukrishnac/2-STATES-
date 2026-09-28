// 2 STATES College Event & Blog App JS

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initCountdown();
  renderMenu('all', 'all');
  renderCulturalProgram();
  renderEventFlow();
  renderIslamicBuffetGallery();
  renderBlogs();
  setupBlogSearchAndFilter();
  setupMobileMenu();
});

// 0. DARK / LIGHT THEME SWITCHER
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const themeToggleBtn = document.getElementById('themeToggleBtn');

  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    updateThemeIcon(true);
  } else {
    document.documentElement.classList.remove('dark');
    updateThemeIcon(false);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateThemeIcon(isDark);
    });
  }
}

function updateThemeIcon(isDark) {
  const icon = document.getElementById('themeIcon');
  if (icon) {
    icon.className = isDark ? 'fa-solid fa-sun text-amber-400' : 'fa-solid fa-moon text-stone-700';
  }
}

// 1. COUNTDOWN TIMER
function initCountdown() {
  const targetDate = new Date("2026-10-09T20:30:00+05:30").getTime();

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      document.getElementById('countdownDays').innerText = "00";
      document.getElementById('countdownHours').innerText = "00";
      document.getElementById('countdownMins').innerText = "00";
      document.getElementById('countdownSecs').innerText = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdownDays').innerText = String(days).padStart(2, '0');
    document.getElementById('countdownHours').innerText = String(hours).padStart(2, '0');
    document.getElementById('countdownMins').innerText = String(minutes).padStart(2, '0');
    document.getElementById('countdownSecs').innerText = String(seconds).padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

// 2. MENU FILTER & RENDERING
let currentRegion = 'all';
let currentCategory = 'all';

window.setMenuRegion = function(region) {
  currentRegion = region;
  
  document.querySelectorAll('.region-btn').forEach(btn => {
    btn.classList.remove('active-all', 'active-punjab', 'active-tamilnadu');
  });

  const targetBtn = document.getElementById(`region-${region}`);
  if (region === 'all') targetBtn.classList.add('active-all');
  else if (region === 'punjab') targetBtn.classList.add('active-punjab');
  else if (region === 'tamilnadu') targetBtn.classList.add('active-tamilnadu');

  renderMenu(currentRegion, currentCategory);
};

window.setMenuCategory = function(cat) {
  currentCategory = cat;

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const targetBtn = document.getElementById(`cat-${cat}`);
  if (targetBtn) targetBtn.classList.add('active');

  renderMenu(currentRegion, currentCategory);
};

function renderMenu(regionFilter, catFilter) {
  const container = document.getElementById('menuGrid');
  if (!container) return;

  const filtered = EVENT_DATA.menu.filter(item => {
    const matchRegion = regionFilter === 'all' || item.region === regionFilter;
    const matchCat = catFilter === 'all' || item.category === catFilter;
    return matchRegion && matchCat;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12 bg-amber-50/50 dark:bg-slate-800 rounded-2xl border border-amber-200 dark:border-slate-700">
        <i class="fa-solid fa-utensils text-4xl text-amber-600 mb-3"></i>
        <p class="text-stone-700 dark:text-stone-300 font-medium text-lg">No dishes found matching the selected filters.</p>
        <button onclick="setMenuRegion('all'); setMenuCategory('all');" class="mt-4 px-4 py-2 bg-amber-600 text-white rounded-lg text-sm hover:bg-amber-700">Reset Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const isPunjab = item.region === 'punjab';
    const badgeBg = isPunjab ? 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950 dark:text-amber-300' : 'bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300';
    const tagColor = isPunjab ? 'text-amber-700 dark:text-amber-400' : 'text-emerald-800 dark:text-emerald-400';

    return `
      <div class="bg-white dark:bg-slate-800 rounded-2xl border border-stone-200 dark:border-slate-700 overflow-hidden hover-lift flex flex-col h-full shadow-sm">
        <div class="relative h-48 overflow-hidden bg-stone-100 dark:bg-slate-900">
          <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy"/>
          <span class="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full border ${badgeBg}">
            ${item.regionName}
          </span>
          <span class="absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full bg-stone-900/80 text-amber-300 backdrop-blur-sm">
            ${item.badge}
          </span>
        </div>
        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="text-xs font-semibold uppercase tracking-wider ${tagColor}">${item.tagline}</span>
              <span class="text-xs text-stone-500 dark:text-slate-400"><i class="fa-solid fa-fire-flame-curry text-amber-600 mr-1"></i>${item.spiceLevel}</span>
            </div>
            <h3 class="text-xl font-bold text-stone-900 dark:text-white mb-2 font-serif-heading">${item.name}</h3>
            <p class="text-stone-600 dark:text-slate-300 text-sm leading-relaxed mb-4">${item.desc}</p>
          </div>
          <div class="pt-4 border-t border-stone-100 dark:border-slate-700">
            <p class="text-xs font-semibold text-stone-500 dark:text-slate-400 mb-2">Key Ingredients:</p>
            <div class="flex flex-wrap gap-1.5">
              ${item.ingredients.map(ing => `<span class="px-2 py-0.5 bg-stone-100 dark:bg-slate-700 text-stone-700 dark:text-slate-200 rounded text-xs">${ing}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// 3. CULTURAL PROGRAM RENDERING WITH SMALL IMAGES
function renderCulturalProgram() {
  const container = document.getElementById('culturalGrid');
  if (!container) return;

  container.innerHTML = EVENT_DATA.culturalProgram.map(act => `
    <div class="bg-gradient-to-br from-stone-900 to-stone-800 text-white rounded-2xl overflow-hidden border border-stone-700/60 hover-lift flex flex-col justify-between">
      <div class="relative h-36 overflow-hidden bg-stone-950">
        <img src="${act.image}" alt="${act.title}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy"/>
        <div class="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent"></div>
        <span class="absolute top-3 left-3 px-3 py-1 bg-amber-500/90 text-stone-950 text-xs font-black rounded-full uppercase tracking-wider">
          ${act.highlight}
        </span>
      </div>
      <div class="p-6">
        <div class="flex items-center gap-2 mb-2 text-amber-400">
          <i class="fa-solid ${act.icon} text-lg"></i>
          <h3 class="text-xl font-bold text-white font-serif-heading">${act.title}</h3>
        </div>
        <p class="text-stone-300 text-sm leading-relaxed">${act.desc}</p>
      </div>
    </div>
  `).join('');
}

// 4. EVENT FLOW RENDERING WITH STEP IMAGES
function renderEventFlow() {
  const container = document.getElementById('eventFlowTimeline');
  if (!container) return;

  container.innerHTML = EVENT_DATA.eventFlow.map(step => `
    <div class="relative pl-8 pb-8 border-l-2 border-amber-300 dark:border-amber-600 last:pb-0">
      <div class="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs font-bold shadow-md">
        ${step.step}
      </div>
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-stone-200 dark:border-slate-700 overflow-hidden shadow-sm hover:border-amber-400 transition-colors flex flex-col sm:flex-row gap-4 p-4">
        <div class="sm:w-40 h-32 shrink-0 overflow-hidden rounded-lg bg-stone-100 dark:bg-slate-900 relative">
          <img src="${step.image}" alt="${step.title}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy"/>
        </div>
        <div class="flex-1 flex flex-col justify-center">
          <div class="flex items-center gap-2 text-amber-800 dark:text-amber-400 font-semibold text-xs mb-1">
            <i class="fa-solid ${step.icon}"></i>
            <span>Step ${step.step}</span>
          </div>
          <h4 class="text-lg font-bold text-stone-900 dark:text-white font-serif-heading">${step.title}</h4>
          <p class="text-stone-600 dark:text-slate-300 text-sm mt-1 leading-relaxed">${step.desc}</p>
        </div>
      </div>
    </div>
  `).join('');
}

// 5. ISLAMIC BUFFET GALLERY RENDERING
function renderIslamicBuffetGallery() {
  const container = document.getElementById('islamicBuffetGrid');
  if (!container) return;

  container.innerHTML = EVENT_DATA.islamicBuffetGallery.map(item => `
    <div class="bg-white dark:bg-slate-800 rounded-2xl border border-stone-200 dark:border-slate-700 overflow-hidden hover-lift flex flex-col h-full shadow-sm">
      <div class="h-40 overflow-hidden relative bg-stone-100 dark:bg-slate-900">
        <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy"/>
      </div>
      <div class="p-4 flex-1 flex flex-col justify-between">
        <h4 class="text-base font-bold text-stone-900 dark:text-white font-serif-heading">${item.title}</h4>
        <p class="text-stone-600 dark:text-slate-300 text-xs mt-1 leading-relaxed">${item.desc}</p>
      </div>
    </div>
  `).join('');
}

// 6. BLOG RENDERING & INTERACTION
let activeBlogCategory = 'All';

function renderBlogs(filterText = '') {
  const container = document.getElementById('blogGrid');
  if (!container) return;

  const filtered = EVENT_DATA.blogs.filter(blog => {
    const matchCategory = activeBlogCategory === 'All' || blog.category === activeBlogCategory;
    const matchSearch = blog.title.toLowerCase().includes(filterText.toLowerCase()) || 
                        blog.summary.toLowerCase().includes(filterText.toLowerCase());
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12 bg-stone-50 dark:bg-slate-800 rounded-2xl border border-stone-200 dark:border-slate-700">
        <i class="fa-regular fa-newspaper text-4xl text-stone-400 mb-3"></i>
        <p class="text-stone-600 dark:text-slate-300 font-medium">No blog articles match your search or filter.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(blog => `
    <article class="bg-white dark:bg-slate-800 rounded-2xl border border-stone-200 dark:border-slate-700 overflow-hidden hover-lift flex flex-col h-full shadow-sm">
      <div class="relative h-52 overflow-hidden bg-stone-100 dark:bg-slate-900">
        <img src="${blog.image}" alt="${blog.title}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy"/>
        <span class="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-amber-600 text-white shadow-sm">
          ${blog.category}
        </span>
      </div>
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-3 text-xs text-stone-500 dark:text-slate-400 mb-2">
            <span><i class="fa-regular fa-calendar text-amber-600 mr-1"></i>${blog.date}</span>
            <span>•</span>
            <span><i class="fa-regular fa-clock text-amber-600 mr-1"></i>${blog.readTime}</span>
          </div>
          <h3 class="text-xl font-bold text-stone-900 dark:text-white mb-2 font-serif-heading hover:text-amber-700 dark:hover:text-amber-400 transition-colors cursor-pointer" onclick="openBlogModal('${blog.id}')">
            ${blog.title}
          </h3>
          <p class="text-stone-600 dark:text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">${blog.summary}</p>
        </div>
        <div class="pt-4 border-t border-stone-100 dark:border-slate-700 flex items-center justify-between">
          <span class="text-xs font-medium text-stone-700 dark:text-slate-300">By ${blog.author}</span>
          <button onclick="openBlogModal('${blog.id}')" class="text-amber-800 dark:text-amber-400 text-xs font-bold hover:text-amber-900 inline-flex items-center gap-1 group">
            Read Story <i class="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

function setupBlogSearchAndFilter() {
  const searchInput = document.getElementById('blogSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderBlogs(e.target.value);
    });
  }

  const categories = ['All', 'Cuisine & Culture', 'Student Life', 'Entertainment', 'Hospitality Management', 'Food & Drinks'];
  const catContainer = document.getElementById('blogCategories');
  if (catContainer) {
    catContainer.innerHTML = categories.map(cat => `
      <button onclick="filterBlogCategory('${cat}', this)" class="blog-cat-btn px-4 py-1.5 rounded-full text-xs font-semibold border ${cat === 'All' ? 'bg-amber-700 text-white border-amber-700' : 'bg-white dark:bg-slate-800 text-stone-700 dark:text-slate-300 border-stone-300 dark:border-slate-700 hover:border-amber-600'} transition-colors">
        ${cat}
      </button>
    `).join('');
  }
}

window.filterBlogCategory = function(cat, btn) {
  activeBlogCategory = cat;
  document.querySelectorAll('.blog-cat-btn').forEach(b => {
    b.className = "blog-cat-btn px-4 py-1.5 rounded-full text-xs font-semibold border bg-white dark:bg-slate-800 text-stone-700 dark:text-slate-300 border-stone-300 dark:border-slate-700 hover:border-amber-600 transition-colors";
  });
  btn.className = "blog-cat-btn px-4 py-1.5 rounded-full text-xs font-semibold border bg-amber-700 text-white border-amber-700 transition-colors";
  
  const searchInput = document.getElementById('blogSearch');
  renderBlogs(searchInput ? searchInput.value : '');
};

// BLOG READER MODAL
let currentBlogLikes = 24;

window.openBlogModal = function(blogId) {
  const blog = EVENT_DATA.blogs.find(b => b.id === blogId);
  if (!blog) return;

  const modal = document.getElementById('blogModal');
  const modalContent = document.getElementById('blogModalContent');
  if (!modal || !modalContent) return;

  currentBlogLikes = Math.floor(Math.random() * 30) + 20;

  modalContent.innerHTML = `
    <div class="relative bg-white dark:bg-slate-800 text-stone-900 dark:text-white rounded-3xl overflow-hidden">
      <div class="h-64 sm:h-80 overflow-hidden relative">
        <img src="${blog.image}" alt="${blog.title}" class="w-full h-full object-cover"/>
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
        <button onclick="closeBlogModal()" class="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black text-lg transition-colors">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <div class="absolute bottom-6 left-6 right-6 text-white">
          <span class="px-3 py-1 bg-amber-600 text-xs font-bold rounded-full mb-3 inline-block">${blog.category}</span>
          <h2 class="text-2xl sm:text-3xl font-bold font-serif-heading leading-tight">${blog.title}</h2>
          <div class="flex items-center gap-4 text-xs text-stone-300 mt-2">
            <span><i class="fa-regular fa-user text-amber-400 mr-1"></i>${blog.author}</span>
            <span><i class="fa-regular fa-calendar text-amber-400 mr-1"></i>${blog.date}</span>
            <span><i class="fa-regular fa-clock text-amber-400 mr-1"></i>${blog.readTime}</span>
          </div>
        </div>
      </div>
      <div class="p-6 sm:p-8 max-w-3xl mx-auto prose dark:prose-invert">
        ${blog.content}

        <div class="mt-8 pt-6 border-t border-stone-200 dark:border-slate-700 flex items-center justify-between">
          <button id="likeBtn" onclick="likePost()" class="px-4 py-2 bg-amber-50 dark:bg-slate-700 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-slate-600 rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-amber-100 transition-colors">
            <i class="fa-solid fa-heart text-amber-600"></i>
            <span id="likeCount">${currentBlogLikes} Applauds</span>
          </button>

          <button onclick="sharePost('${blog.title}')" class="px-4 py-2 bg-stone-100 dark:bg-slate-700 text-stone-700 dark:text-slate-200 rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-stone-200 transition-colors">
            <i class="fa-solid fa-share-nodes"></i> Share Story
          </button>
        </div>

        <div class="mt-8 pt-6 border-t border-stone-200 dark:border-slate-700">
          <h3 class="text-lg font-bold text-stone-900 dark:text-white font-serif-heading mb-4">Leave a Comment</h3>
          <form onsubmit="submitComment(event)" class="space-y-3">
            <input type="text" id="commenterName" placeholder="Your Name / Student ID" required class="w-full px-4 py-2 bg-white dark:bg-slate-900 border border-stone-300 dark:border-slate-700 rounded-lg text-sm text-stone-900 dark:text-white focus:outline-none focus:border-amber-600"/>
            <textarea id="commenterText" placeholder="Write your thoughts..." rows="3" required class="w-full px-4 py-2 bg-white dark:bg-slate-900 border border-stone-300 dark:border-slate-700 rounded-lg text-sm text-stone-900 dark:text-white focus:outline-none focus:border-amber-600"></textarea>
            <button type="submit" class="px-5 py-2 bg-amber-700 text-white font-semibold rounded-lg text-sm hover:bg-amber-800 transition-colors">Post Comment</button>
          </form>

          <div id="commentsList" class="mt-6 space-y-4">
            <div class="p-3 bg-stone-50 dark:bg-slate-900 rounded-lg border border-stone-200 dark:border-slate-700 text-xs">
              <div class="font-bold text-stone-900 dark:text-white">Arun Kumar (2nd Year HCM)</div>
              <p class="text-stone-600 dark:text-slate-300 mt-1">Can't wait to taste the Nannari Elaneer and Chettinad Chicken!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
};

window.closeBlogModal = function() {
  const modal = document.getElementById('blogModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
  document.body.style.overflow = 'auto';
};

window.likePost = function() {
  currentBlogLikes++;
  const countEl = document.getElementById('likeCount');
  if (countEl) countEl.innerText = `${currentBlogLikes} Applauds`;
};

window.sharePost = function(title) {
  if (navigator.share) {
    navigator.share({ title: title, url: window.location.href });
  } else {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  }
};

window.submitComment = function(e) {
  e.preventDefault();
  const name = document.getElementById('commenterName').value;
  const text = document.getElementById('commenterText').value;
  const list = document.getElementById('commentsList');

  if (list && name && text) {
    const newComment = document.createElement('div');
    newComment.className = "p-3 bg-amber-50/60 dark:bg-slate-900 rounded-lg border border-amber-200 dark:border-slate-700 text-xs animate-fade-in";
    newComment.innerHTML = `
      <div class="font-bold text-amber-900 dark:text-amber-400">${name} <span class="font-normal text-stone-500">(Just now)</span></div>
      <p class="text-stone-700 dark:text-slate-300 mt-1">${text}</p>
    `;
    list.prepend(newComment);
    document.getElementById('commenterName').value = '';
    document.getElementById('commenterText').value = '';
  }
};

// 7. MOBILE MENU SETUP
function setupMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileNav');

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
}
