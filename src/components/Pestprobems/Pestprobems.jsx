import React from 'react'
import './pestproblems.css'
import spider from '../../assets/images/tarantula.png'
import rodent from '../../assets/images/rodent.png'
import ant from '../../assets/images/ant.png'
import termites from '../../assets/images/termite.png'
import mosquitos from '../../assets/images/mosquito.png'
import { useNavigate } from 'react-router-dom'



export default function Pestprobems() {
  const navigate = useNavigate()

  const handleProblemRouting = (issue) =>{
    navigate(`/problems/${issue}`)

  }
  return (
    <div className='my-4 bg-[#f3f5f6] md:px-12 p-4 max-w-screen-2xl mx-auto'>
        <div>
            <div className='md:text-center'>
                <h1 className='md:text-6xl text-4xl font-bold text-primary mb-2 leading-relaxed custom-underline'>Pest problems</h1>
                <p className='text-primary-200 text-xl mb-8 mt-2'>Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className='icons-div md:flex flex-wrap justify-evenly '>
                <div className="card w-46 flex flex-col items-center custom-icon-border-width  border-white hover:border-[#9A7AF1] rounded-full bottom-3 p-4 hover:cursor-pointer my-6"  onClick={()=>handleProblemRouting('spiders')}>
                <img src = {spider} className='w-24 h-24'/>
                <p className='text-xl font-semibold hover:text-secondary '>Spiders</p>
                </div>

                <div className="card w-46 flex flex-col items-center custom-icon-border-width border-white bottom-3 hover:border-[#9A7AF1] rounded-full p-4 hover:cursor-pointer my-6"  onClick={()=>handleProblemRouting('rodents')}>
                <img src = {rodent} className='w-24 h-24'/>
                <p className='text-xl font-semibold hover:text-secondary '>Rodents</p>
                </div>

                <div className="card w-46 flex flex-col items-center custom-icon-border-width border-white bottom-3 hover:border-[#9A7AF1] rounded-full p-4 hover:cursor-pointer my-6"  onClick={()=>handleProblemRouting('ants')}>
                <img src = {ant} className='w-24 h-24'/>
                <p className='text-xl font-semibold hover:text-secondary '>Ants</p>
                </div>

                <div className="card w-46 flex flex-col items-center custom-icon-border-width border-white bottom-3 hover:border-[#9A7AF1] rounded-full p-4 hover:cursor-pointer my-6" onClick={()=>handleProblemRouting('termites')}>
                <img src = {termites} className='w-24 h-24'/>
                <p className='text-xl font-semibold hover:text-secondary '>Termites</p>
                </div>

                <div className="card w-46 flex flex-col items-center custom-icon-border-width border-white bottom-3 hover:border-[#9A7AF1] rounded-full p-4 hover:cursor-pointer my-6"  onClick={()=>handleProblemRouting('mosquitoes')}>
                <img src = {mosquitos} className='w-24 h-24'/>
                <p className='text-xl font-semibold hover:text-secondary '>Mosquitos</p>
                </div>

            </div>
            

        </div>

    </div>
  )
}
