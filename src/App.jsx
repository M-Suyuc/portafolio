import Container from './componets/Container'
import { useEffect, useState } from 'react'
import Nabvar from './componets/Navbar'
import Footer from './componets/Footer'
import AboutMe from './componets/AboutMe'
import BtnscrollToTop from './componets/BtnscrollToTop'
import HeaderMain from './componets/HeaderMain'
import Potafolio from './componets/Potafolio'
import Skills from './componets/Skills'
import pattern from './assets/looper-pattern.svg'

function App () {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 75) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <header className={`fixed z-40 bottom-0 left-0 w-full gap-x-4 md:top-0 md:bottom-[initial] bg-white  ${isVisible ? 'md:bg-white dark:bg-black md:dark:text-white' : 'md:bg-opacity-0 md:backdrop-blur-[4px] dark:text-slate-200 dark:bg-black md:dark:bg-transparent border-t border-solid border-white/10 md:border-none '}`}>
        <Nabvar isVisible={isVisible} />
        <BtnscrollToTop isVisible={isVisible} />
      </header>
      <main className='relative bg-slate-50 dark:bg-black w-full overflow-hidden'>
        {/* circulo azul del inicio */}
        <div className='absolute scale-150 rounded-full bg-blue-gradient-radial w-96 h-96 top-0 left-0 opacity-20 z-0' />
        
        <div style={{ backgroundImage: `url(${pattern})` }} className='absolute w-full  h-[calc(100vh_-_0rem)] -top-0 left-0 md:left-28 bg-cover' />
        <Container>
          <HeaderMain />
          <AboutMe />
          <Potafolio />
          <Skills />
        </Container>
      </main>
      <Footer />
    </>
  )
}
export default App
