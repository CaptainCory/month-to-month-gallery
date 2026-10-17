// Site content. Edit here; index.html renders from this data only.
export const site = Object.freeze({
  name: "Month to Month",
  tagline: "High standard, open door. A Venice boardwalk gallery that takes care of its people.",
  address: "Venice Beach Boardwalk, Venice, CA", // TODO: exact storefront address
  mapQuery: "Venice Beach Boardwalk, Venice, CA",
  hours: [
    { days: "Hours", time: "IYKYK" },
  ],
  contact: { email: "", instagram: "month2month_venice", phone: "" },
  founders: [
    { name: "Cory Stout", bio: "Author of END SMALL TALK, founder of Woodies, Ironman, pilot in training. Paints chameleon-inspired work live on the boardwalk." },
    { name: "Evan Goodburn", bio: "Venice artist and co-founder. Bio to come." },
  ],
  events: [],
  paintings: [
    { title: "Sexagesimal", artist: "Cory Stout", size: "72 × 60 in", price: 4500, status: "available", image: "art/sexagesimal.jpg" },
    { title: "Color Coded", artist: "Cory Stout", size: "36 × 24 in", price: 1800, status: "available", image: "art/color-coded.jpg" },
    { title: "We Started the Fire", artist: "Cory Stout", size: "36 × 24 in", price: 1600, status: "available", image: "art/we-started-the-fire.jpg" },
  ],
  visitors: [], // names shown only with each visitor's consent
  floorPlan: [
    { zone: "Entrance", area: "boardwalk" },
    { zone: "Artist walls", area: "left, right" },
    { zone: "Collaborative center", area: "center" },
    { zone: "Studio room", area: "adjacent" },
  ],
});
