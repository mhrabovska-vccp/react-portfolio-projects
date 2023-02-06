import React from 'react'

const Hero = () => {
  return (
    <div className='text-black'>
        <div className='max-w-[1000px] mt-[100px] mb-[50px] w-full mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>LEARNING OUTCOME</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 mb-3'>Czechitas ReactJS course</h1>
            <div>
                <p className='md:text-3xl sm:text-2xl text-xl font-bold'>JSX, React Components, Props, Lists, React Hooks, State, Routing, Life Cycle Methods, Forms, Fetch API, Styled-Components, Material UI, Tailwind CSS  </p>
            </div>
        </div>
    </div>
  )
}

export default Hero