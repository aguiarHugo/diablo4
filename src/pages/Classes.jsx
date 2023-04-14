import { useState } from "react";
import { motion } from "framer-motion";

import Navbar from '../components/Navbar';
import SocialMedia from "../components/SocialMedia";
import useMediaQuery from "../hooks/useMediaQuery";

import lilith from '../assets/lilith-no-bg.png'
import Barbarian from "../components/Barbarian";
import Sorceress from "../components/Sorceress";

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
      <Sorceress />
    </section>
  )
}

export default Classes