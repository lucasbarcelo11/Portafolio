import React from "react";
import AbouteMeInfo from "./AbouteMeInfo";

const data = [
  {
    title: "Sobre mi",
    details:
      "Soy un ciudadano Uruguayo, que nació y vive en la ciudad de San José. Con muchas ganas de  dar soluciones en temas laborales para seguir creciendo y aprendiendo como ser mejor profesional y persona."
  },
  {
    title:'Estudios',
    details: 'Cursos de Desarrollo Web realizados en Udemy & Bootcamp Full Stack brindado por Academlo en el cual aprendi todo lo necesario para mis primeros proyectos frontend como backend. Luego participé en proyecto emulacion en NoCountry por 5 semanas.'
  }
];

const AbouteMe = () => {
  return( 
    <div id="aboutme" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e] dark:text-gray-200">Sobre mi</h1>
        {
            data.map((item, idx) => (
                <AbouteMeInfo key={idx} title={item.title} details={item.details}/>
                
            ))
        }
        <ol className="flex-col md:flex-row relative mb-10 ml-4">
          <h3 className='inline-block px-2 py-1 font-semibold text-white bg-red-600 rounded-md text-xl'>Skills </h3>
          <p className='my-2 text-base font-normal text-stone-600 dark:text-gray-200'>Conocimientos en JavaScript dando soluciones a problemas dados. Gran manejo de Nextjs, React y sus librerias, Trabajos realizados cosumiendos APIs, amplios conocimientos de HTML, Css3, boostrap & Tailwind, tambien desde el Backend con NodeJs, Express, PostgreSql. Buen desempeño trabajando en equipo.</p>
        </ol>
    </div>
  )
};

export default AbouteMe;
