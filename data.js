// 2 STATES Event & Blog Dataset

const EVENT_DATA = {
  details: {
    name: "2 STATES",
    subtitle: "A Culinary Journey • Two Cultures. One Table.",
    tagline: "Different Roots ♥ Same Story",
    institution: "Asan Memorial College of Arts and Science",
    department: "Department of Hotel and Catering Management",
    organisedBy: "ASH (Asan Society of Hospitality)",
    presentedBy: "Presented by Second Year Students",
    date: "2026-10-09",
    dateFormatted: "October 09, 2026",
    time: "08:30 PM",
    venue: "ASH Grand Dining Hall & Auditorium",
    ticketPrice: "Complimentary / Invite Only Pass",
    halalInfo: "100% Halal Compliant • Islamic Buffet Style"
  },

  islamicBuffetGallery: [
    {
      title: "Central Buffet Island",
      desc: "360-degree guest access ensuring smooth flow and minimal waiting time.",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Buffet Counter Design",
      desc: "Beautifully designed counter with clear regional signage (Punjab × Tamil Nadu).",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Food Presentation",
      desc: "Dishes presented in traditional brass and earthenware with elegant garnishes.",
      image: "images/pindi_chole_missi_roti.jpg"
    },
    {
      title: "Dining Arrangement",
      desc: "Neat cultural table setting for a warm and inviting guest experience.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Ambience & Decor",
      desc: "Subtle decor elements creating a rich, warm, and immersive dining atmosphere.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80"
    }
  ],

  menu: [
    {
      id: "m1",
      category: "drinks",
      region: "punjab",
      regionName: "Punjab",
      name: "Kesar Badam Lassi",
      tagline: "Rich & Saffron-Infused",
      desc: "A rich and refreshing yogurt drink infused with Kashmiri saffron, crushed almonds, and cardamom, served chilled in traditional clay matkas.",
      badge: "Signature Welcome Drink",
      image: "images/kesar_badam_lassi.jpg",
      ingredients: ["Fresh Yogurt", "Kesar (Saffron)", "Almonds", "Cardamom", "Pistachio Garnishing"],
      spiceLevel: "Sweet & Aromatic"
    },
    {
      id: "m2",
      category: "drinks",
      region: "tamilnadu",
      regionName: "Tamil Nadu",
      name: "Nannari Elaneer",
      tagline: "Cooling & Hydrating",
      desc: "Tender coconut water infused with natural nannari (sarsaparilla) root syrup, fresh lime, and tender coconut pulp.",
      badge: "Signature Welcome Drink",
      image: "images/nannari_elaneer.jpg",
      ingredients: ["Tender Coconut Water", "Nannari Root Syrup", "Fresh Lime", "Coconut Pulp"],
      spiceLevel: "Refreshing & Citrusy"
    },
    {
      id: "m3",
      category: "starters",
      region: "punjab",
      regionName: "Punjab",
      name: "Bharwan Aloo",
      tagline: "Tandoori Stuffed Delight",
      desc: "Charcoal roasted baby potatoes stuffed with spiced cottage cheese, pomegranate seeds, and coriander, served with mint chutney.",
      badge: "Chef's Special Starter",
      image: "images/bharwan_aloo.jpg",
      ingredients: ["Baby Potatoes", "Paneer", "Tandoori Spices", "Anardana", "Mint Chutney"],
      spiceLevel: "Medium Mild"
    },
    {
      id: "m4",
      category: "starters",
      region: "tamilnadu",
      regionName: "Tamil Nadu",
      name: "Vazhaipoo Kola Urundai",
      tagline: "Crispy Banana Blossom Croquettes",
      desc: "Finely minced fresh banana blossom combined with roasted lentils, coconut, fennel, and Chettinad spices, crisp-fried into golden croquettes.",
      badge: "Traditional Heritage Dish",
      image: "images/vazhaipoo_kola_urundai.jpg",
      ingredients: ["Banana Blossom", "Chana Dal", "Grated Coconut", "Fennel Seeds", "Curry Leaves"],
      spiceLevel: "Medium Spicy"
    },
    {
      id: "m5",
      category: "main",
      region: "punjab",
      regionName: "Punjab",
      name: "Pindi Chole & Missi Roti",
      tagline: "Amritsari Heritage Classic",
      desc: "Amritsari chickpeas slow-cooked with black tea bags, whole dried spices, and crushed anardana, served with charred garlic Missi Roti.",
      badge: "Authentic Amritsari",
      image: "images/pindi_chole_missi_roti.jpg",
      ingredients: ["Kabuli Chana", "Black Tea Infusion", "Anardana", "Gram Flour Missi Roti"],
      spiceLevel: "Robust Spicy"
    },
    {
      id: "m6",
      category: "main",
      region: "punjab",
      regionName: "Punjab",
      name: "Butter Chicken with Butter Naan",
      tagline: "Rich Velvet Tomato Gravy",
      desc: "Tandoori chargrilled chicken simmered in a silky tomato, cashew, and fenugreek butter gravy, served with hot Butter Naan.",
      badge: "Crowd Favorite",
      image: "images/butter_chicken.jpg",
      ingredients: ["Chargrilled Chicken", "Butter & Cream", "Cashews", "Tomatoes", "Kasuri Methi"],
      spiceLevel: "Mild & Rich"
    },
    {
      id: "m7",
      category: "main",
      region: "tamilnadu",
      regionName: "Tamil Nadu",
      name: "Kathirikai Theeyal",
      tagline: "Roasted Coconut & Tamarind Masala",
      desc: "Pan-roasted small purple brinjals in a dark, aromatic roasted coconut and tamarind gravy, served over fragrant Seeraga Samba rice.",
      badge: "Chettinad Legacy",
      image: "images/kathirikai_theeyal.jpg",
      ingredients: ["Baby Brinjals", "Roasted Coconut Paste", "Tamarind Pulp", "Seeraga Samba Rice"],
      spiceLevel: "Tangy & Spicy"
    },
    {
      id: "m8",
      category: "main",
      region: "tamilnadu",
      regionName: "Tamil Nadu",
      name: "Chettinad Chicken & Parotta",
      tagline: "Bold & Fragrant Spice Symphony",
      desc: "Tender chicken cooked with hand-pounded Chettinad kalpaasi, star anise, black pepper, and curry leaves, served with flaky Malabar Parotta.",
      badge: "Fiery Classic",
      image: "images/chettinad_chicken.jpg",
      ingredients: ["Farm Chicken", "Chettinad Kalpasi & Pepper", "Curry Leaves", "Flaky Parotta"],
      spiceLevel: "Spicy & Aromatic"
    },
    {
      id: "m9",
      category: "desserts",
      region: "punjab",
      regionName: "Punjab",
      name: "Kesar Phirni",
      tagline: "Chilled Saffron Rice Pudding",
      desc: "A velvety ground basmati rice pudding slow-cooked in whole milk, flavoured with green cardamom, Kashmiri saffron, and silver leaf (vark), served chilled in traditional earthen matka bowls.",
      badge: "Royal Dessert",
      image: "images/kesar_phirni.jpg",
      ingredients: ["Basmati Rice", "Whole Milk", "Kashmiri Saffron", "Silver Vark", "Cardamom & Almonds"],
      spiceLevel: "Sweet & Creamy"
    },
    {
      id: "m10",
      category: "desserts",
      region: "tamilnadu",
      regionName: "Tamil Nadu",
      name: "Elaneer Payasam",
      tagline: "Subtle Coconut Milk Delight",
      desc: "Soft tender coconut pulp blended with freshly pressed coconut milk, condensed milk, and green cardamom, chilled to perfection.",
      badge: "Signature Southern Sweet",
      image: "images/elaneer_payasam.jpg",
      ingredients: ["Tender Coconut Meat", "Coconut Milk", "Cardamom", "Condensed Milk"],
      spiceLevel: "Delicate & Sweet"
    },
    {
      id: "m11",
      category: "beverages",
      region: "punjab",
      regionName: "Punjab",
      name: "Masala Chaas",
      tagline: "Zesty Cumin Buttermilk",
      desc: "Hand-churned spiced buttermilk tempered with roasted cumin, green chillies, ginger, mint, and rock salt.",
      badge: "Digestive Elixir",
      image: "images/masala_chaas.jpg",
      ingredients: ["Fresh Buttermilk", "Roasted Cumin", "Mint Leaves", "Black Salt", "Ginger"],
      spiceLevel: "Zesty & Refreshing"
    },
    {
      id: "m12",
      category: "beverages",
      region: "tamilnadu",
      regionName: "Tamil Nadu",
      name: "Degree Filter Coffee",
      tagline: "Bold Decoction with Rich Foam",
      desc: "Authentic Kumbakonam degree filter coffee brewed from dark roasted chicory coffee beans, frothed with hot milk in traditional brass Davarah and Dabba.",
      badge: "Iconic Southern Brew",
      image: "images/degree_filter_coffee.jpg",
      ingredients: ["Fresh Coffee Decoction", "Pure Milk", "Chicory Blend", "Brassware Davarah"],
      spiceLevel: "Bold & Aromatic"
    }
  ],

  culturalProgram: [
    {
      title: "Dance Fusion",
      icon: "fa-person-dancing",
      desc: "A breathtaking high-energy fusion of Punjabi Bhangra and Tamil Bharatanatyam showcasing harmony in diversity.",
      highlight: "Bhangra x Bharatanatyam",
      image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Music Performances",
      icon: "fa-music",
      desc: "Solo, duet, and acoustic band performances featuring iconic Punjabi and Tamil songs with live Dhol and Veena.",
      highlight: "Punjabi Dhol x Tamil Veena",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Skits & Drama",
      icon: "fa-masks-theater",
      desc: "Witty and heartwarming movie scenes from iconic Pollywood and Kollywood cinema reenacted with a creative student twist.",
      highlight: "Cinematic Parodies",
      image: "https://images.unsplash.com/photo-1469488865564-c2de10f69f96?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Fashion Walk",
      icon: "fa-shirt",
      desc: "A grand ramp walk showcasing traditional Punjabi Kurta Turbans and South Indian Silk Sarees and Veshtis.",
      highlight: "Traditional Glamour",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Interactive Movie Quizzes",
      icon: "fa-gamepad",
      desc: "Engaging trivia rounds testing guests on Pollywood & Kollywood film history with exciting prizes.",
      highlight: "Audience Participation",
      image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Musical Dining Session",
      icon: "fa-guitar",
      desc: "Soulful live background acoustic music soothing the guests while they enjoy the 2 States buffet.",
      highlight: "Acoustic Dining Ambience",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80"
    }
  ],

  eventFlow: [
    { step: "01", title: "Guest Arrival & Welcome", desc: "Guests are warmly welcomed at the entrance with traditional attire, welcome drinks, and cultural greetings.", icon: "fa-door-open", image: "images/guest_arrival.jpg" },
    { step: "02", title: "Welcome Drinks", desc: "Served refreshing beverages: Kesar Badam Lassi & Nannari Elaneer with brief cultural notes.", icon: "fa-glass-water", image: "images/kesar_badam_lassi.jpg" },
    { step: "03", title: "Guest Escorting", desc: "Guests are gracefully escorted to the dining hall with a short introduction about the event concept.", icon: "fa-user-group", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80" },
    { step: "04", title: "Seating & Orientation", desc: "Seated guests receive a brief walkthrough of the curated menu, Islamic buffet layout, and theme.", icon: "fa-chair", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80" },
    { step: "05", title: "Buffet Opening", desc: "Formal inauguration of the Islamic Buffet Island by department heads and student leads.", icon: "fa-utensils", image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80" },
    { step: "06", title: "Dining Experience", desc: "Guests enjoy a wide array of Punjabi and Tamil dishes arranged in a centralized, smooth-flowing counter.", icon: "fa-bowl-food", image: "images/pindi_chole_missi_roti.jpg" },
    { step: "07", title: "Musical Session", desc: "Soulful live fusion music with acoustic guitars, tabla, dhol, and vocals enhances dining atmosphere.", icon: "fa-compact-disc", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80" },
    { step: "08", title: "Cultural Performances", desc: "Pollywood x Kollywood stage performances: Bhangra-Bharatanatyam fusion, drama, and fashion walk.", icon: "fa-clapperboard", image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=600&q=80" },
    { step: "09", title: "Interactive Segments", desc: "Movie quizzes, audience interaction, spotlight awards, and fun challenges.", icon: "fa-comments", image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=80" },
    { step: "10", title: "Desserts & Closing", desc: "Concluding the feast with Kesar Phirni and Elaneer Payasam served alongside Degree Coffee & Chaas.", icon: "fa-ice-cream", image: "images/kesar_phirni.jpg" },
    { step: "11", title: "Farewell Token", desc: "Guests are presented with a handmade memento token of appreciation.", icon: "fa-gift", image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=600&q=80" },
    { step: "12", title: "Guest Departure", desc: "A warm send-off with gratitude for celebrating the unity of two iconic states.", icon: "fa-person-walking-arrow-right", image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&q=80" },
    { step: "13", title: "Memorable Experience", desc: "Leaving a lasting impression of hospitality, culture, and culinary excellence.", icon: "fa-heart", image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=600&q=80" }
  ],

  blogs: [
    {
      id: "blog-1",
      title: "Two States, One Table: The Tale of Punjabi Warmth & Tamil Grace",
      category: "Cuisine & Culture",
      author: "ASH Editorial Team",
      date: "September 24, 2026",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      summary: "Explore how the rich agricultural heartlands of Punjab and the coastal heritage of Tamil Nadu find a harmonious balance on one dining table at Asan Memorial College.",
      content: `
        <p class="lead">India's vast landscape is bound by a shared love for hospitality, food, and music. The <strong>"2 States"</strong> theme curated by the 2nd Year Hotel and Catering Management students brings together two legendary cultural hubs: <strong>Punjab</strong> from the North and <strong>Tamil Nadu</strong> from the South.</p>
        
        <h3>The Culinary Contrast and Harmony</h3>
        <p>Punjabi cuisine is world-renowned for its rich gravies, tandoori marinades, slow-cooked legumes like Pindi Chole, and generous use of dairy such as ghee, paneer, and thick yogurt in Kesar Badam Lassi. On the other hand, Tamil Nadu cuisine celebrates native ingredients such as tender coconut, tamarind, Chettinad spices, banana blossom, and Seeraga Samba rice.</p>
        
        <blockquote class="my-4 border-l-4 border-amber-500 pl-4 italic font-serif">
          "When you place Butter Naan next to Seeraga Samba rice and Kesar Phirni alongside Elaneer Payasam, you don't just see contrast—you witness India's unity on one dining table."
        </blockquote>

        <h3>Hospitality at Its Core</h3>
        <p>In Punjab, hospitality is marked by hearty laughter, energetic Dhol beats, and abundant portions. In Tamil Nadu, it is defined by warm greetings of <em>'Vanakkam'</em>, banana leaf service, and meticulous attention to detail. 2 States marries these two traditions in an unforgettable dining experience.</p>
      `
    },
    {
      id: "blog-2",
      title: "Behind the Aprons: How 2nd Year Hospitality Students Crafted 2 States",
      category: "Student Life",
      author: "Chef Student Council",
      date: "September 22, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80",
      summary: "An exclusive look at the months of trial kitchens, decor design, attire styling, and workflow planning leading up to the 2 States grand event.",
      content: `
        <p class="lead">Organizing a themed culinary event of this scale requires military precision, deep cultural research, and boundless enthusiasm. The second-year students of the Department of Hotel and Catering Management at Asan Memorial College have spent weeks turning vision into reality.</p>

        <h3>Trial Kitchens & Recipe Standardization</h3>
        <p>Replicating authentic flavors required extensive experimentation. Our student chefs perfected the balance of roasted spices for <em>Chettinad Chicken</em> and tested black tea infusion techniques for the perfect deep dark shade of <em>Pindi Chole</em>. Every dish passed rigorous taste tests supervised by department faculty.</p>

        <h3>Ambiance & Islamic Buffet Flow</h3>
        <p>Beyond food, hospitality demands seamless service flow. The team designed a centralized <strong>Islamic Buffet Island</strong> that enables 360-degree guest access, minimal waiting times, and elegant presentation using traditional brassware and earthenware.</p>
      `
    },
    {
      id: "blog-3",
      title: "Pollywood × Kollywood: When Beats Meet Rhythms on Stage",
      category: "Entertainment",
      author: "Cultural Committee",
      date: "September 20, 2026",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
      summary: "From high-octane Bhangra moves to graceful Bharatanatyam gestures, experience the ultimate cinematic crossover between Pollywood and Kollywood.",
      content: `
        <p class="lead">Indian cinema is the heartbeat of our pop culture. The cultural segment of 2 States celebrates the vibrant energy of <strong>Pollywood</strong> alongside the electrifying storytelling of <strong>Kollywood</strong>.</p>

        <h3>Bhangra x Bharatanatyam Fusion</h3>
        <p>Our student performers have choreographed a special fusion dance where the foot-tapping dhol beats of Bhangra blend with the rhythmic footwork and mudras of Bharatanatyam. It is a visual spectacle representing energy meeting grace.</p>

        <h3>Live Acoustic Dining Session</h3>
        <p>As guests enjoy their meals, student musicians will perform acoustic medleys blending Punjabi classics with Tamil favorites like <em>'Munbe Vaa'</em> and <em>'Kannalane'</em>.</p>
      `
    },
    {
      id: "blog-4",
      title: "The Art of Islamic Buffet Style: Modern Hospitality Rooted in Efficiency",
      category: "Hospitality Management",
      author: "Dept. of Catering",
      date: "September 18, 2026",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
      summary: "Discover why the Islamic Buffet Style concept was chosen for 2 States—offering 100% Halal compliance, reduced labor, organized flow, and visual appeal.",
      content: `
        <p class="lead">Effective catering management relies on choosing a service style that maximizes guest comfort while maintaining high operational efficiency. The <strong>Islamic Buffet Style</strong> selected for 2 States achieves this balance perfectly.</p>

        <h3>Key Advantages of Islamic Buffet Layout:</h3>
        <ul>
          <li><strong>Centralized Buffet Island:</strong> Guests can access dishes from all sides, eliminating long queues.</li>
          <li><strong>100% Halal Compliance:</strong> Standardized food preparation adhering strictly to halal protocols.</li>
          <li><strong>Labor & Time Efficiency:</strong> Quick replenishment counters allowing servers to focus on guest hospitality.</li>
          <li><strong>Aesthetic Cultural Decor:</strong> Decorated with brassware, earthenware, and banana leaves.</li>
        </ul>
      `
    },
    {
      id: "blog-5",
      title: "Beverage Chronicles: Kesar Badam Lassi vs. Degree Filter Coffee",
      category: "Food & Drinks",
      author: "Mixology & Beverage Club",
      date: "September 15, 2026",
      readTime: "3 min read",
      image: "images/kesar_badam_lassi.jpg",
      summary: "A deep dive into two iconic beverages that define the spirit of North and South Indian hospitality.",
      content: `
        <p class="lead">Beverages in India are more than refreshments—they are cultural statements. At 2 States, guests can savor the rich, velvety sweetness of Punjabi <strong>Kesar Badam Lassi</strong> alongside the robust, aromatic froth of South Indian <strong>Degree Filter Coffee</strong>.</p>

        <h3>Kesar Badam Lassi</h3>
        <p>Made from thick hung curd, infused with pure Kashmiri saffron, crushed almonds, cardamom, and served chilled in traditional clay <em>matkas</em>. It provides instant cooling and rich indulgence.</p>

        <h3>Degree Filter Coffee</h3>
        <p>Brewed using a traditional brass coffee filter with a custom chicory blend, poured back and forth between the <em>Davarah and Dabba</em> to create a velvety foam top. It is the ultimate aromatic finish to a magnificent meal.</p>
      `
    }
  ]
};
