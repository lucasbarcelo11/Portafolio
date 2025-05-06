import React from "react";

const Experience = () => {
  return (
    <div className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h2 className="text-4xl font-bold text-center text-[#001b5e] dark:text-gray-200">
        Experiencia Laboral
      </h2>
      <ol className="flex flex-col md:flex-row relative border-l border-stone-200 mt-10">
        <li className="mb-10 ml-4 dark:text-gray-200">
          <p className="flex flex-wrap flex-row text-xs md:text-sm gap-3">
            <span className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md">
              Politecnico San José
            </span>
            <span className="inline-block px-2 py-1 font-semibold text-white bg-red-500 rounded-md">
              2023 - Actualidad
            </span>
          </p>
          <p className="mt-6 flex flex-col">
            <span className="my-2 text-base font-normal text-stone-600 dark:text-gray-200">
              Profesor de Desarrollo Web FullStack.
            </span>
            <span className="my-2 text-base font-normal text-stone-600 dark:text-gray-200">JavaScript - HTML5 - Css3 - React - Nodejs - Express - PostgreSQL.</span>
          </p>
        </li>
      </ol>
      <ol className="flex flex-col md:flex-row relative border-l border-stone-200 mt-10">
        <li className="mb-10 ml-4 dark:text-gray-200">
          <p className="flex flex-wrap flex-row text-xs md:text-sm gap-3">
            <span className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md">
              Desarrollador Freelance
            </span>
            <span className="inline-block px-2 py-1 font-semibold text-white bg-red-500 rounded-md">
              Actualidad
            </span>
          </p>
          <p className="mt-6 flex flex-col">
            <span className="my-2 text-base font-normal text-stone-600 dark:text-gray-200">
            Diseño y desarrollo páginas web personalizadas para distintos clientes, gestionando la comunicación, el diseño visual y la implementación técnica, asegurando que cada proyecto se adapte a las necesidades y objetivos del cliente.
            </span>
            <span className="my-2 text-base font-normal text-stone-600 dark:text-gray-200">JavaScript - HTML5 - Css3 - React - Nodejs - Express - PostgreSQL.</span>
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Experience;
