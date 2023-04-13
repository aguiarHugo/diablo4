import { useState } from "react";
import Navbar from '../components/Navbar'
import { motion } from "framer-motion";

import lilith from '../assets/lilith-no-bg.png'
import SocialMedia from "../components/SocialMedia";

const About = () => {
  const [selectedPage, setSelectedPage] = useState('about')
  return (
    <>
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage ={setSelectedPage}
      />
      <motion.div
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true, amount: 0.3}}
       transition={{ duration: 0.7 }}
       variants={{ 
         hidden: { opacity:0, x:-60 },
         visible: { opacity:1, x:0 }
       }} 
        className='section-wrapper'>
              <h2 className="text-heading">
                Who are we?
              </h2> 
          <div class="grid grid-cols-2 grid-flow-row grid-auto-flow">
            <div class="row-start-1 row-end-1">
              <p>
                Welcome to our <span className="text-red-500 font-semibold">Diablo 4 game blog!</span> As avid gamers and fans of the
                Diablo series, we are excited to share our insights, news, and
                updates about Diablo 4 with fellow players like you.
              </p>
            </div>
            <div class="col-start-1 col-end-1">
              <p>
                Our blog covers <span className="text-red-500 font-semibold">all aspects of Diablo 4, including gameplay, story,
                characters, classes, items, and more.</span> We strive to provide
                comprehensive and up-to-date information about the game, along with
                our own analysis and opinions.
              </p>
            </div>
            <div class="col-start-1 col-end-1">
              <p>
                Our team of experienced players is passionate about the Diablo
                franchise and committed to delivering accurate and engaging content.
                Whether you are a seasoned Diablo player or new to the series, our
                <span className="text-red-500 font-semibold"> blog aims to be a valuable resource for all things Diablo 4.</span>
              </p>
            </div>
            <div class="text-center row-start-1 row-end-4">
              <img  className="h-[300px]" src={lilith} alt="" />
            </div>
          </div>
          <SocialMedia />
        </motion.div>
    </>
  )
}

export default About