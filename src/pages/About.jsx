import { useState } from "react";
import { motion } from "framer-motion";

import Navbar from '../components/Navbar';
import SocialMedia from "../components/SocialMedia";
import useMediaQuery from "../hooks/useMediaQuery";

import lilith from '../assets/lilith-no-bg.png'
import Footer from "../components/Footer";

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
            transition={{ duration: 0.5 }}
            variants={{ 
              hidden: { opacity:0, x:-50 },
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
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3}}
                transition={{ duration: 0.5 }}
                variants={{ 
                  hidden: { opacity:0, x:-50 },
                  visible: { opacity:1, x:0 }
                }} 
                className="flex flex-col gap-3"
              >
                  <h2 className="text-heading">
                    Diablo 4
                  </h2>
                  <p>
                    The highly anticipated action role-playing game (ARPG) developed by Blizzard 
                    Entertainment, promises to deliver an epic and immersive gaming experience that
                    will captivate fans of the Diablo franchise and newcomers alike. Set in a dark 
                    and brutal world, Diablo 4 takes players on a journey of treacherous quests, 
                    challenging combat, and gripping storytelling as they battle against the forces 
                    of evil.
                  </p>
                  <p>
                    One of the most exciting aspects of Diablo 4 is its return to the series' 
                    dark and gothic roots. The game's atmospheric and foreboding world is brought to 
                    life with stunning visuals, featuring detailed environments, menacing creatures, 
                    and visceral combat animations. The game's graphics and art style create a haunting
                  and immersive atmosphere that draws players into a grim and unforgiving world 
                  where danger lurks around every corner.
                  </p>
                  <p>
                    Players can choose from a diverse cast of iconic classes, including the barbarian, 
                    sorceress, druid and necromancer, each with their unique playstyle, abilities, and 
                    customization options. Whether unleashing devastating melee attacks as a hulking 
                    barbarian, wielding powerful arcane spells as a cunning sorceress, or harnessing 
                    the raw power of nature as a shapeshifting druid, players can tailor their 
                    character to their preferred playstyle and embark on a thrilling adventure filled
                  with challenges and rewards.
                  </p>
                  <p>
                    Diablo 4's gameplay is fast-paced and action-packed, featuring intense combat 
                    against hordes of demonic enemies that require skillful dodging, strategic use of 
                    abilities, and clever positioning. Players will venture through diverse and 
                    sprawling environments, from dark dungeons to haunted forests to desolate 
                    wastelands, as they uncover the deep lore and unravel the mysteries of the Diablo 
                    universe. Along the way, they will encounter formidable bosses, solve challenging 
                    puzzles, and face off against other players in competitive player-vs-player (PvP) 
                    battles.
                  </p>
                  <p>
                    The game also introduces a new open-world concept, allowing players to explore a 
                    vast and interconnected world filled with hidden secrets, dynamic events, and 
                    dungeons to discover. Players can team up with friends or other players in online 
                    multiplayer mode, forming parties to tackle challenging quests and dungeons 
                    together, or engaging in thrilling PvP battles for glory and rewards.
                  </p>
                  <p>
                    As with previous Diablo games, loot plays a crucial role in Diablo 4's gameplay. Players 
                    will collect a wide array of weapons, armor, and other valuable items, including rare and 
                    legendary gear, to enhance their character's power and effectiveness in battle. The game's
                    deep and flexible itemization system allows for endless possibilities in creating 
                    powerful builds and playstyles, providing players with the motivation to 
                    continuously explore, experiment, and optimize their character's gear.
                  </p>
                  <p>
                    In addition to its engaging gameplay, Diablo 4 promises a rich and immersive story 
                    that delves deeper into the lore and mythology of the Diablo universe. Players will
                    uncover the dark history of Sanctuary, confront ancient evils, and make critical 
                    choices that will shape the world and its inhabitants. The game's compelling 
                    narrative, combined with its atmospheric world and memorable characters, will 
                    draw players into an epic and emotionally resonant adventure.
                  </p>
                  <p>
                  In conclusion, Diablo 4 is shaping up to be a monumental addition to the beloved 
                  Diablo franchise. With its return to the series' dark and gothic roots, intense 
                  gameplay, open-world exploration, deep itemization system, and compelling story, 
                  Diablo 4 is poised to deliver an unforgettable ARPG experience that will thrill 
                  and captivate players for years to come. Prepare to descend into the depths of hell
                  once again and face the ultimate battle against darkness in Diablo 4.
                  </p>
                </motion.div>
              </motion.div>
              
          <div>
            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3}}
              transition={{ ease: "easeOut", duration: 1 }}
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
                transition={{ ease: "easeOut", duration: 1 }}
                variants={{ 
                  hidden: { opacity:0 },
                  visible: { opacity:1 }
                }}
                src={lilith} alt="Lilith" />
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1}}
              transition={{ duration: 0.5 }}
              variants={{ 
                hidden: { opacity:0, x:-50 },
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
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2}}
              transition={{ duration: 0.5 }}
              variants={{ 
                hidden: { opacity:0, x:-50 },
                visible: { opacity:1, x:0 }
              }} 
              className="flex flex-col gap-3"
            >
            <h2 className="text-heading">
              Diablo 4
            </h2>
            <p>
              The highly anticipated action role-playing game (ARPG) developed by Blizzard 
              Entertainment, promises to deliver an epic and immersive gaming experience that
              will captivate fans of the Diablo franchise and newcomers alike. Set in a dark 
              and brutal world, Diablo 4 takes players on a journey of treacherous quests, 
              challenging combat, and gripping storytelling as they battle against the forces 
              of evil.
            </p>
            <p>
              One of the most exciting aspects of Diablo 4 is its return to the series' 
              dark and gothic roots. The game's atmospheric and foreboding world is brought to 
              life with stunning visuals, featuring detailed environments, menacing creatures, 
              and visceral combat animations. The game's graphics and art style create a haunting
             and immersive atmosphere that draws players into a grim and unforgiving world 
             where danger lurks around every corner.
            </p>
            <p>
              Players can choose from a diverse cast of iconic classes, including the barbarian, 
              sorceress, druid and necromancer, each with their unique playstyle, abilities, and 
              customization options. Whether unleashing devastating melee attacks as a hulking 
              barbarian, wielding powerful arcane spells as a cunning sorceress, or harnessing 
              the raw power of nature as a shapeshifting druid, players can tailor their 
              character to their preferred playstyle and embark on a thrilling adventure filled
             with challenges and rewards.
            </p>
            <p>
              Diablo 4's gameplay is fast-paced and action-packed, featuring intense combat 
              against hordes of demonic enemies that require skillful dodging, strategic use of 
              abilities, and clever positioning. Players will venture through diverse and 
              sprawling environments, from dark dungeons to haunted forests to desolate 
              wastelands, as they uncover the deep lore and unravel the mysteries of the Diablo 
              universe. Along the way, they will encounter formidable bosses, solve challenging 
              puzzles, and face off against other players in competitive player-vs-player (PvP) 
              battles.
            </p>
            <p>
              The game also introduces a new open-world concept, allowing players to explore a 
              vast and interconnected world filled with hidden secrets, dynamic events, and 
              dungeons to discover. Players can team up with friends or other players in online 
              multiplayer mode, forming parties to tackle challenging quests and dungeons 
              together, or engaging in thrilling PvP battles for glory and rewards.
            </p>
            <p>
              As with previous Diablo games, loot plays a crucial role in Diablo 4's gameplay. Players 
              will collect a wide array of weapons, armor, and other valuable items, including rare and 
              legendary gear, to enhance their character's power and effectiveness in battle. The game's
              deep and flexible itemization system allows for endless possibilities in creating 
              powerful builds and playstyles, providing players with the motivation to 
              continuously explore, experiment, and optimize their character's gear.
            </p>
            <p>
              In addition to its engaging gameplay, Diablo 4 promises a rich and immersive story 
              that delves deeper into the lore and mythology of the Diablo universe. Players will
              uncover the dark history of Sanctuary, confront ancient evils, and make critical 
              choices that will shape the world and its inhabitants. The game's compelling 
              narrative, combined with its atmospheric world and memorable characters, will 
              draw players into an epic and emotionally resonant adventure.
            </p>
            <p>
            In conclusion, Diablo 4 is shaping up to be a monumental addition to the beloved 
            Diablo franchise. With its return to the series' dark and gothic roots, intense 
            gameplay, open-world exploration, deep itemization system, and compelling story, 
            Diablo 4 is poised to deliver an unforgettable ARPG experience that will thrill 
            and captivate players for years to come. Prepare to descend into the depths of hell
            once again and face the ultimate battle against darkness in Diablo 4.
            </p>
            </motion.div>
          </motion.div>
        </>
        )} 
        </div>
        <div className="mt-32 pb-1" />
        <Footer />
    </section>
  )
}

export default About