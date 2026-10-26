// Single source of truth: every section, the JSON-LD and llms.txt read from here.
// Content comes from teekaresort.com. Update here and the whole site follows.

const BASE = "https://www.teekaresort.com";
const img = (path) => `${BASE}/images/subpackage/${path}`;

export const site = {
  name: "Teeka Resort Suites & Spa",
  shortName: "Teeka Resort",
  url: process.env.NEXT_PUBLIC_SITE_URL || BASE,
  tagline: "Family atmosphere hospitality",
  description:
    "Teeka Resort Suites & Spa is a family-run hotel in Lakeside, Pokhara, Nepal with 15 rooms, a restaurant, garden bar and free Wi-Fi. Rooms from $70 per night, 3.5 km from Pokhara Airport.",
  bookingUrl: "http://www.teekaresort.com/result.php?hotel_code=FCNJaT",
  logo: "/images/Teeka Resort Botanical Logo.png",
  heroImage: "/images/resort.webp",
  address: {
    street: "Hallan Chowk, Pokhara-6",
    locality: "Pokhara",
    region: "Gandaki Province",
    country: "NP",
    countryName: "Nepal",
  },
  geo: { lat: 28.2146489, lng: 83.9559519 },
  phones: [
    { label: "+977-61-452033", tel: "+97761452033" },
    { label: "+977-61-453986", tel: "+97761453986" },
    { label: "+977-61-456599", tel: "+97761456599" },
  ],
  email: "sales@teekaresort.com",
  social: {
    facebook: "https://www.facebook.com/teekaresortpokhara/",
    instagram: "https://www.instagram.com/teeka_resort/",
    tripadvisor:
      "https://www.tripadvisor.com/Hotel_Review-g293891-d10625453-Reviews-Teeka_Resort-Pokhara_Gandaki_Zone",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Teeka+Resort+Suites+and+Spa+Pokhara+Nepal",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.7585028213502!2d83.95595187499315!3d28.214648902935334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399594e18afccb67%3A0x1324a450f75d25c3!2sTeeka%20Resort%20Suites%20and%20Spa!5e0!3m2!1sen!2snp!4v1792911648921!5m2!1sen!2snp",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Dining", href: "#dining" },
  { label: "Explore", href: "#explore" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#location" },
];

export const facts = [
  { value: "15", label: "Rooms" },
  { value: "3.5 km", label: "From the airport" },
  { value: "3 km", label: "From tourist bus park" },
  { value: "4 km", label: "From city bus park" },
];

export const services = [
  "Restaurant and garden bar",
  "Room service",
  "Free Wi-Fi throughout",
  "Air-conditioned rooms",
  "24-hour front desk",
  "Daily housekeeping",
  "Laundry and pressing",
  "Tea and coffee maker",
  "LED TV with satellite channels",
  "Hair dryer and toiletries",
];

export const rooms = [
  {
    id: "deluxe",
    name: "Deluxe Room",
    from: 70,
    single: 70,
    double: 80,
    extraBed: 20,
    description:
      "Large, stylish air-conditioned rooms on the upper levels, with a queen-size bed, LED TV, tea and coffee facilities and a modern, minimalist bathroom.",
    highlights: ["Balcony", "Shower", "Queen size bed", "Hair dryer"],
    image: img("image/x2B4S-deluxe.jpg"),
    href: `${BASE}/subpackage/deluxe-room`,
  },
  {
    id: "super-deluxe",
    name: "Super Deluxe Room",
    from: 80,
    single: 80,
    double: 90,
    extraBed: 20,
    description:
      "Warmly lit rooms with twin beds, modern interiors, a coffee machine, flat-screen TV, wardrobe and an en suite bathroom with 24-hour hot and cold water.",
    highlights: ["Twin bed", "Balcony", "Shower", "Hair dryer"],
    image: img("image/j6yEa-standard.jpg"),
    href: `${BASE}/subpackage/super-deluxe-room`,
  },
  {
    id: "family",
    name: "Family Room",
    from: 90,
    single: 90,
    double: 100,
    extraBed: 20,
    description:
      "Comfortable family suites with a king and a twin bed, a private kitchen, coffee maker, flat-screen TV and an en suite bathroom.",
    highlights: ["Private kitchen", "King + twin bed", "Balcony", "Shower"],
    image: img("image/aWL8y-family.jpg"),
    href: `${BASE}/subpackage/family-room`,
  },
  {
    id: "honeymoon",
    name: "Honeymoon Suite",
    from: 110,
    single: 110,
    double: 120,
    extraBed: 20,
    description:
      "A romantic suite with warm lighting and a king-size bed, with wine and snacks for a memorable stay, plus a flat-screen TV and en suite bathroom.",
    highlights: ["King size bed", "Balcony", "Airport shuttle", "Hair dryer"],
    image: img("image/XNqhh-honey.jpg"),
    href: `${BASE}/subpackage/honeymoon-suite-room`,
  },
];

export const dining = {
  description:
    "Our restaurant serves Thakali, Nepali, Indian, Chinese and Continental cuisines, with thali as our best dish. Dishes are prepared with fresh ingredients and exotic blends of spices, served as a buffet or à la carte.",
  items: [
    "Restaurant: Thakali, Nepali, Indian, Chinese and Continental",
    "Buffet or à la carte breakfast, lunch and dinner",
    "Garden bar with signature cocktails",
    "Coffee station",
    "Room service",
  ],
  images: [
    { src: img("FgbhQ-res9.jpg"), alt: "Restaurant at Teeka Resort, Pokhara" },
    { src: img("pIYLm-dining1.jpg"), alt: "Dining area at Teeka Resort" },
  ],
};

export const nearby = [
  { name: "Barahi Temple", distance: "8-minute walk" },
  { name: "International Museum", distance: "4.2 km" },
  { name: "Devi's Fall", distance: "4.5 km" },
  { name: "Bindhyabasini Temple", distance: "4.6 km" },
  { name: "World Peace Stupa", distance: "8.3 km" },
];

export const faqs = [
  {
    q: "Where is Teeka Resort located?",
    a: "Teeka Resort Suites & Spa is at Hallan Chowk, Pokhara-6, in Lakeside, Pokhara, Nepal, close to activities, restaurants and shopping.",
  },
  {
    q: "How many rooms does the resort have?",
    a: "There are 15 rooms in four types: Deluxe Room, Super Deluxe Room, Family Room and Honeymoon Suite.",
  },
  {
    q: "How much does a room cost per night?",
    a: "Rates start from $70 for a Deluxe Room, $80 for a Super Deluxe Room, $90 for a Family Room and $110 for the Honeymoon Suite. An extra bed is $20. Rates can change, so check the booking page for current prices.",
  },
  {
    q: "How far is Teeka Resort from the airport and bus parks?",
    a: "The resort is 3.5 km from Pokhara Airport, 3 km from the tourist bus park and 4 km from the city bus park.",
  },
  {
    q: "What food does the restaurant serve?",
    a: "The restaurant serves Thakali, Nepali, Indian, Chinese and Continental cuisines, with thali as the best dish. Breakfast, lunch and dinner are served as a buffet or à la carte, and room service is available.",
  },
  {
    q: "Is Wi-Fi free?",
    a: "Yes. Free Wi-Fi is available throughout the hotel.",
  },
  {
    q: "What can I visit near the resort?",
    a: "Barahi Temple is an 8-minute walk away. Also nearby are the International Museum (4.2 km), Devi's Fall (4.5 km), Bindhyabasini Temple (4.6 km) and the World Peace Stupa (8.3 km).",
  },
  {
    q: "How do I book a room?",
    a: "Book online through the resort's booking page, call +977-61-452033, or email sales@teekaresort.com.",
  },
];