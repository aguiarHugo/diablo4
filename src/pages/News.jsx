import { useState } from "react";
import { motion } from "framer-motion";

import Navbar from '../components/Navbar';
import useMediaQuery from "../hooks/useMediaQuery";
import Footer from "../components/Footer";

const News = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const [selectedPage, setSelectedPage] = useState('news')
  return (
    <section>
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage ={setSelectedPage}
      />
      <div className="h-screen">
      <h1 className="mt-40 text-center text-heading">News</h1>
      </div>
      
      
      <div className="mt-4" />
      <Footer />
    </section>
  )
}

export default News