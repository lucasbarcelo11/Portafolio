
import AbouteMeInfo from "./AbouteMeInfo";

const data = [
  {
    title: "Sobre mi",
    details:
      "Más de 2 años de experiencia en desarrollo de software. He creado sitios web para empresas y proyectos personales, asegurando soluciones funcionales y atractivas. Como profesor, he formado a personas que buscan ingresar al mundo de la programación, facilitando su aprendizaje con metodologías prácticas y aplicadas."
  },
  {
    title:'Estudios',
    details: 'He completado cursos de Desarrollo Web en Udemy y un Bootcamp Full Stack ofrecido por Academlo, donde adquirí las habilidades necesarias para llevar a cabo mis primeros proyectos tanto en el frontend como en el backend. Posteriormente, tuve la oportunidad de participar en un proyecto de simulación en NoCountry durante 5 semanas, colaborando en equipo con profesionales de diversos países y horarios.'
  }
];

const AbouteMe = () => {
  return( 
    <div id="aboutme" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h2 className="text-4xl font-bold text-center text-[#001b5e] dark:text-gray-200">Sobre mi</h2>
        {
            data.map((item, idx) => (
                <AbouteMeInfo key={idx} title={item.title} details={item.details}/>
                
            ))
        }
        <ol className="flex-col md:flex-row relative mb-10 ml-4 ">
          <h3 className='inline-block px-2 py-1 font-semibold text-white bg-red-600 rounded-md text-xl'>Skills </h3>
          <p className='my-2 text-base font-normal text-stone-600 dark:text-gray-200'>Poseo experiencia sólida en JavaScript, ofreciendo soluciones efectivas a diversos problemas. Cuento con un amplio dominio de Next.js, React y sus respectivas bibliotecas, así como experiencia en proyectos que implican consumo de APIs. Además, tengo conocimientos profundos en HTML5, CSS3, Bootstrap y Tailwind. En el ámbito del backend, tengo experiencia con Node.js, Express y PostgreSQL. Me destaco por mi habilidad para trabajar de manera efectiva en equipos colaborativos.





</p>
        </ol>
    </div>
  )
};

export default AbouteMe;
