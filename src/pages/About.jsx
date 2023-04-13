import { useState } from "react";
import { motion } from "framer-motion";

import Navbar from '../components/Navbar';
import SocialMedia from "../components/SocialMedia";
import useMediaQuery from "../hooks/useMediaQuery";

import lilith from '../assets/lilith-no-bg.png'

const About = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const [selectedPage, setSelectedPage] = useState('about')
  return (
    <section>
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage ={setSelectedPage}
      />
      <div className='section-wrapper flex flex-col md:flex-row'>
        { isAboveMediumScreens ? (
          <>
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3}}
            transition={{ duration: 0.7 }}
            variants={{ 
              hidden: { opacity:0, x:-60 },
              visible: { opacity:1, x:0 }
            }} 
              className="flex flex-col gap-3"
            >
              <h2 className="text-heading">
                D4Fan
              </h2> 
              <p>
                Welcome to our <span className="text-red-500 font-semibold">Diablo 4 game blog!</span> As avid gamers and fans of the
                Diablo series, we are excited to share our insights, news, and
                updates about Diablo 4 with fellow players like you.
              </p>
              <p>
                Our blog covers <span className="text-red-500 font-semibold">all aspects of Diablo 4, including gameplay, story,
                characters, classes, items, and more.</span> We strive to provide
                comprehensive and up-to-date information about the game, along with
                our own analysis and opinions.
              </p>
              <p>
                Our team of experienced players is passionate about the Diablo
                franchise and committed to delivering accurate and engaging content.
                Whether you are a seasoned Diablo player or new to the series, our
                <span className="text-red-500 font-semibold"> blog aims to be a valuable resource for all things 
                Diablo 4.</span>
              </p>
              <SocialMedia />
            </motion.div>
          <div>
            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3}}
              transition={{ ease: "easeOut", duration: 2 }}
              variants={{ 
                hidden: { opacity:0 },
                visible: { opacity:1 }
              }}
              src={lilith} alt="Lilith" />
          </div>
          </>
           ) : (
          <>
            <div>
              <motion.img
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3}}
                transition={{ ease: "easeOut", duration: 2 }}
                variants={{ 
                  hidden: { opacity:0 },
                  visible: { opacity:1 }
                }}
                src={lilith} alt="Lilith" />
            </div>
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3}}
            transition={{ duration: 0.7 }}
            variants={{ 
              hidden: { opacity:0, x:-60 },
              visible: { opacity:1, x:0 }
            }} 
            className="flex flex-col gap-3">
            <h2 className="text-heading">
              D4Fan
            </h2> 
            <p>
              Welcome to our <span className="text-red-500 font-semibold">Diablo 4 game blog!</span> As avid gamers and fans of the
              Diablo series, we are excited to share our insights, news, and
              updates about Diablo 4 with fellow players like you.
            </p>
            <p>
              Our blog covers <span className="text-red-500 font-semibold">all aspects of Diablo 4, including gameplay, story,
              characters, classes, items, and more.</span> We strive to provide
              comprehensive and up-to-date information about the game, along with
              our own analysis and opinions.
            </p>
            <p>
              Our team of experienced players is passionate about the Diablo
              franchise and committed to delivering accurate and engaging content.
              Whether you are a seasoned Diablo player or new to the series, our
              <span className="text-red-500 font-semibold"> blog aims to be a valuable resource for all things 
              Diablo 4.</span>
            </p>
            <SocialMedia />
          </motion.div>
        </>
        )} 
        </div>
    </section>
  )
}

export default About