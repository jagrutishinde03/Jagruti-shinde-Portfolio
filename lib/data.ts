import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import MachineL from "@/public/MachineL.jpg";
import profile from "@/public/profile.jpg";
import user from "@/public/user.jpg";
import deploy from "@/public/deploy.jpg";
import { FaGraduationCap } from "react-icons/fa6";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name:"Certifications",
    hash:"#certifications",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  
  {
    name: "Contact",
    hash: "#contact",
  },
  
] as const;

export const experiencesData = [
  {
    title: "Software Developer Intern",
    location: "Dassault Systèmes",
    description:
    "Dassault Systèmes is a global leader in 3D design and engineering software. As an intern in the ENOVIA brand, I worked on web-based application development and explored core platform technologies. This role enhanced my technical skills, exposed me to real-world development practices, and deepened my understanding of scalable enterprise applications.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2024 - Present",
  },
  {
    title: "React Web Developer Intern",
    location: "CompTech IT Solutions",
    description:
    "At CompTech IT Solutions, I worked as a React Web Developer on the project ServiceDesk Pro: A HelpDesk System for CompTech IT Clients. My role involved designing a responsive user interface using HTML, CSS, Bootstrap, and ReactJS, integrating backend APIs, and implementing real-time updates for efficient query handling.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2024 - August 2024",
  },
] as const;



export const projectsData = [
  {
    title: "AWS CICD Deployment for PHP project",
    description:
    "This project is a PHP-based eCommerce website deployed through a robust CI/CD pipeline on AWS. It uses AWS CodeCommit for version control, CodeBuild for automated builds, and CodeDeploy for seamless deployment to EC2. The backend is powered by Amazon RDS with MySQL, ensuring secure and scalable data management. The setup enables rapid, automated deployments with minimal manual effort.",
    tags: ["AWS","JavaScript", "React","bootstrap"],
    icons: [
      "logos:aws",
      "logos:javascript",
      "logos:bootstrap",
      "logos:php",
    ],
    imageUrl: deploy,
    githubLink: "https://github.com/jagrutishinde03/AWS-CICD-Deployment-for-PHP-project",
  },
  {
    title: "Analysis of several Supervised Machine Learning Algorithms on Housing Dataset",
    description:
    "A machine learning project focused on predicting housing prices using models like Linear Regression, Ridge, Lasso, Decision Tree, and Random Forest. Model performance was evaluated using R², RMSE, and MAE, with Random Forest delivering the highest accuracy and lowest error. The solution supports better pricing decisions for real estate stakeholders.",
    tags: ["Python"],
    icons: [
      "logos:python"
    ],
    imageUrl: MachineL,
    githubLink: "https://github.com/jagrutishinde03/Analysis-of-several-Supervised-Machine-Learning-Algorithms-on-Housing-Dataset",
  },
  {
    title: "Profile Explorer Web Application",
    description:
    "This is a React-based web application that allows users to browse and interact with dynamic user profiles. It includes search and filter functionality, detailed profile views, and Google Maps integration for location-based visualization. Admins can manage profiles through an intuitive interface. The app is fully responsive across devices.",
    tags: ["React", "Javascript", "Bootstrap"],
    icons: ["logos:react", "logos:javascript","logos:bootstrap"],
    imageUrl: profile,
    githubLink: "https://github.com/jagrutishinde03/profile-explorer-webapp",
  },
  {
    title: "Dockerized User Management System",
    description:
    "A web application built with Flask and Docker for managing user accounts efficiently. It features secure login, session handling, and admin tools for user CRUD operations with real-time flash messages. Docker containerization ensures smooth deployment across various environments. The project showcases authentication and deployment skills.",
    tags: ["Python", "Flask", "Bootstrap", "Docker","AWS"],
    icons: ["logos:python", "logos:bootstrap", "logos:docker","logos:aws"],
    imageUrl: user,
    githubLink: "https://github.com/jagrutishinde03/Flask-UserManagement-with-Docker",
    
  },
] as const;

export const skillsData = [
  {
    name: "HTML",
    icon: "vscode-icons:file-type-html",
  },
  {
    name: "CSS",
    icon: "vscode-icons:file-type-css",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "Vue.js",
    icon: "logos:vue",
  },
  {
    name: "C++",
    icon: "vscode-icons:file-type-cpp3",
  },
  {
    name: "Java",
    icon: "logos:java",
  },
  {
    name: "AWS",
    icon: "logos:aws",
  },
  {
    name: "Docker",
    icon: "logos:docker-icon",
  },
  {
    name: "MySQL",
    icon: "logos:mysql",
  },
  {
    name: "Linux",
    icon: "flat-color-icons:linux",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
  },
  {
    name: "GitHub",
    icon: "akar-icons:github-fill",
  },
] as const;
