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
    chakra,
    framerMotion,
    nginx,
    healthCanada,
    pi,
    carrent,
    jobit,
    tripguide,
    threejs,
    portfolio,
  } from '../assets';
  
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
      title: "Frontend Developer",
      icon: creator,
    },
    {
      title: "Backend Developer",
      icon: backend,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "chakra",
      icon: chakra,
    },
    {
      name: "framerMotion",
      icon: framerMotion,
    },
    {
      name: "nginx",
      icon: nginx,
    },
  ];
  
  const experiences = [
    {
      title: "QA Tester Co-op",
      company_name: "360 PI",
      icon: pi,
      iconBg: "#FFFFFF",
      date: 'Sep 2015 - April 2016',
      points: [
        "Used Jenkins in order to complete QA testing tickets.",
        "Tested key client features on pre-live servers while checking off tasks within jenkins pipeline."
      ],
    },
    {
      title: "Java Developer",
      company_name: "Health Canada",
      icon: healthCanada,
      iconbg: "#FFFFFF",
      date: 'Feb 2022 - July 2022',
      points: [
        "Maintaining web application using spring tool suite, Tomcat, among other related technoloogies.",
        "Collaborated across teams including designers, product managers, and other developers.",
        "Participated in code reviews and implemented requested changes quickly."
      ],
    },
    {
      title: "Fullstack Developer",
      company_name: "Health Canada",
      icon: healthCanada,
      iconbg: "#E6DEDD",
      date: 'August 2022 - Current',
      points: [
        "Developed React application frontend using Typescript, Chakra-UI, React-Router, amongst other web technologies.",
        "Created CI/CD pipeline for pushing code changes",
        "Implemented SQL backend to serve API endpoints.",
        "Used Ngingx as a proxy webserver to host both frontened and backend components.",
        "Fast API used to mediate fetch request from server side components to client components.",
        "Created Docker Containers for easy code replicattion and reproduction as needed by other developers.",
        "Participated in code reviews and conducted code reviews on my fellow developers, both reveived and gave constructive feedback / criticisms."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "Portfolio",
      description: 
        "A React.js based portfolio project to display information about myself, the work i've done, and the experience i've gained.",
      tags:[
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "motion",
          color: "green-text-gradient",
        },
        {
          name: "threejs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };