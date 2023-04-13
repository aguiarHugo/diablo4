import { useState, useEffect } from "react";
import useMediaQuery from "../hooks/useMediaQuery";

import Navbar from "../components/Navbar"
import SocialMedia from "../components/SocialMedia"

const Home = () => {
  const [selectedPage, setSelectedPage] = useState('home')
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const [isTopOfPage, setIsTopOfPage] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true)
      if(window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () =>   window.removeEventListener('scroll', handleScroll) 
  }, [])

  return (
    <section>
      <Navbar
       isTopOfPage={isTopOfPage}
       selectedPage={selectedPage}
       setSelectedPage ={setSelectedPage}
      />
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center pt-32">
        <div className=" flex flex-col justify-center items-center h-screen max-h-[667px] ml-3">
          <h1 className="font-semibold text-red-500 text-6xl md:text-7xl">FROM PLAYERS <span className="text-white">FOR PLAYERS</span></h1>
          <p className="text-[16px] md:text-3xl mt-2 mr-2">Everything you need to know about <span className="text-red-500 font-bold">Diablo 4</span> is here!</p>
          <SocialMedia />
        </div>
      </div>
    </section>
  )
}

export default Home