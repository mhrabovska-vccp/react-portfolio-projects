import React from 'react'
import { BiHomeSmile } from 'react-icons/bi'
import { TbPizza } from 'react-icons/tb'
import {AiOutlineQuestionCircle} from 'react-icons/ai'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white h-screen justify-center'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 items-center'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300  md:mt-0'>
                <BiHomeSmile size={60} className='mx-auto mt-[-3.5rem] bg-transparent' />
                <h2 className='text-2xl font-bold text-center py-8'> Homework </h2>
                <p className='text-center font-medium'> useState(), useEffect(), fetching data from API </p>
                <div className='flex justify-around items-center mt-6 '>
                    <a href="https://czechitas-homework-projects.netlify.app/">
                        <button className='bg-[#00df9a] w-[110px] rounded-md font-mdedium mx-autopx-6 py-3'> See </button>
                    </a>
                    <a href="https://github.com/mhrabovska-vccp/react-czechitas-projects" target="_blank"rel="noreferrer">
                        <button className='bg-[#00df9a] w-[110px] rounded-md font-mdedium mx-autopx-6 py-3'> GitHub </button>
                    </a>
                </div>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 mt-5 md:mt-0'>
                <TbPizza size={60} className='mx-auto mt-[-3.5rem] bg-transparent' />
                <h2 className='text-2xl font-bold text-center py-8'> Pizza ingredients </h2>
                <p className='text-center font-medium'> createRoot(), useContext(), lifting state up </p>
                <div className='flex justify-around items-center mt-6'>
                    <a href="https://pizza-ingredients-homework.netlify.app/">
                        <button className='bg-[#00df9a] w-[110px] rounded-md font-mdedium mx-autopx-6 py-3'> See </button>
                    </a>
                    <a href="https://github.com/marhra/react2-homework2-pizza-zadani" target="_blank"rel="noreferrer">
                        <button className='bg-[#00df9a] w-[110px] rounded-md font-mdedium mx-autopx-6 py-3'> GitHub </button>
                    </a>
                </div>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 mt-5 md:mt-0'>
                <AiOutlineQuestionCircle size={60} className='mx-auto mt-[-3.5rem] bg-transparent' />
                <h2 className='text-2xl font-bold text-center py-8'>Trivia Quiz</h2>
                <p className='text-center font-medium'> React Router, fetching data from API </p>
                <div className='flex justify-around items-center mt-6'>
                    <a href="https://react-trivia-quiz-czechitas.netlify.app/">
                        <button className='bg-[#00df9a] w-[110px] rounded-md font-mdedium mx-autopx-6 py-3'> See </button>
                    </a>
                    <a href="https://github.com/mhrabovska-vccp/react-trivia-quiz" target="_blank"rel="noreferrer">
                        <button className='bg-[#00df9a] w-[110px] rounded-md font-mdedium mx-autopx-6 py-3'> GitHub </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards