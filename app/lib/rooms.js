
export const rooms = [
  {
    slug: "deluxe-room",
    name: "Deluxe Room",
    image: "/images/img1.jpg",
    gallery: [
      "/images/img1.jpg",
      "/images/rooms/deluxe-room-2.jpg",
      "/images/rooms/deluxe-room-3.jpg",
    ],
    size: "30 m²",
    guests: 2,
    startingPrice: 70,
    description:
      "Located on the upper levels of the hotel, our large deluxe rooms are stylish, with comfortable furnishings in great color tones. Our deluxe rooms are fully air-conditioned and feature supremely comfortable beds. The rooms also feature LED TVs, hair dryers and tea or coffee making facilities. All of the bathrooms have a modern, minimalist finish.",
    amenities: ["Balcony", "Shower", "Queen Size Bed", "Hair Dryer"],
    tariffs: {
      single: 70,
      double: 80,
      extraBed: 20,
    },
  },
  {
    slug: "super-deluxe-room",
    name: "Super Deluxe Room",
    image: "/images/stand.jpg",
    gallery: [
      "/images/stand.jpg",
      "/images/rooms/super-deluxe-room-2.jpg",
      "/images/rooms/super-deluxe-room-3.jpg",
    ],
    size: "32 m²",
    guests: 2,
    startingPrice: 80,
    description:
      "Bathed in warm light, our standard rooms come with modern interiors and amazing color tones. Each unit is well equipped with a coffee machine and an attached bathroom. Fully air-conditioned, all rooms are equipped with a flat-screen TV and wardrobe. En suite bathrooms are equipped with 24-hour running hot and cold water.",
    amenities: ["Twin Bed", "Balcony", "Shower", "Hair Dryer"],
    tariffs: {
      single: 80,
      double: 90,
      extraBed: 20,
    },
  },
  {
    slug: "family-room",
    name: "Family Room",
    image: "/images/fam.jpg",
    gallery: [
      "/images/fam.jpg",
      "/images/rooms/family-room-2.jpg",
      "/images/rooms/family-room-3.jpg",
    ],
    size: "45 m²",
    guests: 4,
    startingPrice: 90,
    description:
      "Showered in warm lights, our family suite rooms are styled with comfortable furniture, beautiful interiors, accompanying with modern day amenities. Each unit is equipped with a coffee maker and an attached bathroom. All rooms are equipped with a flat-screen TV and wardrobe. En suite bathrooms are facilitated with 24-hour running hot and cold water.",
    amenities: [
      "Private Kitchen",
      "King + Twin Bed",
      "Balcony",
      "Shower",
    ],
    tariffs: {
      single: 90,
      double: 100,
      extraBed: 20,
    },
  },
  {
    slug: "honeymoon-suite-room",
    name: "Honeymoon Suite Room",
    image: "/images/img2.jpg",
    gallery: [
      "/images/img2.jpg",
      "/images/rooms/honeymoon-suite-2.jpg",
      "/images/rooms/honeymoon-suite-3.jpg",
    ],
    size: "40 m²",
    guests: 2,
    startingPrice: 110,
    description:
      "Beautifully decorated with warm lights, honeymoon suite room accompanies modern day amenities with comfortable furnishing and stunning tones. A romantic room will welcome you to experience a comfy stay along with wine and snacks ensuring a memorable time. All rooms are equipped with a flat-screen TV and wardrobe. En suite bathrooms are facilitated with 24-hour running hot and cold water.",
    amenities: [
      "King Size Bed",
      "Balcony",
      "Airport Shuttle",
      "Hair Dryer",
    ],
    tariffs: {
      single: 110,
      double: 120,
    },
  },
];
