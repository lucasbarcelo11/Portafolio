import React from 'react'

const AbouteMeInfo = ({title, details}) => {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-stone-200 '>
      <li className='mb-10 ml-4 dark:text-gray-200'>
        <p className='flex flex-wrap flex-row text-xs md:text-sm'>
            <span className='inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md'>{title}</span>
        </p>
        <p>
            <span className='my-2 text-base font-normal text-stone-600 dark:text-gray-200'>{details}</span>
        </p>
      </li>
    </ol>
  )
}

export default AbouteMeInfo
