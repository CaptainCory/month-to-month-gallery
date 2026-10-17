// Site content. Edit here; index.html renders from this data only.
export const site = Object.freeze({
  name: "Month to Month",
  tagline: "High standard, open door. A Venice boardwalk gallery that takes care of its people.",
  address: "Venice Beach Boardwalk, Venice, CA", // TODO: exact storefront address
  mapQuery: "Venice Beach Boardwalk, Venice, CA",
  hours: [
    { days: "No regular hours", time: "Visits by appointment — message us on Instagram" },
  ],
  contact: { email: "", instagram: "month2month_venice", phone: "" },
  founders: [
    { name: "Cory Stout", bio: "Author of END SMALL TALK, founder of Woodies, Ironman, pilot in training. Paints chameleon-inspired work live on the boardwalk." },
    { name: "Evan Goodburn", bio: "Venice artist and co-founder. Bio to come." },
  ],
  events: [],
  paintings: [],
  visitors: [], // names shown only with each visitor's consent
  floorPlan: [
    { zone: "Entrance", area: "boardwalk" },
    { zone: "Artist walls", area: "left, right" },
    { zone: "Collaborative center", area: "center" },
    { zone: "Studio room", area: "adjacent" },
  ],
});
