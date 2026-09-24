/**
 * =========================================================================
 * CONFIG.JS - WEBSITE REBRANDING CONFIGURATION & ENGINE
 * =========================================================================
 * 
 * INSTRUCTIONS:
 * 1. Modify Section 1 (Data Entry) to update branding, styles, images, and content.
 * 2. Include this script at the end of index.html after index.js:
 *    
 * =========================================================================
 */

/* =========================================================================
   SECTION 1: DATA ENTRY CONFIGURATION
   ========================================================================= */
const REBRAND_CONFIG = {
  // --- BRAND IDENTIFICATION & META DATA ---
  brand: {
    name: "Twilight T. Coffee House",
    suffix: ".",
    tagline: "Artisanal Coffee & Specialty Teas in HSR Layout",
    description: "Twilight T. Coffee House offers specialty espresso, signature lattes, artisanal matcha brews, and delightful fresh bakes in a cozy, character-filled setting in HSR Layout, Bengaluru.",
    keywords: "coffee, twilight coffee house, hsr layout cafe, bangalore coffee shop, matcha, specialty espresso, bakes, dessert cafe",
    themeColor: "#0d0e12",
    domain: "https://www.zomato.com/bangalore/twilight-t-coffee-house-hsr-bangalore",
    ogImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlZ0Ay5MSdTjar6-EwJtUq_MO2xjYzULIHmZ0RFhHSes2m_sQGSc5WZqCcS1LqgHPV-CA6I2P2jr8BsmxEGYDWSWrkMSyNNe0peF69lo95FBqDYAXRK-e-lztc4fEXC2h1fDfTW-gFyf0ik=w243-h174-n-k-no-nu",
    faviconEmoji: "☕",
    whatsappNumber: "919008539509"
  },

  // --- GLOBAL STYLES & THEMING ---
  styles: {
    colors: {
      bg: "#0d0e12",
      bgCard: "#15181e",
      bgLight: "#1c2028",
      primary: "#d4a373",
      primaryHover: "#faedcd",
      text: "#e0e2ec",
      textMuted: "#9aa0b4",
      accent: "#2c313c"
    },
    fonts: {
      heading: "'Syne', sans-serif",
      body: "'Plus Jakarta Sans', sans-serif"
    }
  },

  // --- HERO SECTION ---
  hero: {
    subtitle: "Artisanal Coffee & Specialty Brews",
    title: "Unwind & Savor at Twilight T. Coffee House",
    description: "Experience handcrafted espressos, sweet signature lattes, and ceremonial matcha in a warm, character-filled neighborhood sanctuary in HSR Layout.",
    bgImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlZ0Ay5MSdTjar6-EwJtUq_MO2xjYzULIHmZ0RFhHSes2m_sQGSc5WZqCcS1LqgHPV-CA6I2P2jr8BsmxEGYDWSWrkMSyNNe0peF69lo95FBqDYAXRK-e-lztc4fEXC2h1fDfTW-gFyf0ik=w243-h174-n-k-no-nu",
    stats: [
      { value: "100%", label: "Handcrafted Brews" },
      { value: "10am-10pm", label: "Open Daily" },
      { value: "4.9 ★", label: "Happy Guests" }
    ]
  },

  // --- ABOUT US SECTION ---
  about: {
    subtitle: "About Us",
    title: "A Cozy Corner for Coffee, Conversations & Community",
    paragraphs: [
      "Situated in the heart of HSR Layout, Twilight T. Coffee House is designed with unique interiors that lend a warm, welcoming character. Whether you are catching up with friends, unwinding outdoors, or enjoying a slow afternoon, our space offers the perfect backdrop.",
      "From precision-pulled espressos and inventive cold brews to indulgent sweet lattes and ceremonial grade matcha selections, every beverage is prepared with passion and care."
    ],
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmPCkjsuQtpWWUy01S6iSQeq55993xoPW6e1QG_PXfWpSUmkwWqWS0lJm-CxygZ-CE13l8cY_hBPNka8XOhOFwO5w_aI5nxr1sY2y172g4PKtR5CuOPaRJiyrpZ4pSr_HFGoeqeyQKuS68=w243-h305-n-k-no-nu",
    imageAlt: "Interior seating ambiance of Twilight T. Coffee House in HSR Layout",
    experienceValue: "7 Days",
    experienceLabel: "Open 10 AM – 10 PM"
  },

  // --- SPECIALS / NEWLY ADDED FOOD ---
  specials: {
    subtitle: "House Favorites",
    title: "Signature Brews & Treats",
    badge: "Popular",
    description: "Handpicked selections from our menu created to elevate your coffee breaks.",
    items: [
      {
        badge: "Chef's Pick",
        img: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=600",
        alt: "Strawberry Matcha Beverage",
        diet: "veg",
        title: "Strawberry Matcha",
        price: "₹260",
        desc: "Rich ceremonial matcha layered with fresh strawberry reduction over ice."
      },
      {
        badge: "Specialty",
        img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600",
        alt: "Spanish Latte Coffee",
        diet: "veg",
        title: "Spanish Latte",
        price: "₹224 / ₹251",
        desc: "Rich double espresso layered with velvety steamed milk and sweetened condensed milk."
      },
      {
        badge: "Favorite",
        img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
        alt: "Fresh Butter Croissant",
        diet: "veg",
        title: "Butter Croissant",
        price: "₹180",
        desc: "Fresh, buttery, and perfectly flaky croissant baked daily."
      }
    ]
  },

  // --- OFFERS SECTION ---
  offers: {
    subtitle: "Exclusive Savings",
    title: "Current Offers",
    items: [
      {
        tag: "WALK-IN SPECIAL",
        title: "Flat 10% OFF",
        desc: "Get 10% off on your first order when you check-in or connect with us on WhatsApp.",
        code: "TWILIGHT10",
        highlight: false
      },
      {
        tag: "MATCHA & BAKE COMBO",
        title: "Matcha Break @ ₹399",
        desc: "Pair any specialty Matcha drink with a fresh buttery croissant for a delicious evening treat.",
        code: "MATCHA&BAKE",
        highlight: true
      },
      {
        tag: "AFTERNOON PAIRING",
        title: "Coffee + Pastry Combo",
        desc: "Enjoy any classic espresso beverage with a fresh pastry at special prices between 3 PM - 6 PM.",
        code: "TWILIGHTPAIRS",
        highlight: false
      }
    ]
  },

  // --- FEATURED MENU SECTION ---
  menu: {
    subtitle: "Our Full Menu",
    title: "Handcrafted Coffee, Sweet Tooth Specials & Matcha",
    pdfUrl: "assets/twilight-menu.pdf",
    pdfFilename: "Twilight_Coffee_House_Menu.pdf",
    categories: [
      { id: "originals", label: "Originals", active: true },
      { id: "sweet-tooth", label: "Sweet Tooth", active: false },
      { id: "matcha", label: "Matcha No Kohoro", active: false }
    ],
    items: [
      /* Originals */
      {
        category: "originals",
        img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=600",
        title: "Espresso",
        price: "₹98 (Hot)",
        diet: "veg",
        desc: "Rich and concentrated shot of pure espresso pulled from specialty beans.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bangalore/twilight-t-coffee-house-hsr-bangalore?amp=1"
      },
      {
        category: "originals",
        img: "https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&q=80&w=600",
        title: "Americano",
        price: "₹125 (Hot) / ₹143 (Iced)",
        diet: "veg",
        desc: "Smooth hot or chilled espresso diluted with hot water or poured over ice.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bangalore/twilight-t-coffee-house-hsr-bangalore?amp=1"
      },
      {
        category: "originals",
        img: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=600",
        title: "Cortado",
        price: "₹143 (Hot)",
        diet: "veg",
        desc: "Equal parts espresso and warm steamed milk to cut the acidity.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bangalore/twilight-t-coffee-house-hsr-bangalore?amp=1"
      },
      {
        category: "originals",
        img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=600",
        title: "Cappuccino / Latte",
        price: "₹161 (Hot) / ₹188 (Iced)",
        diet: "veg",
        desc: "Classic creamy espresso beverage served with microfoam milk.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bangalore/twilight-t-coffee-house-hsr-bangalore?amp=1"
      },
      {
        category: "originals",
        img: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&q=80&w=600",
        title: "Flat White",
        price: "₹170 (Hot)",
        diet: "veg",
        desc: "Double shot espresso poured over velvety steamed milk foam.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bangalore/twilight-t-coffee-house-hsr-bangalore?amp=1"
      },
      {
        category: "originals",
        img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=600",
        title: "Café Mocha",
        price: "₹242 (Hot) / ₹251 (Iced)",
        diet: "veg",
        desc: "Espresso combined with rich cocoa and silky steamed milk.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bangalore/twilight-t-coffee-house-hsr-bangalore?amp=1"
      },

      /* Sweet Tooth */
      {
        category: "sweet-tooth",
        img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=600",
        title: "Café Bombon",
        price: "₹188 (Hot)",
        diet: "veg",
        desc: "Intense espresso layered over sweet condensed milk.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bangalore/twilight-t-coffee-house-hsr-bangalore?amp=1"
      },
      {
        category: "sweet-tooth",
        img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600",
        title: "Spanish Latte",
        price: "₹224 (Hot) / ₹251 (Iced)",
        diet: "veg",
        desc: "Sweetened milk espresso beverage with a smooth caramelised taste profile.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bangalore/twilight-t-coffee-house-hsr-bangalore?amp=1"
      },
      {
        category: "sweet-tooth",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkS4naC4nz8InV1CEnuGTHL_8xLGbZK8Y1UFPQhuC7YA&s=10",
        title: "Tiramisu Latte",
        price: "₹233 (Hot) / ₹251 (Iced)",
        diet: "veg",
        desc: "Decadent dessert espresso layered with mascarpone-inspired cocoa flavors.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bangalore/twilight-t-coffee-house-hsr-bangalore?amp=1"
      },
      {
        category: "sweet-tooth",
        img: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&q=80&w=600",
        title: "Shaken Vietnamese Coffee",
        price: "₹233 (Iced)",
        diet: "veg",
        desc: "Strong bold brew shaken over ice with sweet condensed milk.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bangalore/twilight-t-coffee-house-hsr-bangalore?amp=1"
      },
      {
        category: "sweet-tooth",
        img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600",
        title: "Citrus Americano",
        price: "₹170 (Iced)",
        diet: "veg",
        desc: "Chilled dark americano infused with zesty citrus tones.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bangalore/twilight-t-coffee-house-hsr-bangalore?amp=1"
      },
      {
        category: "sweet-tooth",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD1DUl6rBKgLavzFbtNcXXsI_YGNdxzQfPnz-vQqP1MA&s=10",
        title: "Affogato",
        price: "₹215 (Iced)",
        diet: "veg",
        desc: "A rich hot espresso shot poured over a scoop of premium vanilla ice cream.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bangalore/twilight-t-coffee-house-hsr-bangalore?amp=1"
      },

      /* Matcha No Kohoro */
      {
        category: "matcha",
        img: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&q=80&w=600",
        title: "Matcha",
        price: "₹233 (Hot) / ₹251 (Iced)",
        diet: "veg",
        desc: "Authentic ceremonial grade Japanese green tea whisked smooth.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bangalore/twilight-t-coffee-house-hsr-bangalore?amp=1"
      },
      {
        category: "matcha",
        img: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=600",
        title: "Strawberry Matcha",
        price: "₹260 (Iced)",
        diet: "veg",
        desc: "Pure matcha poured over organic strawberry puree and cold milk.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bangalore/twilight-t-coffee-house-hsr-bangalore?amp=1"
      },
      {
        category: "matcha",
        img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=600",
        title: "Coconut Dreamy Matcha",
        price: "₹269 (Iced)",
        diet: "veg",
        desc: "Rich green tea matcha layered with refreshing coconut notes.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bangalore/twilight-t-coffee-house-hsr-bangalore?amp=1"
      },
      {
        category: "matcha",
        img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=600",
        title: "Dirty Matcha",
        price: "₹278 (Iced)",
        diet: "veg",
        desc: "Ceremonial matcha shot combined with a bold single shot of espresso.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bangalore/twilight-t-coffee-house-hsr-bangalore?amp=1"
      }
    ]
  },

  // --- REVIEWS & TESTIMONIALS ---
  reviews: {
    subtitle: "Testimonials",
    title: "What Our Guests Say",
    items: [
      {
        stars: 5,
        text: "\"Stopped by this coffee house in HSR and really liked the vibe. The place has a warm, comfortable feel with unique interiors that give it a lot of character. Good coffee selection, and it's the kind of spot where you can easily spend a couple of hours chatting or just unwinding.\"",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
        name: "Ameena Rowez",
        role: "Local Guide • 46 reviews"
      },
      {
        stars: 5,
        text: "\"Relatively small coffee shop on a mostly residential street in HSR. Voices were a little loud in the narrow indoor space however various types of seating to choose from outdoors also. Thoroughly enjoyed the coffees and mocktails/inventive soft drinks... If in the area, I would come back here for something non-standard...\"",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
        name: "Andrew Scoles",
        role: "Local Guide • 10 reviews"
      },
      {
        stars: 5,
        text: "\"Had a great experience at T. Coffee House, HSR! The croissant was fresh, buttery, and perfectly flaky. I also loved the Mango Matcha – a unique and refreshing combination that was well-balanced and delicious. The ambiance was cozy, and the overall experience was wonderful. Definitely a place I'd visit again...\"",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
        name: "Sw Yash",
        role: "Local Guide • 31 reviews"
      }
    ],
    googleCta: {
      title: "Enjoyed your time at Twilight T. Coffee House?",
      desc: "Help others discover our cozy spot in HSR Layout by leaving a review!",
      url: "https://www.google.com/maps/search/?api=1&query=Twilight+T.+Coffee+House+HSR+Layout+Bengaluru"
    }
  },

  // --- GALLERY SECTION ---
  gallery: {
    subtitle: "Visual Experience",
    title: "Inside Twilight T. Coffee House",
    images: [
      { 
        src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk-TkT8pggkP9EOqvSYCEZ0Q1SG1auATPb7xCC0KUG0nmTNQDU5xjmRDwn8iyiT5fWsjB9sl1TiIxPzJ0e0GHz0NMMQQLp-1_SOiLrVb9VhglhjzlstXBVRf46e0n26M8317fkUvZ6qz_E=w243-h244-n-k-no-nu", 
        alt: "Twilight T. Coffee House Ambiance 1" 
      },
      { 
        src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmVM0VxLIvj6V7OEX1cw6H7sq5-LaHFPLpAyBTJXKiEOWbUpEAVxPC8A8PdegDl5zlDppZb7CIHn_6r9ugaMBVQGRcxp_EnayucP9WG-bdXqbkyE4rfq2peVZEqEYtBtR002Y1eL6XocKuz=w243-h406-n-k-no-nu", 
        alt: "Twilight T. Coffee House Ambiance 2" 
      },
      { 
        src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWluPeSOLZqzWqoe7fY4Eg8HLqOInHaV4z32mbDpq323RMr7IHLFuQf4ezuiOWc_vBq4hgNWKIhj8TxVCCaOLVcMXsyD9_pzKAF44sPoBWu6aZz6q360iGCBuXq9FDhGPfRprBOdMkNdAQiD=w243-h305-n-k-no-nu", 
        alt: "Twilight T. Coffee House Outdoor Seating" 
      },
      { 
        src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn0yXqtsxUtHcRnhrPdBwyn83-wEUlzmtnD9lCbXlZxodKW_FrOQ_ZGhQYCFbEMpmGS-1aJuhArMQOI1oal2CpQlV8-EA4VrxVQuGForouz02M1PMeb54PShskg5U4Q46ld9-YCC-_O7lZn=w243-h406-n-k-no-nu", 
        alt: "Twilight T. Coffee House Coffee & Treats" 
      }
    ]
  },

  // --- LOCATION & CONTACT SECTION ---
  location: {
    subtitle: "Visit Us",
    title: "Location & Opening Hours",
    description: "Located in HSR Layout, Bengaluru. Drop by for your daily morning espresso, afternoon matcha, or cozy evening unwind.",
    address: "Maha Bazar, 1130, 24th Main, opposite Lane to 11th Cross Rd, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102",
    hours: [
      "Monday - Sunday: 10:00 AM - 10:00 PM"
    ],
    email: "contact@twilightcoffee.in",
    phone: "+91 9008539509",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.89947926127!2d77.6483!3d12.9141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae149a421e42a9%3A0x6b68a803f23a4a1!2sHSR%20Layout%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
  },

  // --- FOOTER SECTION ---
  footer: {
    description: "Twilight T. Coffee House - Handcrafted specialty coffees, matcha brews, and delicious bakes in HSR Layout, Bengaluru.",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/t.coffee.house?stkn=bDJwc2IyNTlraTE1", iconClass: "ph-instagram-logo" },
      { platform: "zomato", url: "https://www.zomato.com/bangalore/twilight-t-coffee-house-hsr-bangalore?amp=1", iconClass: "ph-storefront" },
      { platform: "whatsapp", url: "https://wa.me/919008539509", iconClass: "ph-whatsapp-logo" }
    ],
    copyright: "© 2026 Twilight T. Coffee House. All rights reserved."
  },

  // --- WI-FI MODAL SETTINGS ---
  wifi: {
    ssid: "Twilight_Guest_WiFi",
    password: "twilightcoffee"
  }
};

/* =========================================================================
   SECTION 2: REBRANDING ENGINE CODE
   ========================================================================= */
(function initRebrandingEngine(cfg) {
  'use strict';

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element|null}
   */
  const $ = (selector, ctx = document) => ctx.querySelector(selector);

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element[]}
   */
  const $$ = (selector, ctx = document) => Array.from(ctx.querySelectorAll(selector));

  function applyStyles() {
    const root = document.documentElement;
    if (cfg.styles?.colors) {
      if (cfg.styles.colors.bg) root.style.setProperty('--color-bg', cfg.styles.colors.bg);
      if (cfg.styles.colors.bgCard) root.style.setProperty('--color-bg-card', cfg.styles.colors.bgCard);
      if (cfg.styles.colors.bgLight) root.style.setProperty('--color-bg-light', cfg.styles.colors.bgLight);
      if (cfg.styles.colors.primary) root.style.setProperty('--color-primary', cfg.styles.colors.primary);
      if (cfg.styles.colors.primaryHover) root.style.setProperty('--color-primary-hover', cfg.styles.colors.primaryHover);
      if (cfg.styles.colors.text) root.style.setProperty('--color-text', cfg.styles.colors.text);
      if (cfg.styles.colors.textMuted) root.style.setProperty('--color-text-muted', cfg.styles.colors.textMuted);
      if (cfg.styles.colors.accent) root.style.setProperty('--color-accent', cfg.styles.colors.accent);
    }
    if (cfg.styles?.fonts) {
      if (cfg.styles.fonts.heading) root.style.setProperty('--font-heading', cfg.styles.fonts.heading);
      if (cfg.styles.fonts.body) root.style.setProperty('--font-body', cfg.styles.fonts.body);
    }
  }

  function applyMeta() {
    if (!cfg.brand) return;
    
    const fullTitle = `${cfg.brand.name} | ${cfg.brand.tagline}`;
    document.title = fullTitle;

    /**
     * @param {string} selector
     * @param {string} content
     */
    const setMeta = (selector, content) => {
      const el = $(selector);
      if (el) el.setAttribute('content', content);
    };

    setMeta('meta[name="title"]', fullTitle);
    setMeta('meta[name="description"]', cfg.brand.description);
    setMeta('meta[name="keywords"]', cfg.brand.keywords);
    setMeta('meta[name="theme-color"]', cfg.brand.themeColor);

    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', cfg.brand.description);
    setMeta('meta[property="og:image"]', cfg.brand.ogImage);
    setMeta('meta[property="og:url"]', cfg.brand.domain);
    setMeta('meta[property="og:site_name"]', `${cfg.brand.name} Cafe`);

    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', cfg.brand.description);
    setMeta('meta[name="twitter:image"]', cfg.brand.ogImage);
    setMeta('meta[name="twitter:url"]', cfg.brand.domain);

    const favicon = $('link[rel="icon"]');
    if (favicon && cfg.brand.faviconEmoji) {
      favicon.setAttribute('href', `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${cfg.brand.faviconEmoji}</text></svg>`);
    }

    const schemaScript = $('script[type="application/ld+json"]');
    if (schemaScript) {
      try {
        const schemaData = JSON.parse(schemaScript.textContent);
        schemaData.name = `${cfg.brand.name} ${cfg.brand.tagline}`;
        schemaData.image = cfg.brand.ogImage;
        schemaData.url = cfg.brand.domain;
        schemaData["@id"] = cfg.brand.domain;
        if (cfg.location) {
          schemaData.telephone = cfg.location.phone;
        }
        schemaScript.textContent = JSON.stringify(schemaData, null, 2);
      } catch (err) {
        console.warn("Failed to update JSON-LD schema:", err);
      }
    }
  }

  function applyBrandLogos() {
    $$('.logo').forEach(logoEl => {
      if (logoEl.childNodes.length > 0) {
        logoEl.childNodes[0].nodeValue = cfg.brand.name;
      } else {
        logoEl.textContent = cfg.brand.name;
      }
      let span = $('span', logoEl);
      if (!span && cfg.brand.suffix) {
        span = document.createElement('span');
        logoEl.appendChild(span);
      }
      if (span) span.textContent = cfg.brand.suffix;
      logoEl.setAttribute('aria-label', `${cfg.brand.name} Home`);
    });
  }

  function applyHero() {
    if (!cfg.hero) return;
    const heroSec = $('#home');
    if (heroSec && cfg.hero.bgImage) {
      heroSec.style.background = `linear-gradient(to right, rgba(13,14,18,0.95), rgba(13,14,18,0.6)), url('${cfg.hero.bgImage}') center/cover no-repeat`;
    }
    
    const sub = $('.hero-content .section-subtitle');
    if (sub) sub.textContent = cfg.hero.subtitle;
    
    const title = $('.hero-title');
    if (title) title.textContent = cfg.hero.title;
    
    const desc = $('.hero-description');
    if (desc) desc.textContent = cfg.hero.description;

    const statsContainer = $('.hero-stats');
    if (statsContainer && cfg.hero.stats) {
      statsContainer.innerHTML = cfg.hero.stats.map(s => `
        <div class="stat-item">
          <p class="stat-value">${s.value}</p>
          <p class="stat-label">${s.label}</p>
        </div>
      `).join('');
    }
  }

  function applyAbout() {
    if (!cfg.about) return;
    const aboutSec = $('#about');
    if (!aboutSec) return;

    const img = $('.about-img', aboutSec);
    if (img) {
      img.src = cfg.about.image;
      img.alt = cfg.about.imageAlt;
    }

    const badge = $('.about-experience-badge', aboutSec);
    if (badge) {
      badge.innerHTML = `
        <div style="font-size: 1.8rem; line-height: 1;">${cfg.about.experienceValue}</div>
        <div style="font-size: 0.8rem;">${cfg.about.experienceLabel}</div>
      `;
    }

    const sub = $('.section-subtitle', aboutSec);
    if (sub) sub.textContent = cfg.about.subtitle;

    const title = $('.section-title', aboutSec);     if (title) title.textContent = cfg.about.title;      const textMuted = $$('.text-muted', aboutSec);
    if (cfg.about.paragraphs && cfg.about.paragraphs.length >= 2) {
      if (textMuted[0]) textMuted[0].textContent = cfg.about.paragraphs[0];
      if (textMuted[1]) textMuted[1].textContent = cfg.about.paragraphs[1];
    }
  }

  function applySpecials() {
    if (!cfg.specials) return;
    const specSec = $('#new-food');
    if (!specSec) return;

    const sub = $('.section-subtitle', specSec);
    if (sub) sub.textContent = cfg.specials.subtitle;

    const title = $('.section-title', specSec);
    if (title) {
      title.innerHTML = `${cfg.specials.title} <span class="badge-new">${cfg.specials.badge}</span>`;
    }

    const desc = $('.text-muted', specSec);
    if (desc) desc.textContent = cfg.specials.description;

    const grid = $('.new-items-grid', specSec);
    if (grid && cfg.specials.items) {
      grid.innerHTML = cfg.specials.items.map(item => `
        <article class="new-food-card">
          <div class="new-food-img-wrapper">
            <span class="new-food-badge">${item.badge}</span>
            <img src="${item.img}" alt="${item.alt}" loading="lazy" decoding="async">
          </div>
          <div class="new-food-content">
            <div class="new-food-header">
              <h3 class="new-food-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="new-food-price">${item.price}</span>
            </div>
            <p class="new-food-desc">${item.desc}</p>
            <a href="#location" class="btn btn-outline btn-compact">Order Fresh</a>
          </div>
        </article>
      `).join('');
    }
  }

  function applyOffers() {
    if (!cfg.offers) return;
    const offerSec = $('#offers');
    if (!offerSec) return;

    const sub = $('.section-subtitle', offerSec);
    if (sub) sub.textContent = cfg.offers.subtitle;

    const title = $('.section-title', offerSec);
    if (title) title.textContent = cfg.offers.title;

    const grid = $('.offers-grid', offerSec);
    if (grid && cfg.offers.items) {
      grid.innerHTML = cfg.offers.items.map(o => `
        <div class="offer-card ${o.highlight ? 'highlight-offer' : ''}">
          <div class="offer-tag">${o.tag}</div>
          <h3 class="offer-title">${o.title}</h3>
          <p class="offer-desc">${o.desc}</p>
          <div class="offer-code-wrapper">
            <span>Code: <strong>${o.code}</strong></span>
          </div>
        </div>
      `).join('');
    }
  }

  function applyMenu() {
    if (!cfg.menu) return;
    const menuSec = $('#menu');
    if (!menuSec) return;

    const sub = $('.section-subtitle', menuSec);
    if (sub) sub.textContent = cfg.menu.subtitle;

    const title = $('.section-title', menuSec);
    if (title) title.textContent = cfg.menu.title;

    const dlBtn = $('.btn-download-menu', menuSec);
    if (dlBtn) {
      dlBtn.setAttribute('href', cfg.menu.pdfUrl);
      dlBtn.setAttribute('download', cfg.menu.pdfFilename);
    }

    const catContainer = $('.category-filter-container', menuSec);
    if (catContainer && cfg.menu.categories) {
      catContainer.innerHTML = cfg.menu.categories.map(c => `
        <button class="category-btn ${c.active ? 'active' : ''}" role="tab" aria-selected="${c.active}" aria-controls="menu-grid" data-filter="${c.id}">${c.label}</button>
      `).join('');
    }

    const menuGrid = $('#menu-grid');
    if (menuGrid && cfg.menu.items) {
      menuGrid.innerHTML = cfg.menu.items.map(item => `
        <article class="food-card" data-category="${item.category}">
          <div class="food-card-img-wrapper">
            <img src="${item.img}" alt="${item.title}" loading="lazy" decoding="async">
          </div>
          <div class="food-card-body">
            <div class="food-card-header">
              <h3 class="food-card-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="food-card-price">${item.price}</span>
            </div>
            <p class="food-card-desc">${item.desc}</p>
            <div class="food-card-actions">
              <a href="${item.swiggyUrl}" target="_blank" rel="noopener" class="btn btn-order btn-swiggy">Order with Swiggy</a>
              <a href="${item.zomatoUrl}" target="_blank" rel="noopener" class="btn btn-order btn-zomato">Order with Zomato</a>
              <button type="button" class="btn btn-order btn-whatsapp order-wa-btn" data-item-name="${item.title}" data-item-price="${item.price}">Order via WhatsApp</button>
            </div>
          </div>
        </article>
      `).join('');
    }
  }

  function applyReviews() {
    if (!cfg.reviews) return;
    const revSec = $('#reviews');
    if (!revSec) return;

    const sub = $('.section-subtitle', revSec);
    if (sub) sub.textContent = cfg.reviews.subtitle;

    const title = $('.section-title', revSec);
    if (title) title.textContent = cfg.reviews.title;

    const grid = $('.reviews-grid', revSec);
    if (grid && cfg.reviews.items) {
      grid.innerHTML = cfg.reviews.items.map(r => `
        <figure class="review-card">
          <blockquote class="review-text">
            <div class="review-stars" aria-label="Rating: ${r.stars} out of 5 stars">
              ${Array(r.stars).fill('<i class="ph-fill ph-star" aria-hidden="true"></i>').join('')}
            </div>
            <p>${r.text}</p>
          </blockquote>
          <figcaption class="reviewer-info">
            <img src="${r.avatar}" alt="${r.name}" class="reviewer-avatar" loading="lazy" decoding="async">
            <div>
              <span class="reviewer-name">${r.name}</span>
              <span class="reviewer-role">${r.role}</span>
            </div>
          </figcaption>
        </figure>
      `).join('');
    }

    if (cfg.reviews.googleCta) {
      const ctaTitle = $('.cta-title', revSec);
      if (ctaTitle) ctaTitle.textContent = cfg.reviews.googleCta.title;

      const ctaDesc = $('.cta-desc', revSec);
      if (ctaDesc) ctaDesc.textContent = cfg.reviews.googleCta.desc;

      const ctaBtn = $('.btn-google-review', revSec);
      if (ctaBtn) ctaBtn.setAttribute('href', cfg.reviews.googleCta.url);
    }
  }

  function applyGallery() {
    if (!cfg.gallery) return;
    const galSec = $('#gallery');
    if (!galSec) return;

    const sub = $('.section-subtitle', galSec);
    if (sub) sub.textContent = cfg.gallery.subtitle;

    const title = $('.section-title', galSec);
    if (title) title.textContent = cfg.gallery.title;

    const grid = $('.gallery-grid', galSec);
    if (grid && cfg.gallery.images) {
      grid.innerHTML = cfg.gallery.images.map(img => `
        <button type="button" class="gallery-item" aria-label="Expand image: ${img.alt}">
          <img src="${img.src}" alt="${img.alt}" loading="lazy" decoding="async">
          <span class="gallery-overlay"><i class="ph ph-arrows-out-simple" aria-hidden="true"></i></span>
        </button>
      `).join('');
    }
  }

  function applyLocation() {
    if (!cfg.location) return;
    const locSec = $('#location');
    if (!locSec) return;

    const sub = $('.section-subtitle', locSec);
    if (sub) sub.textContent = cfg.location.subtitle;

    const title = $('.section-title', locSec);
    if (title) title.textContent = cfg.location.title;

    const desc = $('.text-muted', locSec);     if (desc) desc.textContent = cfg.location.description;      const infoItems = $$('.info-item', locSec);
    if (infoItems.length >= 3) {
      const addrText = $('.text-muted', infoItems[0]);       if (addrText) addrText.textContent = cfg.location.address;        const hoursContainer = infoItems[1];       if (hoursContainer && cfg.location.hours) {         const lines = $$('.text-muted', hoursContainer);
        cfg.location.hours.forEach((h, idx) => {
          if (lines[idx]) lines[idx].textContent = h;
        });
      }

      const contactText = $('.text-muted', infoItems[2]);
      if (contactText) contactText.textContent = `${cfg.location.email} | ${cfg.location.phone}`;
    }

    const mapIframe = $('iframe', locSec);
    if (mapIframe && cfg.location.mapEmbedUrl) {
      mapIframe.src = cfg.location.mapEmbedUrl;
    }
  }

  function applyFooter() {
    if (!cfg.footer) return;
    const foot = $('.footer');
    if (!foot) return;

    const desc = $('.footer-desc', foot);
    if (desc) desc.textContent = cfg.footer.description;

    const socialContainer = $('.social-links', foot);
    if (socialContainer && cfg.footer.socials) {
      socialContainer.innerHTML = cfg.footer.socials.map(s => `
        <a href="${s.url}" class="social-icon" aria-label="${s.platform}" target="_blank" rel="noopener">
          <i class="ph ${s.iconClass}" aria-hidden="true"></i>
        </a>
      `).join('');
    }

    const copy = $('.footer-bottom p', foot);
    if (copy) copy.textContent = cfg.footer.copyright;
  }

  function applyWifiModal() {
    if (!cfg.wifi) return;
    const wifiModal = $('#wifi-modal');
    if (!wifiModal) return;

    const qrImg = $('.wifi-qr-img', wifiModal);
    if (qrImg) {
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=WIFI:S:${cfg.wifi.ssid};T:WPA;P:${cfg.wifi.password};;`;
    }

    const values = $$('.wifi-value', wifiModal);
    if (values[0]) values[0].textContent = cfg.wifi.ssid;
    if (values[1]) values[1].textContent = cfg.wifi.password;
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyStyles();
    applyMeta();
    applyBrandLogos();
    applyHero();
    applyAbout();
    applySpecials();
    applyOffers();
    applyMenu();
    applyReviews();
    applyGallery();
    applyLocation();
    applyFooter();
    applyWifiModal();
  });
})(REBRAND_CONFIG);
