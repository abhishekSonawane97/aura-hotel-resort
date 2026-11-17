// ==========================================================================
// AURA Hotel & Luxury Resort - Data Configuration
// Aurangabad (Chhatrapati Sambhajinagar), Maharashtra
// ==========================================================================

const HOTEL_CONFIG = {
  name: "AURA",
  descriptor: "Hotel & Luxury Resort",
  city: "Aurangabad (Chhatrapati Sambhajinagar)",
  state: "Maharashtra, India",
  fullAddress: "Jalna Road, CIDCO, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra 431005, India",
  nearLandmark: "5 mins from Chhatrapati Sambhajinagar Airport (IXU)",
  phone: "+91 (0240) 248 8800",
  reservationsPhone: "+91 98230 45678",
  email: "reservations@aurahotels.in",
  conciergeEmail: "concierge@aurahotels.in",
  checkInTime: "14:00 hrs",
  checkOutTime: "12:00 hrs",
  instagram: "https://www.instagram.com/aurahotel_aurangabad"
};

const ROOMS_DATA = [
  {
    id: "deluxe-room",
    name: "Deluxe Garden Room",
    type: "King Bed / 2 Guests",
    totalSqFt: "390 SQ FT",
    interiorSqFt: "340 SQ FT",
    terraceSqFt: "50 SQ FT",
    exposure: "Private Garden View",
    image: "assets/images/Studio_suite.png",
    description: "An elegant sanctuary overlooking lush subtropical courtyards, featuring handcrafted teak millwork, bespoke artisanal textiles, and a private sunrise balcony.",
    features: [
      "Custom king pillow-top mattress with 500-thread Egyptian cotton linen",
      "Spa marble bathroom with rain shower & Kama Ayurveda amenities",
      "Complimentary high-speed Wi-Fi & 55\" 4K Smart Entertainment System",
      "Gourmet Illy coffee machine & artisanal Maharastrian tea bar"
    ],
    priceStarting: "₹9,500 / night",
    priceNumber: 9500
  },
  {
    id: "courtyard-suite",
    name: "Courtyard Heritage Suite",
    type: "King Suite / 2 Adults + 1 Child",
    totalSqFt: "510 SQ FT",
    interiorSqFt: "450 SQ FT",
    terraceSqFt: "60 SQ FT",
    exposure: "Mughal Courtyard & Reflecting Pool",
    image: "assets/images/Gallery_suite.png",
    description: "Spacious heritage suite inspired by Aurangabad's regal design, featuring a dedicated living lounge, curated art pieces, and open-air veranda.",
    features: [
      "Separate living salon with plush velvet seating & dining nook",
      "Deep soaking terrazzo bathtub & walk-in rainfall shower",
      "Private veranda overlooking the central reflecting pool",
      "24-hour dedicated butler service & evening turndown ritual"
    ],
    priceStarting: "₹14,500 / night",
    priceNumber: 14500
  },
  {
    id: "junior-suite",
    name: "Junior Suite Deluxe",
    type: "Executive Suite / 3 Guests",
    totalSqFt: "620 SQ FT",
    interiorSqFt: "540 SQ FT",
    terraceSqFt: "80 SQ FT",
    exposure: "Sunset Hills & Resort Pool",
    image: "assets/images/Junior_suite.png",
    description: "A refined split-level luxury suite with acoustic glass partition, lavish dressing gallery, and direct access to the resort's temperature-controlled swimming pool.",
    features: [
      "Fluted timber privacy pocket doors separating bedroom & lounge",
      "En-suite marble bathroom with twin vanities & soaking tub",
      "Priority reservations at all resort fine-dining venues",
      "Complimentary airport transfers in executive luxury sedan"
    ],
    priceStarting: "₹19,500 / night",
    priceNumber: 19500
  },
  {
    id: "royal-suite",
    name: "Royal Ajanta Suite",
    type: "1-Bedroom Master Suite / 3 Guests",
    totalSqFt: "850 SQ FT",
    interiorSqFt: "750 SQ FT",
    terraceSqFt: "100 SQ FT",
    exposure: "Panoramic City & Garden Vista",
    image: "assets/images/1bedroom.png",
    description: "The crown jewel of our heritage wing, paying homage to the caves of Ajanta with custom stonework, 6-seat dining room, and expansive corner terrace.",
    features: [
      "Expansive master bedroom with private walk-in dressing salon",
      "Private dining table for 6 guests with in-suite chef service",
      "Powder room for visiting guests & dedicated service pantry",
      "Complimentary private guided day tour to Ellora or Ajanta Caves"
    ],
    priceStarting: "₹28,000 / night",
    priceNumber: 28000
  },
  {
    id: "presidential-villa",
    name: "Presidential Villa",
    type: "2-Bedroom Luxury Villa / 5 Guests",
    totalSqFt: "1,250 SQ FT",
    interiorSqFt: "1,050 SQ FT",
    terraceSqFt: "200 SQ FT",
    exposure: "Private Garden & Plunge Pool",
    image: "assets/images/2Bedroom.png",
    description: "The ultimate private sanctuary featuring two master suites, secluded private plunge pool, outdoor dining pavilion, and dedicated round-the-clock concierge.",
    features: [
      "Private temperature-controlled plunge pool & sun loungers",
      "Two master suites with individual spa en-suites & steam showers",
      "Personalized 24-hour chef, sommelier & chauffeur service",
      "VIP airport tarmac meet-and-greet in Aurangabad"
    ],
    priceStarting: "₹48,000 / night",
    priceNumber: 48000
  }
];

const EXPERIENCES_DATA = [
  {
    title: "Ellora Caves",
    category: "UNESCO World Heritage",
    distance: "28 km from Resort",
    desc: "Marvel at the monumental monolithic Kailash Temple, carved top-down from a single basalt cliff in the 8th century.",
    image: "assets/images/Wynwood.jpg"
  },
  {
    title: "Ajanta Caves",
    category: "Ancient Buddhist Art",
    distance: "102 km from Resort",
    desc: "30 rock-cut Buddhist cave monuments dating from the 2nd century BCE, world-celebrated for tempera mural masterpieces.",
    image: "assets/images/Design-District.jpg"
  },
  {
    title: "Bibi Ka Maqbara",
    category: "Mughal Architecture",
    distance: "6 km from Resort",
    desc: "The 'Taj of the Deccan', featuring exquisite marble domes, charbagh gardens, and intricate lattice jali stonework.",
    image: "assets/images/midtown.jpg"
  },
  {
    title: "Daulatabad Fort",
    category: "Medieval Citadel",
    distance: "16 km from Resort",
    desc: "One of the world's most impregnable 12th-century hill fortifications with subterranean labyrinths and moat defenses.",
    image: "assets/images/downtown.jpg"
  },
  {
    title: "Himroo & Paithani Silk",
    category: "Artisanal Heritage",
    distance: "4 km from Resort",
    desc: "Centuries-old royal weaving traditions of Aurangabad, creating gold-threaded sarees and Persian tapestry weaves.",
    image: "assets/images/Brickell.jpg"
  }
];
