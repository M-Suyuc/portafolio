import React, { useEffect, useState } from 'react'
import { CloseMenu, Home, Menu, Moon, Portfolio, Profile, Skills, Sun } from './SVGIcons'
import Container from '../componets/Container'

function Navbar ({ isVisible }) {
  const [isOpen, setIsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(undefined)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const changeDarkMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem('darkMode', 'true')
      window.document.documentElement.classList.add('dark')
    } else if (darkMode === false) {
      localStorage.setItem('darkMode', 'false')
      window.document.documentElement.classList.remove('dark')
    } else {
      setDarkMode(localStorage.getItem('darkMode') === 'true')
    }
  }, [darkMode])

  return (
    <Container>
      <nav className='flex justify-between items-center h-[3.5rem] md:h-[4.5rem]'>
        <a href='#' className='md:font-extrabold md:text-3xl text-xl font-extrabold logo'>Marlon</a>
        <div className={`fixed ${isOpen ? 'bottom-0 border-t border-solid border-white/20 md:border-none' : '-bottom-full'} left-0 w-full pt-8 pb-16 bg-white dark:bg-black rounded-t-3xl shadow-[5px_15px_60px_rgba(0,0,0,.5)] md:static  md:pt-0 md:pb-0 md:max-w-max ml-auto md:rounded-none md:shadow-none md:bg-transparent`}>
          <ul className='grid grid-cols-3 gap-8 md:flex md:gap-0'>
            <li><a href='#' onClick={toggleMenu} className='flex flex-col items-center font-medium dark:text-white/80 hover:text-[#006fee] dark:hover:text-[#006fee]  hover:fill-[#006fee] md:hover:bg-slate-500/25 md:dark:hover:bg-white/10 md:px-4 dark:hover:fill-[#006fee] md:text-lg dark:fill-white/80'><Home />Inicio</a></li>
            <li><a href='#about' onClick={toggleMenu} className='flex flex-col items-center font-medium dark:text-white/80 hover:text-[#006fee] dark:hover:text-[#006fee]  hover:fill-[#006fee] md:dark:hover:bg-white/10 md:px-4 dark:hover:fill-[#006fee] md:text-lg dark:fill-white/80 md:hover:bg-slate-500/25'><Profile />Sobre mí</a></li>
            <li><a href='#portfolio' onClick={toggleMenu} className='flex flex-col items-center font-medium dark:text-white/80 hover:text-[#006fee] dark:hover:text-[#006fee]   hover:fill-[#006fee] md:dark:hover:bg-white/10 md:px-4 dark:hover:fill-[#006fee] md:text-lg dark:fill-white/80 md:hover:bg-slate-500/25'><Portfolio />Portafolio</a></li>
            <li><a href='#skills' onClick={toggleMenu} className='flex flex-col items-center font-medium dark:text-white/80 hover:text-[#006fee] dark:hover:text-[#006fee]  hover:fill-[#006fee] md:dark:hover:bg-white/10 md:px-4 dark:hover:fill-[#006fee] md:text-lg dark:fill-white/80 md:hover:bg-slate-500/25'><Skills />Skills</a></li>
          </ul>
          <div className='absolute right-10 bottom-5 cursor-pointer dark:fill-white/80 hover:fill-[#006fee] dark:hover:fill-[#006fee]' onClick={toggleMenu}>
            <CloseMenu />
          </div>
        </div>
        <div className='flex gap-4 md:gap-0'>
          <div onClick={changeDarkMode} className={`cursor-pointer dark:fill-modeDarkTitle hover:fill-[#006fee] dark:hover:fill-[#006fee] ${isVisible && 'dark:fill-black'}`}>
            {darkMode ? <Sun /> : <Moon />}
          </div>
          <div onClick={toggleMenu} className='cursor-pointer dark:fill-modeDarkTitle hover:fill-[#006fee]  dark:hover:fill-[#006fee]'><Menu /></div>
        </div>
      </nav>
    </Container>
  )
}

export default Navbar
