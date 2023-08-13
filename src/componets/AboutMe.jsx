import { Download } from './SVGIcons'
import profile from '../assets/img-profile.jpg'

function AboutMe () {
  return (
    <section id='about' className='pt-8 md:pt-[4.5rem] pb-16'>
      <h3 className='title-section'>Sobre Mi</h3>
      <div className='grid grid-cols-[.5fr 3fr] justify-center md:grid-cols-[1fr,2fr]  gap-4 md:gap-10'>
        <div className='flex flex-col gap-4 order-1'>
          <div className='dark:text-[#a1a1aa] text-[#11181C]'>
            Soy Marlon, un apasionado desarrollador web autodidacta de 22 años, dedicado a crear experiencias digitales únicas y funcionales.
            <br />
            <br />
            Con una mentalidad enfocada en el aprendizaje constante, busco enfrentar desafíos y superar expectativas en cada proyecto que emprendo.
          </div>
          <a href='#' className='button mx-auto md:ml-0'>Descagar cv <Download /> </a>
        </div>
        <div className='group relative my-4 mx-auto w-[180px] h-[180px] md:w-[220px] md:h-[235px] z-30 '>
          <img className='relative w-full h-full object-cover z-20 rounded-sm overflow-hidden' src={profile} alt='img profile' />
          <div className='bg-blue-800/40 hover:bg-white/10 w-full h-full absolute top-0 left-0 z-50'></div>
          <div className="absolute inset-0 content[''] -top-2 -left-2 z-10 w-[100%] h-[100%] border-[3px] border-slate-300 dark:border-[#006fee] rounded-sm" />
        </div>
      </div>
    </section>
  )
}

export default AboutMe
