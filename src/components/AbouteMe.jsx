import React from "react";
import AbouteMeInfo from "./AbouteMeInfo";

const data = [
  {
    title: "Sobre mi",
    details:
      "Soy un joven de 20 años, ciudadano de Uruguay, que nació y vive en la ciudad de San José. Con muchas ganas de  dar soluciones en temas laborales para seguir creciendo y aprendiendo."
  },
  {
    title:'Estudios',
    details: 'Cursos de Desarrollo Web realizados en Udemy & Bootcamp Full Stack brindado por Academlo en el cual aprendi todo lo necesario para mis primeros proyectos, tambien para crecer como profesional y persona.'
  },
  {
    title:'SKILLS',
    details: 'Conocimientos en JavaScript dando soluciones a problemas dados. Gran manejo de React y sus librerias, Trabajos realizados cosumiendos APIs, amplios conocimientos de HTML, Css3, boostrap & Tailwind.'
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
    </div>
  )
};

export default AbouteMe;
