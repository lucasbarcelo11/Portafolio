import React from 'react'
import './ProjectsItems' 
import ProjectsItems from './ProjectsItems'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Proyectos</h1>
      <p className='text-center py-8'>Proyectos realizados con JavaScript, html5, css3, React y sus librerias, Boostrap & Tailwind</p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectsItems img={'/ecommerce.png'} title='e-commerce con React' href={'https://ecommercelucasbarcelo.netlify.app/'} linkGit={'https://github.com/lucasbarcelo11/e-commerce'}/>
        <ProjectsItems img={'/Clima.png'} title='App Clima' href={'https://weather-projectoacademlo.netlify.app/'} linkGit={'https://github.com/lucasbarcelo11/weather-project'}/>
        <ProjectsItems img={'/e-commerceAcademlo.png'} title='e-commerce JavaScript' href={'https://carrito-g27-lucasygustavo.netlify.app/'} linkGit={'https://github.com/lucasbarcelo11/carg27'}/>
        <ProjectsItems img={'/pokedex.png'} title='Pokedex' href={'https://lucaspokemonacademlo.netlify.app/'} linkGit={'https://github.com/lucasbarcelo11/Pokemon'}/>
        <ProjectsItems img={'/RickAndMorty.png'} title='Rick & Morty' href={'https://rickandmortylucasbarcelo.netlify.app/'} linkGit={'https://github.com/lucasbarcelo11/RickAndMortyProject'}/>
        <ProjectsItems img={'/galletasuerte.png'} title='Galleta de la suerte' href={'https://galleta-fortunacademlo.netlify.app/'} linkGit={'https://github.com/lucasbarcelo11/Galleta-De-Fortuna'}/>
        <ProjectsItems img={'/Formulario.png'} title='Formulario' href={'https://users-card-lucasbarcelo.netlify.app/'} linkGit={'https://github.com/lucasbarcelo11/Crud-Users'}/>

      </div>
    </div>
  )
}

export default Projects
