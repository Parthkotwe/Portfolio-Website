// navbar links
export const navLinks = [
  { id: "home", text: "Home" },
  { id: "about", text: "About" },
  { id: "skills", text: "Skills" },
  { id: "projects", text: "Projects" },
  { id: "experience", text: "Experience"},
  { id: "contact", text: "Contact" },
];

export const personalData = {
  name: "Parth Kotwe",
  role: ["Full Stack Developer", "ReactJS Developer", "NodeJS Developer"],
  experience: "5 months",
  focus: "MERN (Frontend/backend)",
  profilePic: "/parth.jpeg", // put your image inside public/
  resume: "/Parth-Kotwe-Resume1aug (1).pdf",
  linkedin: "https://www.linkedin.com/in/parth-kotwe/",
  github: "https://github.com/Parthkotwe",
};

// hero section
export const heroData = {
  name: "Parth Kotwe",
  title: "Full Stack Developer",
  subtitle: "I build modern, scalable, and beautiful web apps.",
  cta: "Contact Me",
};

// about section
export const aboutData = {
  title: "About Me",
  description:
    "I am a passionate developer with experience in React, Node.js. I love building user-friendly web apps and solving problems with code.",
};

// src/data/data.js
export const projectsData = [
  {
    title: "Portfolio Website",
    description: "A smooth and responsive personal portfolio website built using ReactJs and Tailwind CSS. It also uses React Scroll.",
    tags: ["ReactJS", "TailwindCSS","React-Scroll"],
    imageUrl: "/protfolio.png",
    linkToProject: ""
  },
  ,
  {
    title: "Backend Course Selling Wesite",
    description: "Developed a full-featured backend for an online course-selling website using Node.js and Express. Implemented user authentication (JWT), role-based access for students/instructors, course creation & management APIs,student enrollment tracking, and secure payment handling. The system was designed with a modular architecture, ensuring scalability and maintainability.",
    tags: ["Node.js", "ExpressJS","MongoDB","Authentication","Authorization","JWT","Zod","bcrypt","Postman"],
    imageUrl: "/Course-selling.png",
    linkToProject: "https://github.com/Parthkotwe/course-selling-app-backend"
  },
  {
    title: "E-Commerce App",
    description: "Frontend e-commerce application with pagination and search filter and login with dummy json api. Please Login Using 'Username:emilys and Password:emilyspass' ",
    tags: [ "React","Tailwind Css","JsonAPI"],
    imageUrl: "/E-comm.png",
    linkToProject: "https://e-commerce-registration-login-system-with-product-page.vercel.app/"
  },
  {
    title: "Weather APP",
    description: "Weather App – A responsive weather application built with React.js and Tailwind CSS, featuring real-time weather data from an API, dynamic updates, and a dark/light mode toggle.",
    tags: ["React.js", "Tailwind CSS","Weather API","Dark/Light Mode Toggle","Dynamic Data Rendering"],
    imageUrl: "/WeatherAPP.png",
    linkToProject: "https://weather-app-lovat-eight-96.vercel.app/"
  }
];

// skills section
export const skillsData = [
  "C/C++",
  "React.js",
  "JavaScript",
  "Data Structures",
  "MongoDB",
  "Zod",
  "JWT",
  "SQL",
  "HTML",
  "CSS",
  "Node.js",
  "Git",
  "Tailwind CSS",
  "noSQL",
  "ExpressJS",
  "REST APIs",
  "Bootstrap",
];

export const experiencesData = [
  {
    title: "100Xdev 3.0 WEB-DEVELOPMENT BOOTCAMP",
    location: "Remote",
    description: "Enrolled in 100xDevs 3.0 Web Development Bootcamp, a hands-on program led by Harkirat Singh. The bootcamp covers JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js, MongoDB, Authentication, and System Design, with a strong focus on building production-ready projects and mastering problem-solving skills.",
    date: "April-2025 to Present",
    icon: "💻",
  },
  {
    title: "Frontend ReactJS Developer at Walking Dreamz Technology",
    location: "Indore ,India",
    description: "Worked on building responsive UIs with React and TailwindCSS.",
    date: "Dec-2024 to April-2025",
    icon: "💻",
  },
  {
    title: "POWER BI INTERN",
    location: "Bhopal",
    description: "Gained proficiency in Microsoft Power BI and learned how to create impactful analytics. Completed multiple projects involving the creation of beautiful dashboards and generating reports for clients.",
    date: "JUNE-2022 to JULY-2022",
    icon: "💻",
  },
  {
    title: "Oriental College of Technology",
    location: "Bhopal",
    description: "Student at Oriental College of Technology in B.Tech ComputerScience and DataScience.",
    date: "2020-2024",
    icon: "📚",
  },
];

// contact section
export const contactData = {
  email: "parthkotwe848@gmail.com",
  location: "India",
};
