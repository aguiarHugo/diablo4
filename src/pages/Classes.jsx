import { useState } from "react";
import { motion } from "framer-motion";

import Navbar from '../components/Navbar';
import SocialMedia from "../components/SocialMedia";
import useMediaQuery from "../hooks/useMediaQuery";

import lilith from '../assets/lilith-no-bg.png'
import Barbarian from "../components/Barbarian";

const Classes = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const [selectedPage, setSelectedPage] = useState('classes')
  return (
    <section>
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage ={setSelectedPage}
      />
      <Barbarian />
    </section>
  )
}

export default Classes