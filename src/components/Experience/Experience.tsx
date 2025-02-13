"use client";

import { useState } from "react";
import { FaChevronDown, FaStar } from "react-icons/fa";

const experiences = [
  {
    title: "Mentor Full Stack - InnovaTeam",
    duration: "Sept. 2024 - Feb. 2025 (6 meses)",
    tasks: [
      "Explicar teorías e implementar mediante prácticas las bases de programación.",
      "Enseñar mejores prácticas de codificación y documentación de tareas de desarrollo.",
    ],
  },
  {
    title: "Desarrollador Full Stack - AWESOME.AR",
    duration: "Dic. 2023 - Sept. 2024 (10 meses)",
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
    duration: "Feb. 2020 - Oct. 2020 (9 meses)",
    tasks: [
      "Desarrollar una plataforma de ecommerce para un cliente interno, optimizando la gestión de ventas y productos en línea.",
      "Implementar funcionalidades para el catálogo de productos, carrito de compras y pasarela de pagos.",
      "Diseñar un sistema escalable para la administración de inventarios y pedidos en tiempo real.",
      "Garantizar una experiencia de usuario fluida y segura para la compra en línea.",
    ],
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative flex flex-col items-center py-10 bg-black min-h-screen text-white">
      <div className="w-full max-w-xl space-y-6 relative">
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex items-start">
            {index !== experiences.length - 1 && (
              <div className="absolute left-6 top-12 w-[2px] h-full bg-gray-600 z-0"></div>
            )}
            <div className="relative z-10 flex items-center justify-center w-12 h-12 mt-3 bg-gray-900 border-2 border-gray-500 rounded-full">
              <FaStar
                className={`text-[17px] sm:text-xl transition-all duration-300 ${
                  activeIndex === index
                    ? "text-yellow-400 drop-shadow-lg"
                    : "text-gray-300"
                }`}
              />
            </div>

            <div className="flex-1 ml-8 z-50">
              <button
                className="flex justify-between items-center w-full px-5 py-4 rounded-lg transition-all duration-300 focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <div className="text-left">
                  <span className="text-[16px] sm:text-xl font-semibold">
                    {exp.title}
                  </span>
                  <div className="text-[11px] sm:text-base text-gray-400">
                    {exp.duration}
                  </div>
                </div>
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  } text-white`}
                />
              </button>

              <div
                className={`${
                  activeIndex === index
                    ? "opacity-100 max-h-100 py-2 transition-all duration-500 ease-in-out"
                    : "opacity-0 max-h-0"
                } overflow-hidden`}
              >
                {exp.clients ? (
                  exp.clients.map((client, i) => (
                    <div key={i} className="px-5 text-gray-300">
                      <span className="font-semibold text-[15px] sm:text-xl">{client.name}</span>
                      <ul className="list-none text-[13px] sm:text-xl">
                        {client.tasks.map((task, j) => (
                          <li key={j} className="flex items-start mb-1">
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                ) : (
                  <ul className="px-5 text-gray-300 list-none text-[13px] sm:text-xl">
                    {exp.tasks.map((task, i) => (
                      <li key={i} className="flex items-start mb-1">
                        {task}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
