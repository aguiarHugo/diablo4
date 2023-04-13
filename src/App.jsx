import { useState, useEffect } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
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
    <div className="app">
      <Navbar
       isTopOfPage={isTopOfPage}
       selectedPage={selectedPage}
       setSelectedPage ={setSelectedPage}
      />
      <Home />
    </div>
  )
}

export default App
