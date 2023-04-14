import { useState } from "react";
import { motion } from "framer-motion";

import Navbar from '../components/Navbar';
import SocialMedia from "../components/SocialMedia";
import useMediaQuery from "../hooks/useMediaQuery";

import Barbarian from "../components/GameClasses/Barbarian";
import Sorceress from "../components/GameClasses/Sorceress";
import Druid from "../components/GameClasses/Druid";
import Rogue from "../components/GameClasses/Rogue";
import Necromancer from "../components/GameClasses/Necromancer";
import Footer from "../components/Footer";

const Classes = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const [selectedPage, setSelectedPage] = useState('classes')
  return (
    <section>
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage ={setSelectedPage}
      />
      <h1 className="mt-40 text-center text-heading">Classes</h1>
      <p className="text-center">Diablo 4 is an exciting new game that will feature five classes upon its release. These classes are:</p>
      <Barbarian />
      <Sorceress />
      <Druid />
      <Rogue />
      <Necromancer />
      <div className="mt-4" />
      <Footer />
    </section>
  )
}

export default Classes