import React from 'react'

const ProjectsItems = ({img, title, href, linkGit}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200'>
    <img src={img} alt="/" className='rounded/xl group-hover:opacity-10' />
    <div className='hidden group-hover:block absolute top-[50%] transalte-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl font-bold text-yellow-400 tracking-wider text-center'>
            {title}
        </h3>
        <a href={href} target='blank'>
        <p className='text-center p-3 rounded-ld text-gray-700 font-bold cursor-pointer text-lg'>Link a web</p>
        </a>
        <a href={linkGit} target='blank'>
        <p className='text-center p-3 rounded-ld text-gray-700 font-bold cursor-pointer text-lg'>Link a GitHub</p>
        </a> 
    </div>
    </div>
  )
}

export default ProjectsItems
