export const PROJECTS = [
  {
    slug: "tanabah",
    title: "Tanabah",

    category: "AI • Mobile • Healthcare",

    description:
      "An AI-powered vehicle diagnostics platform that translates OBD-II fault codes into clear maintenance insights using intelligent analysis and real-time vehicle data.",

    technologies: [
      "React Native",
      "FastAPI",
      "Python",
      "Supabase",
      "AI",
    ],

    image: "/projects/tanabah.jpg",

    github: "#",

    live: "#",

    featured: true,
  },

  {
  slug: "hospital-information-system",

  title: "Hospital Information System",

  category: "Backend • Healthcare • Training Project",

  description:
    "A training-focused hospital information system connecting patients, employees, and administrators with role-based services, policies, profiles, and communication tools.",

  overview:
    "The Hospital Information System was my first project during my training at King Abdulaziz Hospital. It was developed as a hands-on learning project to understand backend development with Node.js, connect frontend interfaces with REST APIs and MySQL, and deploy a complete application to a hospital server.",

  organization: "King Abdulaziz Hospital",

  duration: "Approximately 2–3 weeks",

  projectType: "Two-person training project",

  status: "Educational prototype",

  role: "Backend Developer",

  roleDescription:
    "Worked as the Backend Developer in a two-person team, building Node.js and Express APIs, integrating MySQL, managing session-based authentication, connecting the backend with the frontend, and contributing to approximately two frontend pages.",

  contributions: [
    "Built REST APIs for authentication, profiles, policies, services, messages, and evaluations.",
    "Connected the backend to MySQL using mysql2.",
    "Implemented session-based authentication and role-based access.",
    "Developed patient and employee profile operations.",
    "Enabled administrators to add policies and services through dedicated interfaces.",
    "Implemented email-based password recovery.",
    "Connected frontend pages with backend endpoints.",
    "Assisted with deployment and testing on the hospital server.",
    "Contributed to approximately two frontend pages.",
  ],

  features: [
    "Login and account registration",
    "Patient, employee, and administrator roles",
    "Session-based authentication",
    "Patient and employee profile management",
    "Role-based hospital services",
    "Hospital policies display",
    "Admin policy and service management",
    "Contact messages and admin inbox",
    "Email-based password recovery",
    "Staff evaluation form",
  ],

  challenges: [
    "Learning Node.js and backend development while building the system.",
    "Connecting multiple frontend interfaces to REST APIs.",
    "Designing and updating the MySQL database as requirements changed.",
    "Managing user sessions and role-based access.",
    "Deploying and testing the application in different environments.",
  ],

  technologies: [
    "Node.js",
    "Express.js",
    "JavaScript",
    "MySQL",
    "HTML",
    "CSS",
    "REST APIs",
    "Express Session",
    "Nodemailer",
  ],

  deployment: {
    hospital: "Hospital server with MySQL",
    demo: "Render with TiDB Cloud",
  },

  contributors: [
    {
      name: "",
      role: "Frontend Developer",
      linkedin: "",
    },
  ],

  image: "/projects/his.jpg",

  gallery: [
    {
      src: "/projects/hospital-information-system/screens/01-home.png",
      alt: "Hospital Information System home page",
      caption: "Hospital home page",
      orientation: "landscape",
    },
    {
      src: "/projects/hospital-information-system/screens/02-login.png",
      alt: "Hospital Information System login page",
      caption: "User login",
      orientation: "landscape",
    },
    {
      src: "/projects/hospital-information-system/screens/03-signup.png",
      alt: "Hospital Information System signup page",
      caption: "Patient and employee registration",
      orientation: "landscape",
    },
    {
      src: "/projects/hospital-information-system/screens/04-patient-profile.png",
      alt: "Patient profile interface",
      caption: "Patient profile management",
      orientation: "landscape",
    },
    {
      src: "/projects/hospital-information-system/screens/05-employee-profile.png",
      alt: "Employee profile interface",
      caption: "Employee profile management",
      orientation: "landscape",
    },
    {
      src: "/projects/hospital-information-system/screens/06-policies.png",
      alt: "Hospital policies interface",
      caption: "Hospital policies",
      orientation: "landscape",
    },
    {
      src: "/projects/hospital-information-system/screens/07-services.png",
      alt: "Role-based hospital services interface",
      caption: "Role-based services",
      orientation: "landscape",
    },
    {
      src: "/projects/hospital-information-system/screens/08-admin-dashboard.png",
      alt: "Hospital administrator dashboard",
      caption: "Administrator dashboard",
      orientation: "landscape",
    },
    {
      src: "/projects/hospital-information-system/screens/09-admin-profile.png",
      alt: "Administrator profile interface",
      caption: "Administrator profile",
      orientation: "landscape",
    },
    {
      src: "/projects/hospital-information-system/screens/10-admin-messages.png",
      alt: "Administrator messages interface",
      caption: "Contact messages inbox",
      orientation: "landscape",
    },
    {
      src: "/projects/hospital-information-system/screens/11-communication.png",
      alt: "Hospital communication interface",
      caption: "Contact and communication form",
      orientation: "landscape",
    },
    {
      src: "/projects/hospital-information-system/screens/12-evaluation.png",
      alt: "Hospital staff evaluation form",
      caption: "Staff evaluation form",
      orientation: "landscape",
    },
    {
      src: "/projects/hospital-information-system/screens/13-forgot-password.png",
      alt: "Forgot password interface",
      caption: "Password recovery request",
      orientation: "landscape",
    },
    {
      src: "/projects/hospital-information-system/screens/14-reset-password.png",
      alt: "Reset password interface",
      caption: "Password reset",
      orientation: "landscape",
    },
  ],

  github:
    "https://github.com/JooryHalabi3/Hospital-Information-System",

  live:
    "https://hospital-information-system-a70p.onrender.com/",

  featured: true,
},

  {
      slug: "hospital-maintenance",
    title: "Technical Support & Maintenance",

    category: "Enterprise Platform",

    description:
      "Maintenance management platform for hospital equipment featuring ticketing, dashboards, reporting, RBAC, and workflow automation.",

    technologies: [
      "Node.js",
      "MySQL",
      "JavaScript",
      "RBAC",
    ],

    image: "/projects/support.jpg",

    github: "#",

    live: "#",

    featured: true,
  },
];