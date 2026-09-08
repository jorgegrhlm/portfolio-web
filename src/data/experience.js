const experience = [
  {
    id: 1,
    company: "Librecoop-ETDT",
    position: "Desarrollador de aplicaciones",
    location: "Madrid, España · Remoto",
    period: "Marzo 2026 - Actualidad",
    description:
      "Participación en la migración de la aplicación Karakolas desde web2py hacia una arquitectura basada en py4web e Ionic. Desarrollo backend en Python, despliegue mediante Docker Compose y trabajo colaborativo con Git y SSH.",
    technologies: [
      "Python",
      "web2py",
      "py4web",
      "Ionic",
      "Docker",
      "Docker Compose",
      "MariaDB",
      "Git",
      "SSH",
    ],
  },
  {
    id: 2,
    company: "Paraíso Cupcake Shop",
    position: "Proyecto propio en producción · Desarrollo y despliegue",
    location: "Remoto · paraisocupcake.com",
    period: "Septiembre 2026 - Actualidad",
    description:
      "Desarrollo y puesta en producción de una tienda web propia que atiende a clientes reales. Aprovisionamiento de un VPS con Ubuntu Server (cortafuegos ufw y acceso únicamente por clave SSH), despliegue con Docker Compose sirviendo Django mediante Gunicorn detrás de Nginx, HTTPS con Let's Encrypt y renovación automática, revisión de seguridad de Django (check --deploy, HSTS y redirección forzada a HTTPS) y copias de seguridad diarias de base de datos e imágenes enviadas fuera del servidor.",
    technologies: [
      "Django REST",
      "React",
      "PostgreSQL",
      "Docker Compose",
      "Nginx",
      "Gunicorn",
      "Ubuntu Server",
      "Let's Encrypt",
      "Bash",
      "Git",
    ],
  },
];

export default experience;