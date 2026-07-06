import paraisoCupcake from "../assets/projects/paraiso-cupcake.webp";
import karakolas from "../assets/projects/karakolas.webp";
import dungeonCrawler from "../assets/projects/dungeon-crawler.webp";
import liveEvents from "../assets/projects/live-events.webp";
import liga from "../assets/projects/liga.webp";
import chat from "../assets/projects/chat.webp";

const projects = [
  {
    id: 1,
    title: "Paraíso Cupcake Shop",
    image: paraisoCupcake,
    description:
      "Aplicación web Full Stack desarrollada como Trabajo de Fin de Grado. Incluye autenticación JWT, API REST, gestión de productos, carrito de compra y despliegue mediante Docker Compose.",
    technologies: [
      "React",
      "Vite",
      "Django REST",
      "PostgreSQL",
      "Docker",
      "GitHub",
    ],
    github: "https://github.com/jorgegrhlm/paraisocupcakeshop",
    demo: "",
  },
  {
  id: 2,
  title: "Migración Karakolas",
  image: karakolas,
  description:
    "Participación en la migración de la aplicación Karakolas desde web2py hacia una arquitectura basada en py4web e Ionic. Desarrollo backend en Python, despliegue con Docker Compose y trabajo colaborativo con Git y SSH.",
  technologies: [
    "Python",
    "py4web",
    "web2py",
    "Ionic",
    "Docker",
    "MariaDB",
    "Framagit",
  ],
  github: "",
  demo: "",
},
{
  id: 3,
  title: "Dungeon Crawler",
  image: dungeonCrawler,
  description:
    "Videojuego de plataforma 2D desarrollado en Unity como proyecto académico. Implementación de mecánicas de juego, control del personaje, enemigos, colisiones y diseño de niveles utilizando C#.",
  technologies: [
    "Unity",
    "C#",
    "2D",
    "Game Development",
  ],
  github: "https://github.com/jorgegrhlm/DungeonCrawlerPlatform2D",
  demo: "",
},
{
  id: 4,
  title: "Live Events",
  image: liveEvents,
  description:
    "Aplicación nativa Android desarrollada con Kotlin para la gestión y visualización de eventos. Incluye navegación entre pantallas, consumo de datos y una interfaz adaptada a dispositivos móviles.",
  technologies: [
    "Kotlin",
    "Android",
    "Android Studio",
  ],
  github: "https://github.com/HojaSilvana/LIVE-Events",
  demo: "",
},
{
  id: 5,
  title: "PracticaChatGroupV2",
  image: chat,
  description:
    "Aplicación de chat grupal cliente-servidor desarrollada en Java, usando sockets y programación multihilo. El servidor acepta múltiples clientes simultáneos y reenvía los mensajes de cada usuario al resto de conectados.",
  technologies: [
    "Java",
    "sockets",
    "programación multihilo",
  ],
  github: "https://github.com/jorgegrhlm/PracticaChatGroupV2",
  demo: "",
},
{
  id: 6,
  title: "Liga de Fútbol ORM",
  image: liga,
  description:
    "Proyecto desarrollado en Java con JPA/Hibernate y MySQL que simula una edición de la Champions League (2026). Incluye la creación de entidades, relaciones y consultas para gestionar equipos, jugadores y partidos.",
  technologies: [
    "Java",
    "JPA/Hibernate",
    "MySQL",
    "Log4j",
    "HickariCP",
  ],
  github: "https://github.com/jorgegrhlm/ChampionsLeague_ORM",
  demo: "",
}
];

export default projects;