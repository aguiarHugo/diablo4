import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import useMediaQuery from "../hooks/useMediaQuery";
import Navbar from "../components/Navbar";
import SocialMedia from "../components/SocialMedia";
import Footer from "../components/Footer";

const Home = () => {
  const [selectedPage, setSelectedPage] = useState('home')
  const [isTopOfPage, setIsTopOfPage] = useState(true)

  return (
    <section>
      <Navbar
       isTopOfPage={isTopOfPage}
       selectedPage={selectedPage}
       setSelectedPage ={setSelectedPage}
      />
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center pt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3}}
          transition={{ duration: 0.7 }}
          variants={{ 
            hidden: { opacity:0, x:-60 },
            visible: { opacity:1, x:0 }
          }} 
          className=" flex flex-col justify-center items-center h-screen max-h-[667px] ml-3"
        >
          <h1 className="font-semibold text-red-500 text-6xl md:text-7xl">FROM PLAYERS <span className="text-white">FOR PLAYERS</span></h1>
          <p className="text-[16px] md:text-3xl mt-2 mr-2">Everything you need to know about <span className="text-red-500 font-bold">Diablo 4</span> is here!</p>
          <SocialMedia />
        </motion.div>
      </div>
      <Footer />
    </section>
  )
}

export default Home