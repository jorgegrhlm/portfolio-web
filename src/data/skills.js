import {
  FaJava,
  FaPython,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaAws,
  FaCode,
  FaGithub,
} from "react-icons/fa";

import {
  SiKotlin,
  SiDjango,
  SiPostgresql,
  SiMariadb,
  SiMysql,
  SiMongodb,
  SiVite,
  SiUnity,
  SiOdoo,
} from "react-icons/si";

const skills = [
  // Lenguajes
  {
    id: 1,
    name: "Java",
    icon: FaJava,
    category: "Lenguajes",
  },
  {
    id: 2,
    name: "Python",
    icon: FaPython,
    category: "Lenguajes",
  },
  {
    id: 3,
    name: "Kotlin",
    icon: SiKotlin,
    category: "Lenguajes",
  },
  {
    id: 4,
    name: "C#",
    icon: FaCode,
    category: "Lenguajes",
  },

  // Frontend
  {
    id: 5,
    name: "React",
    icon: FaReact,
    category: "Frontend",
  },
  {
    id: 6,
    name: "Vite",
    icon: SiVite,
    category: "Frontend",
  },

  // Backend
  {
    id: 7,
    name: "Django REST",
    icon: SiDjango,
    category: "Backend",
  },
  {
    id: 8,
    name: "Odoo",
    icon: SiOdoo,
    category: "Backend",
  },

  // Bases de datos
  {
    id: 9,
    name: "PostgreSQL",
    icon: SiPostgresql,
    category: "Bases de datos",
  },
  {
    id: 10,
    name: "MySQL",
    icon: SiMysql,
    category: "Bases de datos",
  },
  {
    id: 11,
    name: "MariaDB",
    icon: SiMariadb,
    category: "Bases de datos",
  },
  {
    id: 12,
    name: "MongoDB",
    icon: SiMongodb,
    category: "Bases de datos",
  },

  // DevOps
  {
    id: 13,
    name: "Docker",
    icon: FaDocker,
    category: "DevOps",
  },
  {
    id: 14,
    name: "Docker Compose",
    icon: FaCode,
    category: "DevOps",
  },
  {
    id: 15,
    name: "AWS",
    icon: FaAws,
    category: "DevOps",
  },

  // Herramientas
  {
    id: 16,
    name: "Git",
    icon: FaGitAlt,
    category: "Herramientas",
  },
  {
    id: 17,
    name: "GitHub",
    icon: FaGithub,
    category: "Herramientas",
  },
  {
    id: 18,
    name: "Linux",
    icon: FaLinux,
    category: "Herramientas",
  },
  {
    id: 19,
    name: "SSH",
    icon: FaCode,
    category: "Herramientas",
  },
  {
    id: 20,
    name: "Unity",
    icon: SiUnity,
    category: "Herramientas",
  },
];

export default skills;