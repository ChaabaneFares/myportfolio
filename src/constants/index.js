import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  ep,
  threejs,
  vshop,
  ba,
  mysql,
  cci,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id:"projects",
    title:"Projects"
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "mysql",
    icon: mysql,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Vawzen",
    // icon: starbucks,
    iconBg: "#383E56",
    // date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Vawzen",
    // icon: tesla,
    iconBg: "#E6DEDD",
    // date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining mobile applications using React Native and related technologies.",
    "Collaborating with cross-functional teams, including designers, product managers, and other developers, to create high-quality mobile applications.",
    "Implementing responsive mobile design and ensuring cross-platform compatibility.",
    "Participating in code reviews and providing constructive feedback to enhance the quality of mobile applications.",
    "Utilizing native modules and integrating with native APIs for optimal performance.",
    "Troubleshooting, debugging, and optimizing mobile applications for better user experience.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Vawzen",
    // icon: shopify,
    iconBg: "#383E56",
    // date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Vawzen",
    // icon: meta,
    iconBg: "#E6DEDD",
    date: "March 2023 - Present",
    points: [
      "Developed end-to-end web applications, handling both front-end (using React.js) and back-end (using Node.js, Express, or another server-side technology) components.",
      "Collaborated with cross-functional teams, contributing to the design, development, and deployment of robust and scalable solutions.",
      "Implemented RESTful APIs and database interactions to ensure seamless communication between the front-end and back-end components.",
      "Participated in all phases of the software development lifecycle, from requirements gathering and design to testing, deployment, and maintenance.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Fares proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Fares does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Fares optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  
  {
    name: "Branding agency",
    description:
      "A branding agency platform that offers a suite of services for businesses or people looking to establish or enhance their brand identity.This platform typically includes tools for logo design, marketing strategy development...",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "vawzen",
        color: "blue-text-gradient",
      },
    ],
    image: ba,
    source_code_link: "https://5i.vercel.app/",
  },
  {
    name: "Events planner",
    description:
      "A plateforme designed for individuals or organizations looking to organize and manage events.It provides services like venue selection, catering coordination, entertainment bookings, and decor themes",
    tags: [
      {
        name: "firestore",
        color: "blue-text-gradient",
      },
      {
        name: "next js",
        color: "green-text-gradient",
      },
      {
        name: "three fiber",
        color: "pink-text-gradient",
      },
    ],
    image: ep,
    source_code_link: "https://events-planner.vercel.app/",
  },
  {
    name: "E-commerce",
    description:
      "An e-commerce website tailored for businesses or individuals aiming to sell products online. It offers features like product listing, inventory management, shopping cart integration, and secure payment processing.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "gsap",
        color: "green-text-gradient",
      },
      {
        name: "react js",
        color: "pink-text-gradient",
      },
      
    ],
    image: vshop,
    source_code_link: "https://v-stores.vercel.app/",
  },
  {
    name: "Cleaning Services Platform",
    description: "Welcome to CCI, your all-in-one cleaning services platform dedicated to transforming your space into a pristine haven. Our platform offers a comprehensive suite of services, including upholstery cleaning, floor polishing, and more, tailored to meet your exact needs...",
    tags: [
    {
    name: "astrojs",
    color: "blue-text-gradient",
    },
    {
    name: "react",
    color: "green-text-gradient",
    },
    {
    name: "gsap",
    color: "pink-text-gradient",
    },
   
    ],
    image: cci,
    source_code_link: "https://shinbrightcleaners.com/",
    }
];

export { services, technologies, experiences, testimonials, projects };
