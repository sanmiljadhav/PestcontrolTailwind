import React from 'react'
import worker from '../../assets/images/worker.png'
import idea from '../../assets/images/idea.png'
import service from '../../assets/images/service.png'
import money from '../../assets/images/money.png'
import money2 from '../../assets/images/money-two.png'
import './whuchooseus.css'
import pestControlImgTwo from '../../assets/images/pest-clean-services-two.jpg'
import Numbering from '../Numbering/Numbering'


export default function Whychooseus() {
  return (
    <div className='max-w-screen-2xl mx-auto my-10 '>
        <div className='why-choose-us-header'>

       
        <div className='text-center my-10'>
        <h1 className='md:text-4xl text-2xl text-center font-semibold'>About Us</h1>
        <p className='text-slate-700 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo architecto, natus at voluptate numquam pariatur provident. Eligendi, harum. Nostrum, incidunt.</p>
        </div>
        
        <img src= {pestControlImgTwo} className='about-us-main-img'/>

        <div className='content my-12'>
            <div className='px-14 flex flex-col md:flex-row justify-between'>

                <div className='about-content-one flex-1'>
                <p className='text-slate-700 text-xl'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum autem dicta reiciendis quas asperiores laboriosam ratione nisi illo quam ullam necessitatibus, magnam omnis unde id mollitia voluptatum et. Reiciendis, obcaecati est atque in odio debitis pariatur quis earum dicta temporibus dolore doloribus nobis rerum officiis distinctio itaque. Non pariatur culpa odio vitae iure repellendus quaerat laudantium ducimus a architecto sequi dicta recusandae, eius assumenda veritatis sint! Quaerat totam, repellendus eaque placeat labore odit eligendi quasi voluptates autem magnam reiciendis necessitatibus dolore, optio vero corrupti aspernatur, distinctio iste molestiae quibusdam enim nobis quod molestias magni! Consectetur eaque omnis culpa maiores architecto.
               </p>
               </div>

                <div className='about-content-two flex-1'>
                <p className='text-slate-700 text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Odit temporibus illum id repellendus dignissimos minus aspernatur 
                voluptatem at explicabo soluta eveniet dolorem deleniti voluptas iure 
                assumenda aperiam nulla autem deserunt perspiciatis tenetur quos, facere 
                fuga. Cum ad sit dolorem et unde voluptatem tempore, rerum ipsam quam aliquam pariatur expedita 
                delectus, omnis voluptatum sed? Fugit?</p>


                </div>
                
                
                

            </div>
        </div>
        </div>

        <Numbering/>

        <h1 className='md:text-4xl text-2xl text-center my-5 font-semibold'>Why Choose Us ?</h1>
        <div className='cards-container grid lg:grid-cols-4 md:grid-cols-2 gap-20 px-14'>
            <div className='why-choose-us-card text-center shadow-lg'>
                <img src={worker} className='pl-20 pr-20 my-4' />
                <h1 className='text-2xl font-semibold py-2'>Professional Work</h1>
                <p className='text-slate-700 py-2 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nostrum doloribus culpa nihil perspiciatis, velit modi maxime libero eos saepe.</p>
            </div>

            <div className='why-choose-us-card text-center shadow-lg'>
                <img src={service} className='pl-20 pr-20 my-4' />
                <h1 className='text-2xl font-semibold py-2'>Best Services</h1>
                <p className='text-slate-700 text-xl py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nostrum doloribus culpa nihil perspiciatis, velit modi maxime libero eos saepe.</p>
            </div>

            <div className='why-choose-us-card text-center shadow-lg'>
                <img src={idea} className='pl-20 pr-20 my-4' />
                <h1 className='text-2xl font-semibold py-2'>Best Solution</h1>
                <p className='text-slate-700 py-2 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nostrum doloribus culpa nihil perspiciatis, velit modi maxime libero eos saepe.</p>
            </div>

            <div className='why-choose-us-card text-center shadow-lg'>
                <img src={money} className='pl-20 pr-20 my-4' />
                <h1 className='text-2xl font-semibold py-2'>Reasonable Rates</h1>
                <p className='text-slate-700 py-2 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nostrum doloribus culpa nihil perspiciatis, velit modi maxime libero eos saepe.</p>
            </div>

        </div>

    </div>
  )
}
