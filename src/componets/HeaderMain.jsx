import React from 'react'
import { ArrowDown, Contactme, Github, Linkedin } from './SVGIcons'
import profile from '../assets/img-profile.jpg'

function HeaderMain () {
  return (
    <section className='relative min-h-[calc(100vh-3rem)] md:min-h-screen flex items-center'>
      <div className='grid grid-cols-[.5fr, 3fr] items-center overflow-hidden md:grid-cols-[max-content,1fr,1fr] z-30'>

        {/* icons */}
        <div className='flex flex-col gap-y-4'>
          <a href='https://www.linkedin.com/in/marlon-suyuc/' target='_blank' aria-label='linkedin' className='w-8 h-8 fill-gray-800 hover:fill-[#006fee] dark:fill-slate-200 dark:hover:fill-[#006fee]' rel='noreferrer'><Linkedin /></a>
          <a href='https://github.com/M-Suyuc/' target='_blank' aria-label='Github' className='w-8 h-8 fill-gray-800 hover:fill-[#006fee] dark:fill-slate-200 dark:hover:fill-[#006fee]' rel='noreferrer'><Github /></a>
        </div>

        {/* img */}
        <div className='relative w-[180px] h-[180px] my-10 mb-5 md:m-12 md:place-self-center lg:place-self-end rounded-full overflow-hidden  md:order-1 md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] max-w-[300px]  shadow-[0px_0px_25px_rgba(0,0,0,.3)] dark:shadow-[0px_0px_40px_rgba(255,255,255,.4)]'>
          <img className='object-cover w-full h-full' src={profile} alt='Imagen perfil' />
        </div>

        {/* Text */}
        <div className='col-[1/3] pb-4 md:pt-0 md:pb-0 md:col-[initial] md:ml-4 lg:ml-12'>
          <h1 className='font-semibold text-xl md:text-xl lg:text-2xl md:font-bold text-zinc-700 pb-1 dark:text-modeDarkTitle'>Hola, Soy Marlon</h1>
          <h3 className='box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 font-medium text-lg md:text-xl lg:text-3xl lg:font-bold  bg-black text-white inline-block px-2 py-2  mb-1'>Frontend Developer</h3>
          <p className='text-zinc-700 pb-3 dark:text-modeDarkParrafo'>Creando soluciones modernas e interactivas. Comprometido con la seguridad y la mejora continua.</p>
          <a href='mailto:marlonsuyuc@gmail.com' className='button ml-1 md:ml-0'>Contactame <Contactme hidden={false} />
          </a>
        </div>
      </div>
      <a href='#about' aria-label='scrool' className='hidden absolute bottom-0 left-[50%] right-[50%] md:inline animate-bounce w-8 h-8 fill-white/90 bg-white/10'><ArrowDown /></a>
    </section>
  )
}

export default HeaderMain
