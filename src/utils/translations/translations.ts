export const translations = {
  es: {
    footer: {
      rights: "Todos los derechos reservados.",
    },
    language: {
      changeLanguege: "Idioma",
    },
    projects: {
      title: "Mis Proyectos",
      projectList: [
        {
          id: 1,
          title: "Aplicación Genoma y Especies",
          btnProject: "Ver Proyecto",
          image: "/gifs/Awesome-ApoloRocket.gif",
          url: "https://www.youtube.com/watch?v=ec8mhtxr9LE",
          technologies: ["React", "Nest", "MySQL", "TypeOrm", "Zustand"],
        },
        {
          id: 2,
          title: "Sistema de Ventas",
          btnProject: "Ver Proyecto",
          image: "/gifs/Visiona-Group.gif",
          url: "https://www.youtube.com/watch?v=pShcB1XfnKs",
          technologies: ["React", "Nest", "PostgreSQL", "TypeOrm", "Zustand"],
        },
        {
          id: 3,
          title: "Panel Ecommerce",
          btnProject: "Ver Proyecto",
          image: "/gifs/Ecommerce-Panel.gif",
          url: "https://www.youtube.com/watch?v=LpCY1uHHQd8",
          technologies: ["React", "Node", "Express", "Redux", "MySQL"],
        },
        {
          id: 4,
          title: "Aplicación de Salud",
          btnProject: "Ver Proyecto",
          image: "/gifs/Hackaton-Justina.gif",
          url: "https://www.youtube.com/watch?v=FVfbtmy1ywc",
          technologies: ["React", "Nest", "PostgreSQL", "TypeOrm", "Zustand"],
        },
      ],
    },

    home: {
      title: "Desarrollador Full Stack",
      subtitle:
        "La tecnología tiene que ser hecha desde lo funcional y la vanguardia",
      downloadCV: "Descargar CV",
    },
    aboutMe: {
      title: "Sobre mí",
      paragraph_1: "¡Hola! Mi nombre es Alan Rios!",
      paragraph_2:
        "Soy Desarrollador de Software. Me considero una persona creativa, innovadora con capacidad de liderazgo. Actualmente estoy buscando nuevos desafíos para crear soluciones que impacten a los usuarios. Estoy interesado en trabajar con proyectos que involucren comercio electrónico y que ofrecen servicios financieros pero no me cierro a la idea de participar en productos de otros rubros.",
      paragraph_3: "Pueden seguirme a través de mis redes sociales",
    },
    navbar: {
      home: "Inicio",
      about: "Sobre mí",
      experience: "Mi experiencia",
      projects: "Mis proyectos",
    },
    contactModal: {
      title: "¿Quieres contactarme?",
      description: "Puedes enviarme un correo electrónico.",
      openGmail: "Abrir Gmail",
    },
    experience: {
      title: "Mi experiencia",
      experiences: [
        {
          title: "Ingeniero de Software - Bitlogic",
          duration: "Sep. 2025 - Actualidad",
          tasks: [
            "Participar en el desarrollo de la nueva aplicación web de Bancor dentro de la vertical de Medios de Pago, trabajando en un entorno de microfrontends y equipos cross-verticales.",
            "Desarrollar funcionalidades clave como drawers de detalle de cuenta, buscadores de cuentas propias Bancor y no Bancor, y pantallas de importación y exportación de cuentas mediante archivos CSV.",
            "Crear y configurar Micro Frontends (MFE), asegurando su correcta integración con el ecosistema existente.",
            "Implementar y mantener componentes UI utilizando la librería Mantine, incluyendo componentes compartidos a nivel cross.",
            "Refactorizar código aplicando el patrón Compound Components para mejorar la reutilización, legibilidad y mantenibilidad.",
            "Consumir e integrar APIs REST y BFF, respetando contratos y buenas prácticas de arquitectura.",
            "Gestionar el estado de la aplicación utilizando Zustand, garantizando una experiencia de usuario consistente.",
            "Implementar pruebas unitarias y de integración con Testing Library y Jest, manteniendo un 100% de coverage en los módulos desarrollados.",
            "Colaborar activamente con equipos multidisciplinarios, priorizando la calidad del código y la escalabilidad de la solución.",
          ],
        },
        {
          title: "Desarrollador Full Stack - AWESOME.AR",
          duration: "Dic. 2023 - Ago. 2025 (1 año 9 meses)",
          clients: [
            {
              name: "Balance Nutrition",
              tasks: [
                "Implementar un carrito de compras para que los usuarios puedan adquirir fácilmente los alimentos recomendados junto con los detalles de las recetas.",
                "Diseñar e integrar funcionalidades de navegación y visualización de recetas saludables.",
              ],
            },
            {
              name: "Visiona Grupo",
              tasks: [
                "Implementar servicios backend robustos para el manejo eficiente de productos.",
                "Diseñar APIs escalables para sincronizar y actualizar datos en tiempo real.",
              ],
            },
            {
              name: "Apolo Rocket",
              tasks: [
                "Diseñar e implementar módulos interactivos para la visualización y gestión de datos genéticos.",
                "Automatizar flujos de trabajo para mejorar la eficiencia en la comparación de información genética.",
              ],
            },
          ],
        },
        {
          title: "Desarrollador Full Stack - AYIGROUP",
          duration: "Abr. 2021 - Oct. 2023 (2 años 7 meses)",
          clients: [
            {
              name: "Registro Civil",
              tasks: [
                "Implementar funcionalidades para consultas, trámites y reclamos en un entorno 100 % online.",
                "Optimizar la experiencia del usuario en la plataforma, disponible las 24 horas y desde cualquier dispositivo.",
                "Contribuir a la digitalización y automatización de las mesas de entrada provinciales, reduciendo costos y promoviendo la sustentabilidad.",
              ],
            },
            {
              name: "Rentas",
              tasks: [
                "Crear funcionalidades para administrar créditos fiscales.",
                "Diseñar una experiencia de usuario intuitiva y optimizada para dispositivos móviles.",
              ],
            },
            {
              name: "Interconomy",
              tasks: [
                "Diseñar un sistema seguro y transparente para enviar, recibir y administrar valores dentro de un ecosistema de confianza.",
                "Implementar funcionalidades para la personalización de tokens y la optimización de circuitos de intercambio entre empresas e instituciones.",
              ],
            },
            {
              name: "Sitio web de la empresa",
              tasks: [
                "Diseñar una interfaz atractiva y funcional enfocada en la experiencia del usuario.",
                "Implementar funcionalidades que resaltan los servicios y productos de la empresa.",
              ],
            },
            {
              name: "Moodle y OnBoarding",
              tasks: [
                "Implementar un sistema de gestión de cursos con herramientas interactivas para las escuelitas de la empresa.",
                "Diseñar un flujo de onboarding intuitivo para facilitar la incorporación de nuevos empleados.",
              ],
            },
          ],
        },
        {
          title: "Desarrollador Full Stack - TYCON",
          duration: "Feb. 2020 - Mar. 2021 (1 año 2 meses)",
          tasks: [
            "Desarrollar una plataforma de ecommerce para un cliente interno, optimizando la gestión de ventas y productos en línea.",
            "Implementar funcionalidades para el catálogo de productos, carrito de compras y pasarela de pagos.",
            "Diseñar un sistema escalable para la administración de inventarios y pedidos en tiempo real.",
            "Garantizar una experiencia de usuario fluida y segura para la compra en línea.",
          ],
        },
      ],
    },
  },
  en: {
    footer: {
      rights: "All rights reserved.",
    },
    language: {
      changeLanguege: "Language",
    },
    home: {
      title: "Full Stack Developer",
      subtitle: "Technology must be built from functionality and innovation",
      downloadCV: "Download CV",
    },
    projects: {
      title: "My Projects",
      projectList: [
        {
          id: 1,
          title: "Genome and Species Application",
          btnProject: "See Project",
          image: "/gifs/Awesome-ApoloRocket.gif",
          url: "https://www.youtube.com/watch?v=ec8mhtxr9LE",
          technologies: ["React", "Nest", "MySQL", "TypeOrm", "Zustand"],
        },
        {
          id: 2,
          title: "Sales System",
          btnProject: "See Project",
          image: "/gifs/Visiona-Group.gif",
          url: "https://www.youtube.com/watch?v=pShcB1XfnKs",
          technologies: ["React", "Nest", "PostgreSQL", "TypeOrm", "Zustand"],
        },
        {
          id: 3,
          title: "Ecommerce Panel",
          btnProject: "See Project",
          image: "/gifs/Ecommerce-Panel.gif",
          url: "https://www.youtube.com/watch?v=LpCY1uHHQd8",
          technologies: ["React", "Node", "Express", "Redux", "MySQL"],
        },
        {
          id: 4,
          title: "Health Application",
          btnProject: "See Project",
          image: "/gifs/Hackaton-Justina.gif",
          url: "https://www.youtube.com/watch?v=FVfbtmy1ywc",
          technologies: ["React", "Nest", "PostgreSQL", "TypeOrm", "Zustand"],
        },
      ],
    },
    aboutMe: {
      title: "About Me",
      paragraph_1: "Hi! I'm Alan Ríos",
      paragraph_2:
        "I am a Software Developer. I consider myself a creative, innovative person with leadership skills. I am currently looking for new challenges to create solutions that impact users. I am interested in working with projects that involve electronic commerce and that offer financial services but I am not closed to the idea of ​​​​participating in products from other areas.",
      paragraph_3: "You can follow me through my social networks",
    },
    navbar: {
      home: "Home",
      about: "About Me",
      experience: "My Experience",
      projects: "My Projects",
    },
    contactModal: {
      title: "Want to contact me?",
      description: "You can send me an email.",
      openGmail: "Open Gmail",
    },
    experience: {
      title: "My Experience",
      experiences: [
        {
          title: "Software Engineer - Bitlogic",
          duration: "Sep. 2025 - Present",
          tasks: [
            "Contributed to the development of Bancor’s new web application within the Payments vertical, working in a microfrontend-based architecture and cross-vertical teams.",
            "Developed key features such as account detail drawers, search functionality for Bancor and non-Bancor accounts, and CSV-based account import/export screens.",
            "Created and configured Micro Frontends (MFEs), ensuring seamless integration within the existing ecosystem.",
            "Implemented and maintained UI components using the Mantine component library, including shared cross-level components.",
            "Refactored code by applying the Compound Components pattern to improve reusability, readability, and maintainability.",
            "Integrated REST APIs and BFF services, following architectural best practices and contract definitions.",
            "Managed application state using Zustand to ensure a consistent and predictable user experience.",
            "Implemented unit and integration tests using Testing Library and Jest, maintaining 100% test coverage on developed modules.",
            "Worked closely with multidisciplinary teams, prioritizing code quality, scalability, and long-term maintainability.",
          ],
        },
        {
          title: "Full Stack Developer - AWESOME.AR",
          duration: "Dec. 2023 - Ago. 2025 (1 year 9 months)",
          clients: [
            {
              name: "Balance Nutrition",
              tasks: [
                "Implement a shopping cart to allow users to easily purchase recommended foods along with recipe details.",
                "Design and integrate navigation and healthy recipe display features.",
              ],
            },
            {
              name: "Visiona Grupo",
              tasks: [
                "Develop robust backend services for efficient product management.",
                "Design scalable APIs to synchronize and update data in real-time.",
              ],
            },
            {
              name: "Apolo Rocket",
              tasks: [
                "Design and implement interactive modules for genetic data visualization and management.",
                "Automate workflows to enhance efficiency in genetic information comparison.",
              ],
            },
          ],
        },
        {
          title: "Full Stack Developer - AYIGROUP",
          duration: "Apr. 2021 - Oct. 2023 (2 years 7 months)",
          clients: [
            {
              name: "Civil Registry",
              tasks: [
                "Implement features for online inquiries, procedures, and complaints in a fully digital environment.",
                "Optimize user experience on the platform, accessible 24/7 from any device.",
                "Contribute to the digitalization and automation of provincial entry desks, reducing costs and promoting sustainability.",
              ],
            },
            {
              name: "Rentas",
              tasks: [
                "Develop features for managing tax credits.",
                "Design an intuitive user experience optimized for mobile devices.",
              ],
            },
            {
              name: "Interconomy",
              tasks: [
                "Design a secure and transparent system for sending, receiving, and managing assets within a trusted ecosystem.",
                "Implement features for token customization and optimization of exchange circuits between businesses and institutions.",
              ],
            },
            {
              name: "Company Website",
              tasks: [
                "Design an attractive and functional interface focused on user experience.",
                "Implement features that highlight the company’s services and products.",
              ],
            },
            {
              name: "Moodle and OnBoarding",
              tasks: [
                "Implement a course management system with interactive tools for the company's training programs.",
                "Design an intuitive onboarding flow to facilitate new employee integration.",
              ],
            },
          ],
        },
        {
          title: "Full Stack Developer - TYCON",
          duration: "Feb. 2020 - Mar. 2021 (1 year 2 months)",
          tasks: [
            "Develop an ecommerce platform for an internal client, optimizing online sales and product management.",
            "Implement features for product catalog, shopping cart, and payment gateway.",
            "Design a scalable system for real-time inventory and order management.",
            "Ensure a smooth and secure user experience for online purchases.",
          ],
        },
      ],
    },
  },
};
