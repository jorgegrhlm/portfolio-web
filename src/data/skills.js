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
  SiSpringboot,
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
  name: "Spring Boot",
  icon: SiSpringboot,
  category: "Backend",
},
{
  id: 8,
  name: "Spring Data JPA",
  icon: FaJava,
  category: "Backend",
},
{
  id: 9,
  name: "Hibernate",
  icon: FaJava,
  category: "Backend",
},
{
  id: 10,
  name: "Django REST",
  icon: SiDjango,
  category: "Backend",
},
{
  id: 11,
  name: "Odoo",
  icon: SiOdoo,
  category: "Backend",
},

  // Bases de datos
  {
    id: 12,
    name: "PostgreSQL",
    icon: SiPostgresql,
    category: "Bases de datos",
  },
  {
    id: 13,
    name: "MySQL",
    icon: SiMysql,
    category: "Bases de datos",
  },
  {
    id: 14,
    name: "MariaDB",
    icon: SiMariadb,
    category: "Bases de datos",
  },
  {
    id: 15,
    name: "MongoDB",
    icon: SiMongodb,
    category: "Bases de datos",
  },

  // DevOps
  {
    id: 16,
    name: "Docker",
    icon: FaDocker,
    category: "DevOps",
  },
  {
    id: 17,
    name: "Docker Compose",
    icon: FaCode,
    category: "DevOps",
  },
  {
    id: 18,
    name: "AWS",
    icon: FaAws,
    category: "DevOps",
  },

  // Herramientas
  {
    id: 19,
    name: "Git",
    icon: FaGitAlt,
    category: "Herramientas",
  },
  {
    id: 20,
    name: "GitHub",
    icon: FaGithub,
    category: "Herramientas",
  },
  {
    id: 21,
    name: "Linux",
    icon: FaLinux,
    category: "Herramientas",
  },
  {
    id: 22,
    name: "SSH",
    icon: FaCode,
    category: "Herramientas",
  },
  {
    id: 23,
    name: "Unity",
    icon: SiUnity,
    category: "Herramientas",
  },
];

export default skills;