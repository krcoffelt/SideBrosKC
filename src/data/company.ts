export type LocationPage = {
  slug: string;
  name: string;
  heading: string;
  metaDescription: string;
  propertyMix: string;
  commonNeeds: string;
  nearby: string[];
  image: string;
};

export const locationPages: LocationPage[] = [
  {
    slug: "kansas-city-metro",
    name: "Kansas City Metro",
    heading: "Exterior cleaning across the Kansas City metro",
    metaDescription:
      "Power washing, gutter cleaning, window cleaning, fleet washing, concrete staining, and Christmas lighting across the Kansas City metro.",
    propertyMix:
      "homes, storefronts, office properties, and service fleets spread across both Kansas and Missouri",
    commonNeeds:
      "seasonal grime, heavy pollen, hard-water staining, and high-visibility storefront upkeep",
    nearby: ["Olathe", "Overland Park", "Kansas City, MO"],
    image: "/images/SideBrosWebPic12.jpg",
  },
  {
    slug: "olathe-ks",
    name: "Olathe",
    heading: "Power washing and exterior cleaning in Olathe, KS",
    metaDescription:
      "Professional power washing, gutter cleaning, window cleaning, concrete staining, fleet washing, and Christmas lighting in Olathe, KS.",
    propertyMix:
      "suburban homes, neighborhood retail, office buildings, and growing commercial corridors",
    commonNeeds:
      "driveway cleanup, siding wash-downs, clogged gutters, and seasonal storefront maintenance",
    nearby: ["Lenexa", "Overland Park", "Shawnee"],
    image: "/images/SideBrosWebPic1.webp",
  },
  {
    slug: "overland-park-ks",
    name: "Overland Park",
    heading: "Exterior cleaning for homes and businesses in Overland Park, KS",
    metaDescription:
      "Side Bros KC provides power washing, gutter cleaning, window cleaning, concrete staining, fleet washing, and Christmas lighting in Overland Park, KS.",
    propertyMix:
      "high-traffic residential neighborhoods, medical offices, retail spaces, and customer-facing commercial buildings",
    commonNeeds:
      "curb appeal refreshes, recurring storefront cleaning, and concrete care that holds up through Midwest weather",
    nearby: ["Leawood", "Olathe", "Prairie Village"],
    image: "/images/SideBrosWebPic5.webp",
  },
  {
    slug: "leawood-ks",
    name: "Leawood",
    heading: "High-detail exterior cleaning in Leawood, KS",
    metaDescription:
      "Exterior cleaning and surface restoration in Leawood, KS, including power washing, window cleaning, gutter cleaning, concrete staining, and holiday lighting.",
    propertyMix:
      "custom homes, upscale retail, medical offices, and polished commercial properties",
    commonNeeds:
      "soft washing, streak-free glass, precise concrete finishes, and a cleaner overall street presence",
    nearby: ["Overland Park", "Prairie Village", "Mission Hills"],
    image: "/images/2025-04-08.webp",
  },
  {
    slug: "lenexa-ks",
    name: "Lenexa",
    heading: "Professional exterior cleaning in Lenexa, KS",
    metaDescription:
      "Power washing, gutter cleaning, fleet washing, window cleaning, concrete staining, and Christmas lighting in Lenexa, KS.",
    propertyMix:
      "warehouse-adjacent businesses, office parks, residential neighborhoods, and service fleets",
    commonNeeds:
      "building wash schedules, fleet presentation, sidewalk cleanup, and storm-season gutter service",
    nearby: ["Olathe", "Shawnee", "Overland Park"],
    image: "/images/SideBrosWebPic3.webp",
  },
  {
    slug: "shawnee-ks",
    name: "Shawnee",
    heading: "Power washing and maintenance cleaning in Shawnee, KS",
    metaDescription:
      "Side Bros KC serves Shawnee, KS with power washing, gutter cleaning, window cleaning, fleet washing, concrete staining, and Christmas lighting.",
    propertyMix:
      "family neighborhoods, multi-use commercial buildings, churches, and local storefronts",
    commonNeeds:
      "roof-safe soft washing, gutter clearing, patio cleanup, and dependable seasonal service",
    nearby: ["Lenexa", "Olathe", "Kansas City, KS"],
    image: "/images/SideBrosWebPic11.jpg",
  },
  {
    slug: "prairie-village-ks",
    name: "Prairie Village",
    heading: "Exterior cleaning tailored to Prairie Village, KS properties",
    metaDescription:
      "Professional exterior cleaning in Prairie Village, KS, including window cleaning, power washing, gutter service, concrete staining, and holiday lighting.",
    propertyMix:
      "established homes, boutique storefronts, and detail-sensitive exterior surfaces",
    commonNeeds:
      "careful soft washing, trim-safe cleaning, brighter windows, and understated but polished curb appeal",
    nearby: ["Leawood", "Mission Hills", "Overland Park"],
    image: "/images/2025-04-08%20(2).webp",
  },
  {
    slug: "mission-hills-ks",
    name: "Mission Hills",
    heading: "High-end exterior cleaning service in Mission Hills, KS",
    metaDescription:
      "Side Bros KC provides premium exterior cleaning in Mission Hills, KS with power washing, window cleaning, gutter cleaning, concrete staining, and Christmas lighting.",
    propertyMix:
      "large residential estates, masonry-heavy exteriors, custom hardscapes, and premium finishes",
    commonNeeds:
      "surface-safe cleaning, detail-oriented glass work, and results that protect material quality while improving presentation",
    nearby: ["Prairie Village", "Leawood", "Kansas City, MO"],
    image: "/images/2025-04-08%20(3).webp",
  },
  {
    slug: "kansas-city-ks",
    name: "Kansas City, KS",
    heading: "Exterior cleaning in Kansas City, KS",
    metaDescription:
      "Power washing, window cleaning, gutter cleaning, fleet washing, concrete staining, and Christmas lighting in Kansas City, KS.",
    propertyMix:
      "older housing stock, busy commercial strips, industrial properties, and high-use concrete surfaces",
    commonNeeds:
      "deep exterior cleanups, storefront visibility improvements, and recurring fleet or building maintenance",
    nearby: ["Shawnee", "Kansas City, MO", "North Kansas City"],
    image: "/images/2025-04-08%20(1).webp",
  },
  {
    slug: "kansas-city-mo",
    name: "Kansas City, MO",
    heading: "Power washing and exterior cleaning in Kansas City, MO",
    metaDescription:
      "Side Bros KC provides professional exterior cleaning in Kansas City, MO, including power washing, gutter cleaning, window cleaning, fleet washing, concrete staining, and Christmas lighting.",
    propertyMix:
      "urban storefronts, apartment-adjacent retail, established neighborhoods, and commercial buildings with heavy foot traffic",
    commonNeeds:
      "faster storefront turnarounds, sidewalk cleanup, fleet presentation, and recurring maintenance schedules",
    nearby: ["North Kansas City", "Kansas City, KS", "Mission Hills"],
    image: "/images/SideBrosWebPic12.jpg",
  },
  {
    slug: "north-kansas-city-mo",
    name: "North Kansas City",
    heading: "Commercial-friendly exterior cleaning in North Kansas City, MO",
    metaDescription:
      "Exterior cleaning in North Kansas City, MO for commercial buildings, fleets, storefronts, and homes.",
    propertyMix:
      "industrial service yards, restaurant corridors, office buildings, and compact residential properties",
    commonNeeds:
      "fleet washing, building face cleanup, gum and grime removal, and dependable recurring service windows",
    nearby: ["Kansas City, MO", "Kansas City, KS", "Liberty"],
    image: "/images/SideBrosWebPic12.jpg",
  },
  {
    slug: "lees-summit-mo",
    name: "Lee's Summit",
    heading: "Exterior cleaning and concrete care in Lee's Summit, MO",
    metaDescription:
      "Power washing, gutter cleaning, window cleaning, concrete staining, fleet washing, and Christmas lighting in Lee's Summit, MO.",
    propertyMix:
      "growing subdivisions, retail centers, drive-heavy commercial sites, and residential hardscapes",
    commonNeeds:
      "driveway restoration, patio cleaning, gutter upkeep, and concrete staining that refreshes worn surfaces",
    nearby: ["Kansas City, MO", "Liberty", "Olathe"],
    image: "/images/SideBrosWebPic1.webp",
  },
  {
    slug: "liberty-mo",
    name: "Liberty",
    heading: "Exterior cleaning service in Liberty, MO",
    metaDescription:
      "Side Bros KC serves Liberty, MO with power washing, gutter cleaning, window cleaning, fleet washing, concrete staining, and Christmas lighting.",
    propertyMix:
      "residential neighborhoods, school-adjacent properties, local retail, and mobile service fleets",
    commonNeeds:
      "seasonal wash service, gutter clearing, cleaner storefront glass, and recurring commercial upkeep",
    nearby: ["North Kansas City", "Kansas City, MO", "Lee's Summit"],
    image: "/images/SideBrosWebPic3.webp",
  },
];

export function getLocationPath(slug: string) {
  return `/service-areas/${slug}`;
}

export function getLocationBySlug(slug: string) {
  return locationPages.find((location) => location.slug === slug);
}

export const companyInfo = {
  name: "Side Bros KC LLC",
  tagline: "The Bros Who Bring the Shine to KC.",
  siteUrl: "https://www.sidebroskc.com",
  phone: "(913) 286-9119",
  phoneHref: "tel:19132869119",
  email: "Sidebroskc@gmail.com",
  address: "1545 West Park Street, Olathe, KS 66061",
  founded: "2022",
  licensedInsured: "Licensed & Insured",
  priceRange: "$$",
  serviceAreas: locationPages.map((location) => location.name),
  sameAs: [
    "https://www.facebook.com/profile.php?id=61558598529435",
    "https://www.instagram.com/sidebroskc/",
  ],
  geo: {
    latitude: 38.88851747172443,
    longitude: -94.82957312396193,
  },
  openingHours: [
    { dayOfWeek: "Monday", opens: "08:00", closes: "18:00" },
    { dayOfWeek: "Tuesday", opens: "08:00", closes: "18:00" },
    { dayOfWeek: "Wednesday", opens: "08:00", closes: "18:00" },
    { dayOfWeek: "Thursday", opens: "08:00", closes: "18:00" },
    { dayOfWeek: "Friday", opens: "08:00", closes: "18:00" },
    { dayOfWeek: "Saturday", opens: "08:00", closes: "18:00" },
  ],
  mapUrl: "https://maps.google.com/?q=1545+West+Park+Street,+Olathe,+KS+66061",
  googleMapsEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.224328060217!2d-94.82957312396193!3d38.88851747172443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0815a5ffc59e9%3A0x1da5c4f8ad788845!2s1545%20W%20Park%20St%2C%20Olathe%2C%20KS%2066061!5e0!3m2!1sen!2sus!4v1737588000000!5m2!1sen!2sus",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Power Washing", href: "/power-washing" },
  { label: "Concrete Staining", href: "/concrete-staining" },
  { label: "Christmas Lighting", href: "/christmas-lighting" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const serviceHighlights = [
  {
    name: "Power Washing",
    description:
      "Revive siding, driveways, and commercial exteriors with safe, professional pressure washing.",
    href: "/power-washing",
  },
  {
    name: "Gutter Cleaning",
    description:
      "Clear clogged gutters and downspouts before overflow leads to fascia, siding, or foundation issues.",
    href: "/gutter-cleaning",
  },
  {
    name: "Window Cleaning",
    description:
      "Brighten storefront and residential glass with streak-free window cleaning inside and out.",
    href: "/window-cleaning",
  },
  {
    name: "Fleet Washing",
    description:
      "Keep trucks, trailers, and service vehicles clean, branded, and road-ready with scheduled fleet washing.",
    href: "/fleet-washing",
  },
  {
    name: "Concrete Staining",
    description:
      "Protect and personalize concrete surfaces with customizable stains and industrial-grade sealers.",
    href: "/concrete-staining",
  },
  {
    name: "Christmas Lighting",
    description:
      "Turn-key holiday lighting design, installation, maintenance, and takedown with commercial-grade materials.",
    href: "/christmas-lighting",
  },
];

export const trustSignals = [
  { label: "Licensed & Insured", description: "Fully covered for every project." },
  { label: "Locally Owned", description: "Serving the Kansas City metro since 2022." },
  {
    label: "Safety First",
    description: "OSHA-compliant processes and eco-friendly detergents.",
  },
  {
    label: "Fast Scheduling",
    description: "Responsive quotes and flexible project timelines.",
  },
];

export const testimonials = [
  {
    quote:
      "Side Bros KC made our storefront look brand new. The team was punctual, professional, and the results were incredible.",
    name: "Melissa H.",
    location: "Overland Park, KS",
    rating: 5,
  },
  {
    quote:
      "Our driveway and patio have never looked better. The Bros walked us through every step and delivered exactly as promised.",
    name: "Jason R.",
    location: "Olathe, KS",
    rating: 5,
  },
  {
    quote:
      "We hired Side Bros for Christmas lights and loved the design. Hassle-free, safe installation that impressed the whole neighborhood.",
    name: "Caroline S.",
    location: "Leawood, KS",
    rating: 5,
  },
];

export const processSteps = [
  {
    title: "Request Your Quote",
    description:
      "Tell us about your property goals and upload photos for an accurate estimate.",
  },
  {
    title: "Schedule & Prep",
    description:
      "We lock in a convenient time, confirm project details, and prepare the site safely.",
  },
  {
    title: "Bring the Shine",
    description:
      "Our crew delivers spotless results and a final walkthrough for total satisfaction.",
  },
];

export const powerWashingServices = [
  "Commercial Building Wash",
  "Storefront Maintenance Cleaning",
  "House Wash",
  "Driveway & Sidewalk Wash",
  "Deck Wash",
  "Roof Wash (Commercial & Residential)",
  "Gutter Cleaning",
  "Window Cleaning",
  "Fleet Washing",
];

export const powerWashingFaqs = [
  {
    question: "Is your cleaning process safe for siding and landscaping?",
    answer:
      "Yes. We tailor pressure and detergents to each surface and pre-soak surrounding landscaping to protect plants and finishes.",
  },
  {
    question: "How often should I schedule a professional house wash?",
    answer:
      "Most Kansas City properties benefit from an annual wash to remove mildew, pollen, and buildup before it damages finishes.",
  },
  {
    question: "Do you offer maintenance plans for commercial properties?",
    answer:
      "We build custom schedules for storefronts and commercial buildings to keep entrances, sidewalks, and signage spotless year-round.",
  },
  {
    question: "What areas do you service?",
    answer:
      "We work across the greater Kansas City metro, including Olathe, Overland Park, Leawood, Lenexa, Shawnee, Prairie Village, Kansas City, and surrounding communities.",
  },
  {
    question: "Can you clean roofs without causing shingle damage?",
    answer:
      "Absolutely. We use soft-wash systems that remove organic growth while preserving shingles and roofing materials.",
  },
];

export const concreteHighlights = [
  {
    title: "Driveways, Walkways, Patios",
    description: "Durable finishes tailored to high-traffic residential and commercial spaces.",
  },
  {
    title: "Clear Coat Seal Options",
    description: "Choose wet-look gloss or a natural matte finish with UV protection.",
  },
  {
    title: "Custom Colors",
    description: "Color-match your exterior aesthetic with fully customizable stain palettes.",
  },
  {
    title: "Minor Concrete Patching",
    description: "Address small cracks and imperfections before staining for a flawless finish.",
  },
  {
    title: "Slip Resistant Finishes",
    description: "Safety-first additives to improve traction without sacrificing style.",
  },
];

export const concreteFaqs = [
  {
    question: "How long does stained concrete take to cure?",
    answer:
      "Most driveways and patios are ready for light foot traffic within 24 hours and vehicle traffic within 72 hours.",
  },
  {
    question: "Can you match existing exterior colors?",
    answer:
      "Yes. We offer custom color mixing and sample panels so you can approve the finish before application.",
  },
  {
    question: "How do you prepare the surface?",
    answer:
      "We deep clean, repair minor cracks, and profile the concrete so stains and sealers bond evenly.",
  },
  {
    question: "Will the stain fade over time?",
    answer:
      "Our UV-stable stains and sealers resist fading. We recommend resealing every 2–3 years for maximum longevity.",
  },
  {
    question: "Do you offer maintenance guidance?",
    answer:
      "Every project includes a care guide with cleaning tips and recommended maintenance intervals.",
  },
];

export const lightingFeatures = [
  "Custom Cut C9 Bulbs",
  "Lifetime Warranty",
  "Commercial Grade Materials",
  "Ground & Bush Lighting",
  "Fully Custom Colors & Patterns",
];

export const lightingFaqs = [
  {
    question: "Who handles installation and takedown?",
    answer:
      "Side Bros KC manages the entire process — design, installation, maintenance, and post-season takedown.",
  },
  {
    question: "Can I buy the lights if we move homes?",
    answer:
      "Yes. Your custom-cut lights belong to you with a lifetime warranty, and we can reinstall them at your new property.",
  },
  {
    question: "Do you offer commercial lighting designs?",
    answer:
      "We create brand-aligned displays for storefronts, shopping centers, and corporate campuses.",
  },
  {
    question: "What happens if a bulb goes out?",
    answer:
      "Call or email us — maintenance is included, and we’ll replace bulbs quickly during the season.",
  },
  {
    question: "How early should we schedule?",
    answer:
      "We recommend booking in late summer or early fall to secure your ideal installation window.",
  },
];

export const gutterCleaningHighlights = [
  {
    title: "Debris Removal & Downspout Flush",
    description: "Clear leaves, shingle grit, and clogs so water flows away from your home.",
  },
  {
    title: "Seasonal Maintenance Plans",
    description: "Spring and fall service options help prevent surprise overflow and water damage.",
  },
  {
    title: "Residential & Commercial Gutters",
    description: "Service available for homes, office buildings, storefronts, and mixed-use properties.",
  },
  {
    title: "Before Issues Get Expensive",
    description: "Reduce the risk of fascia rot, siding stains, and foundation splash-back.",
  },
];

export const gutterCleaningFaqs = [
  {
    question: "How often should gutters be cleaned in Kansas City?",
    answer:
      "Most homes benefit from at least two cleanings per year, with extra service after heavy leaf fall or storm debris.",
  },
  {
    question: "Do you clear clogged downspouts too?",
    answer:
      "Yes. We remove debris from the gutter channels and flush downspouts to confirm proper drainage.",
  },
  {
    question: "Can you clean gutters on commercial buildings?",
    answer:
      "Yes. We service retail, office, and mixed-use properties with scheduling that minimizes disruption.",
  },
  {
    question: "What are the signs my gutters need service?",
    answer:
      "Overflow during rain, plant growth, staining on siding, and water pooling near the foundation are common warning signs.",
  },
];

export const windowCleaningHighlights = [
  {
    title: "Interior & Exterior Glass",
    description: "Remove hard-water spotting, dust, fingerprints, and film for a cleaner, brighter finish.",
  },
  {
    title: "Residential & Storefront Windows",
    description: "From entry glass to upper panes, we tailor the clean to your property type and access points.",
  },
  {
    title: "Screen & Sill Detail Work",
    description: "We clean beyond the glass so frames, tracks, and edges look finished, not half-done.",
  },
  {
    title: "Recurring Service Available",
    description: "Monthly, quarterly, and seasonal maintenance keeps visibility high and curb appeal strong.",
  },
];

export const windowCleaningFaqs = [
  {
    question: "Do you clean both interior and exterior windows?",
    answer:
      "Yes. We offer exterior-only or full interior and exterior window cleaning depending on your needs.",
  },
  {
    question: "Can you clean storefront windows on a schedule?",
    answer:
      "Yes. We can set recurring service for storefronts, offices, and other customer-facing properties.",
  },
  {
    question: "What types of buildup do you remove?",
    answer:
      "We remove dust, grime, fingerprints, light mineral spotting, and the general haze that dulls clear glass.",
  },
  {
    question: "Do you include screens and sills?",
    answer:
      "Screen, sill, and track detailing can be included so the full window area looks clean and finished.",
  },
];

export const fleetWashingHighlights = [
  {
    title: "Service Fleets & Work Trucks",
    description: "Keep vans, pickups, trailers, and commercial vehicles clean for a stronger first impression.",
  },
  {
    title: "Scheduled Maintenance Routes",
    description: "Set recurring wash intervals to keep branding sharp without relying on last-minute cleanups.",
  },
  {
    title: "Exterior Focused Cleaning",
    description: "We target road film, grime, bug buildup, and dirt accumulation on frequently used vehicles.",
  },
  {
    title: "Business-Friendly Scheduling",
    description: "Early, off-hour, and recurring service windows help keep vehicles available when you need them.",
  },
];

export const fleetWashingFaqs = [
  {
    question: "What kinds of fleets do you wash?",
    answer:
      "We clean service vans, pickups, trailers, and other commercial vehicles used by local businesses.",
  },
  {
    question: "Can you set up recurring fleet washing?",
    answer:
      "Yes. We can build a recurring schedule based on route volume, branding standards, and seasonal conditions.",
  },
  {
    question: "Do you clean vehicles on-site?",
    answer:
      "Yes. We work with businesses to clean fleets at their property when site access and scheduling allow.",
  },
  {
    question: "Why invest in regular fleet washing?",
    answer:
      "Clean vehicles protect brand perception, improve presentation with customers, and help reduce long-term grime buildup.",
  },
];
