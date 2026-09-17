import type { Project } from "../types/project";

import voimaAdmin from "../assets/projects/voima/voima_dashboard.png";
import voimaHomepage from "../assets/projects/voima/voima_events.png";
import voimaOverview from "../assets/projects/voima/voima_hero.png";

import prepdCheckout from "../assets/projects/prepd/prepd_dashboard.png";
import prepdOverview from "../assets/projects/prepd/prepd_hero.png";
import prepdProduct from "../assets/projects/prepd/prepd_shop.png";

import beeflxryAbout from "../assets/projects/beeflxry/bxf_about.png";
import beeflxryOverview from "../assets/projects/beeflxry/bxf_hero.png";
import beeflxryShop from "../assets/projects/beeflxry/bxf_shop.png";

export const projects: Project[] = [
  {
    slug: "voima-platform",
    name: "Voima Initiative Platform",
    year: "2026",
    role: "Full-stack engineering",
    status: "In production",
    featured: true,

    images: [
      {
        src: voimaOverview,
        alt: "Voima Initiative website",
        caption: "Voima Initiative digital platform",
      },
      {
        src: voimaHomepage,
        alt: "Voima Initiative events page",
        caption: "CMS-driven public experience",
      },
      {
        src: voimaAdmin,
        alt: "Voima Initiative administration platform",
        caption: "Content and platform management",
      },
    ],

    summary:
      "A production web platform for a health-focused initiative, combining a public digital experience with structured content management and an administrative platform.",

    problem:
      "Voima needed a digital platform that could communicate its mission, programs, research, stories, and impact while allowing its team to manage changing content without depending on developers for every update.",

    outcome:
      "A production-ready platform with a CMS-driven public site, structured content workflows, reusable frontend sections, and an administration layer designed around the organization's evolving needs.",

    stack: [
      {
        domain: "Frontend",
        items: ["React", "JavaScript", "Tailwind CSS", "Vite"],
      },
      {
        domain: "CMS",
        items: ["Sanity"],
      },
      {
        domain: "Backend",
        items: ["Node.js", "Express"],
      },
      {
        domain: "Data",
        items: ["PostgreSQL", "Prisma"],
      },
      {
        domain: "Infrastructure",
        items: ["Vercel", "Render"],
      },
    ],

    sections: {
      context: {
        heading: "Context",
        body: [
          "Voima Initiative needed more than a static organization website. The platform needed to communicate its mission while supporting programs, research, community stories, events, partners, impact information, and other content that would continue changing over time.",
          "The engineering challenge was therefore to create a flexible product structure rather than a collection of pages that would require code changes whenever the organization published something new.",
        ],
      },

      constraints: {
        heading: "Constraints",
        body: [
          "The public experience needed to remain simple and fast while giving administrators control over frequently changing content.",
          "Different homepage sections needed to consume structured content while still maintaining the visual identity and layout of the product.",
          "The system also needed to support production deployment, API communication, authentication, and reliable data management without making the frontend responsible for backend concerns.",
        ],
      },

      architecture: {
        heading: "Architecture",
        body: [
          "The platform separates the presentation layer from content and application data. React handles the public experience while Sanity provides structured editorial content and the backend handles application-specific services and data.",
          "The homepage is composed from CMS-managed sections rather than being treated as a single hardcoded page. Content such as programs, news, impact information, milestones, gallery content, and application information can therefore be modeled independently and reused across the platform.",
          "The architecture also establishes clear boundaries between frontend presentation, CMS content, backend services, and persistent application data.",
        ],
      },

      decisions: {
        heading: "Technical decisions",
        body: [
          "Sanity was used for editorial content because the platform needed administrators to publish and update structured content without requiring a new frontend deployment.",
          "Reusable React sections were used instead of page-specific implementations so that new CMS-driven sections could be introduced without duplicating presentation logic.",
          "The data layer uses Prisma and PostgreSQL for application data, while the CMS remains responsible for editorial content.",
          "Frontend data access was structured around service and hook layers so components remain focused on presentation rather than fetching and transforming data themselves.",
        ],
      },

      implementation: {
        heading: "Implementation",
        body: [
          "The frontend was built as a reusable React application with structured sections and responsive layouts. CMS content is fetched through dedicated services and exposed to components through hooks.",
          "The Sanity pipeline includes structured schemas, queries, service functions, and fallback handling. This allows the frontend to continue behaving predictably even when CMS content is incomplete or unavailable.",
          "The platform also includes administrative functionality and backend services supporting the operational side of the product.",
        ],
      },

      challenges: {
        heading: "Challenges",
        body: [
          "One of the larger engineering challenges was keeping CMS data structures aligned with reusable frontend components as the homepage evolved.",
          "Introducing additional sections meant updating schemas, queries, services, hooks, and components without breaking existing content or creating tightly coupled implementations.",
          "Production deployment also required dealing with environment configuration, CORS, API communication, database migrations, and differences between local and deployed environments.",
        ],
      },

      outcome: {
        heading: "Outcome",
        body: [
          "The result is a production web platform that separates content management from presentation while giving the organization significantly more control over its digital presence.",
          "The architecture also provides a foundation for adding new programs, stories, research, events, and other content without rebuilding the public site each time.",
        ],
      },

      lessons: {
        heading: "Lessons",
        body: [
          "The most important lesson was that building a production platform is less about individual components and more about maintaining boundaries between systems.",
          "A CMS is only useful when its content model, frontend architecture, and editorial workflow agree with one another. Designing those boundaries early makes the product significantly easier to evolve.",
        ],
      },
    },

    links: {
      live: "https://voimainitiative.com",
    },
  },

  {
    slug: "prepd-commerce-platform",
    name: "PREP'D Commerce Platform",
    year: "2026",
    role: "Product engineering",
    status: "In production",
    featured: true,

    images: [
      {
        src: prepdOverview,
        alt: "PREP'D commerce website",
        caption: "PREP'D product commerce experience",
      },
      {
        src: prepdProduct,
        alt: "PREP'D student starter box product page",
        caption: "Product discovery and details",
      },
      {
        src: prepdCheckout,
        alt: "PREP'D admin dashboard",
        caption: "Commerce and Administrative flow",
      },
    ],

    summary:
      "A focused commerce platform for PREP'D, turning a curated student starter box into a complete product experience from discovery through customization, cart, and checkout.",

    problem:
      "PREP'D needed a simple commerce experience that could present a curated student starter box, explain what was inside, support customization, and provide a straightforward purchasing flow without the complexity of a large marketplace.",

    outcome:
      "A focused product-commerce experience built around product storytelling, clear product discovery, cart functionality, customization, checkout, and an administrative workflow.",

    stack: [
      {
        domain: "Frontend",
        items: ["React", "JavaScript", "Tailwind CSS", "Vite"],
      },
      {
        domain: "Application",
        items: ["Node.js", "Express"],
      },
      {
        domain: "Data",
        items: ["PostgreSQL", "Prisma"],
      },
      {
        domain: "Commerce",
        items: ["Cart", "Checkout", "Customization"],
      },
    ],

    sections: {
      context: {
        heading: "Context",
        body: [
          "PREP'D is a curated student starter box containing practical study essentials such as notebooks, pens, sticky notes, planners, highlighters, and flash cards.",
          "The goal was not to build a generic ecommerce marketplace. The product needed to make one curated offering feel intentional and easy to understand while still providing the core functionality expected from a commerce platform.",
        ],
      },

      constraints: {
        heading: "Constraints",
        body: [
          "The experience needed to remain simple because the product catalog is intentionally focused.",
          "Product storytelling was important because customers need to understand both the individual items and the value of the complete starter box.",
          "The checkout flow needed to be straightforward rather than introducing unnecessary ecommerce complexity.",
        ],
      },

      architecture: {
        heading: "Architecture",
        body: [
          "The application is structured around a product-driven frontend with reusable product, cart, customization, and checkout components.",
          "Application data is separated from the presentation layer so that product information and commerce operations can evolve without requiring the UI to contain business logic.",
          "The architecture intentionally stays smaller than a traditional ecommerce platform because the product itself is intentionally focused.",
        ],
      },

      decisions: {
        heading: "Technical decisions",
        body: [
          "The product experience was designed around storytelling rather than treating the starter box as another item in a catalog.",
          "Reusable components were used for product presentation and commerce interactions so the platform can expand if additional products are introduced later.",
          "The system avoids unnecessary complexity such as reviews or a large marketplace structure, keeping the architecture proportional to the actual business requirements.",
        ],
      },

      implementation: {
        heading: "Implementation",
        body: [
          "The frontend provides product discovery, detailed product information, cart interactions, customization, and checkout flows.",
          "The interface was designed to work across desktop and mobile while keeping the purchasing path clear and minimizing unnecessary interaction steps.",
          "The application structure also leaves room for an administrative interface where product and order information can be managed.",
        ],
      },

      challenges: {
        heading: "Challenges",
        body: [
          "The main challenge was balancing a polished product experience with the simplicity required by a focused commerce product.",
          "The design needed to communicate the value of the complete box without overwhelming the customer with unnecessary information or ecommerce functionality.",
        ],
      },

      outcome: {
        heading: "Outcome",
        body: [
          "PREP'D becomes a focused digital commerce experience rather than simply a product landing page.",
          "The platform connects product storytelling with the actual commerce journey, giving customers a clear path from understanding the product to purchasing it.",
        ],
      },

      lessons: {
        heading: "Lessons",
        body: [
          "Good product engineering is not about adding as many features as possible. It is about identifying the actual product requirements and building enough system around them to make the experience reliable and extensible.",
          "PREP'D reinforced the value of designing the architecture around the size and needs of the product instead of importing complexity from much larger ecommerce systems.",
        ],
      },
    },

    links: {
      live: "https://www.prepd.site",
    },
  },

  {
    slug: "beef-luxury-commerce",
    name: "Beef Luxury Shopping Platform",
    year: "2025",
    role: "Frontend & product engineering",
    status: "In production",
    featured: true,

    images: [
      {
        src: beeflxryOverview,
        alt: "Beef Luxury shopping platform homepage",
        caption: "Beef Luxury commerce experience",
      },
      {
        src: beeflxryShop,
        alt: "Beef Luxury shopping interface",
        caption: "Product discovery and shopping experience",
      },
      {
        src: beeflxryAbout,
        alt: "Beef Luxury website interface",
        caption: "Brand and product experience",
      },
    ],

    summary:
      "A complete shopping experience built from the fundamentals of the web - using HTML, CSS, and JavaScript to turn a simple idea into a functional commerce platform.",

    problem:
      "The challenge was not choosing a large framework or assembling a collection of packages. It was proving that the fundamentals were enough to build a polished, responsive, and usable shopping experience. Beef Luxury was built around that constraint: start with simple web technologies and make them do the work.",

    outcome:
      "A production shopping platform that demonstrates how far strong fundamentals, thoughtful product design, and well-structured JavaScript can go without relying on a heavy frontend framework.",

    stack: [
      {
        domain: "Frontend",
        items: ["JavaScript", "HTML", "CSS"],
      },
      {
        domain: "Engineering",
        items: ["DOM", "Browser APIs", "Responsive Design"],
      },
      {
        domain: "Product",
        items: ["Shopping Experience", "Product Discovery", "Commerce UI"],
      },
    ],

    sections: {
      context: {
        heading: "Context",
        body: [
          "Beef Luxury was built as an exercise in understanding how much can be achieved with the fundamentals of the web.",
          "Instead of starting with React or a collection of frontend libraries, the project started with HTML, CSS, and JavaScript. The goal was to create a genuine shopping experience while keeping the underlying technology deliberately simple.",
        ],
      },

      constraints: {
        heading: "Constraints",
        body: [
          "The primary constraint was technological simplicity. The platform needed to be built without relying on a frontend framework to provide the structure.",
          "That meant the interface, interactions, state changes, navigation, and responsive behavior all had to be deliberately designed and implemented using the browser's core capabilities.",
          "The constraint became part of the engineering challenge: the goal was not to make the technology look sophisticated, but to make the final product feel complete.",
        ],
      },

      architecture: {
        heading: "Architecture",
        body: [
          "The application uses the browser itself as the foundation. HTML provides the semantic structure, CSS handles presentation and responsive behavior, while JavaScript controls interaction and application behavior.",
          "Rather than introducing abstractions for problems that could be solved directly, the implementation keeps responsibilities close to the underlying web platform.",
          "This made the project intentionally lightweight while requiring a stronger understanding of how the DOM, events, browser state, and CSS work together.",
        ],
      },

      decisions: {
        heading: "Technical decisions",
        body: [
          "The most important technical decision was to avoid reaching for a framework simply because it was familiar or conventional.",
          "HTML was used for structure, CSS for the visual system and responsive layouts, and JavaScript for the interactive behavior required by the shopping experience.",
          "This approach reduced dependencies and made the implementation transparent. Every interaction ultimately traces back to a small set of fundamental browser capabilities.",
        ],
      },

      implementation: {
        heading: "Implementation",
        body: [
          "The interface was implemented using semantic HTML and a responsive CSS system designed around the actual product experience rather than a framework's component model.",
          "JavaScript handles the interactive behavior of the shopping experience and connects user actions to changes in the interface.",
          "The result is a complete frontend experience built without hiding the underlying mechanics behind a large abstraction layer.",
        ],
      },

      challenges: {
        heading: "Challenges",
        body: [
          "Working without a frontend framework meant that problems a framework normally abstracts away had to be solved directly.",
          "Managing interface state, user interactions, DOM updates, responsive behavior, and reusable patterns required a stronger understanding of the browser rather than simply knowing how to use a library.",
          "The biggest challenge was maintaining a clean and maintainable implementation while deliberately keeping the technology simple.",
        ],
      },

      outcome: {
        heading: "Outcome",
        body: [
          "Beef Luxury demonstrates that a strong product experience does not require a sophisticated technology stack.",
          "The project turns a deliberately small technical foundation into a complete shopping experience and serves as a practical demonstration of frontend fundamentals, problem solving, and product thinking.",
        ],
      },

      lessons: {
        heading: "Lessons",
        body: [
          "The biggest lesson was that engineering ability is not measured by how many technologies are used. It is measured by how effectively the available tools are applied to solve the problem.",
          "Frameworks and libraries are valuable, but they should amplify understanding rather than replace it. Building Beef Luxury with HTML, CSS, and JavaScript reinforced the importance of understanding what those abstractions are actually doing underneath.",
          "Sometimes the best way to demonstrate engineering depth is to deliberately remove the abstractions and build from the fundamentals.",
        ],
      },
    },

    links: {
      live: "https://beef-luxury.vercel.app",
    },
  },
];