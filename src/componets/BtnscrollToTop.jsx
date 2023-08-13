import { useEffect, useState } from 'react'
import { ArrowUp } from './SVGIcons'

function BtnscrollToTop () {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    isVisible && (
      <button
        className='fixed -z-10 bottom-16 md:bottom-4 right-4 button  px-1 py-1 rounded' onClick={scrollToTop}
      >
        <ArrowUp />
      </button>
    )
  )
}

export default BtnscrollToTop
