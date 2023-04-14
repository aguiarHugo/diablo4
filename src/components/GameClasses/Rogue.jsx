import React from 'react'
import useMediaQuery from '../../hooks/useMediaQuery';
import { motion } from 'framer-motion';

import rogue from '../../assets/rogue.png'

const Rogue = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div className='section-wrapper flex flex-col items-center md:flex-row'>
        { isAboveMediumScreens ? (
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
              src={rogue} alt="Rogue"
              className='rounded- w-[600px] h-[500px] mt-4 rounded-md border-4 border-solid border-red-600'
            />
          </div>
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3}}
                transition={{ duration: 0.5 }}
                variants={{ 
                  hidden: { opacity:0, x:-50 },
                  visible: { opacity:1, x:0 }
                }} 
                  className="flex flex-col gap-3 max-w-[800px] pl-8"
                >
                  <h2 className="text-heading text-center">
                Rogue
              </h2> 
              <p>
                The <span className='text-red-500 font-bold'>Rogue is a swift and elusive class</span> in Diablo IV, known for their deadly precision 
                and agility in battle. Armed with a wide array of weapons and specialized techniques, the Rogue 
                excels in <span className='text-red-500 font-bold'>quick and precise attacks, utilizing stealth, traps, and ranged weaponry</span>  to dispatch 
                enemies with lethal efficiency.
              </p>
              <p>
                The <span className='text-red-500 font-bold'>Rogue class is a master of espionage and subterfuge</span>, utilizing their skills in the shadows 
                to strike at the heart of evil. They are known for their precision and speed, able to strike 
                with deadly accuracy from a distance or up close. Rogues are adept at utilizing traps, poisons, 
                and shadow magic to weaken and control their enemies, making them a formidable opponent on the 
                battlefield.
              </p>
              <p>
                <span className='text-red-500 font-bold'>In a party, the Rogue serves as a versatile and high-damage dealer</span>, capable of 
                eliminating enemies quickly and efficiently. They excel in hit-and-run tactics, taking out 
                priority targets and controlling the battlefield with their agility and finesse. Rogues are also 
                skilled at uncovering hidden treasures and secret passages, making them valuable scouts and 
                explorers in a party.
              </p>
              <p>
                As a Rogue in Diablo IV, you will be a master of stealth and precision, using your skills to 
                outmaneuver and outwit your enemies. With a diverse set of weapons, traps, and techniques at 
                your disposal, you will be able to adapt to different combat situations and playstyles, whether 
                it's sniping enemies from a distance or engaging in lightning-fast close combat. The Rogue is a 
                cunning and lethal class that strikes fear into the hearts of their enemies, making them a 
                formidable force in the ongoing battle against evil in Sanctuary.
              </p>
                </motion.div>
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
                src={rogue} alt="Rogue"
                className='w-[300px] h-[200px] rounded-md border-4 border-solid border-red-600'
                />
            </div>
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3}}
            transition={{ duration: 0.5 }}
            variants={{ 
              hidden: { opacity:0, x:-50 },
              visible: { opacity:1, x:0 }
            }} 
            className="flex flex-col gap-3">
            <h2 className="text-heading text-center">
                Rogue
              </h2> 
              <p>
                The <span className='text-red-500 font-bold'> Rogue </span>is a fearsome and mighty warrior class in Diablo IV. 
                Armed with brute strength and unrivaled combat prowess, the Rogue 
                excels in <span className='text-red-500 font-bold'>close-quarters combat</span>, wielding devastating weapons to crush 
                enemies with raw power. Whether it's cleaving through hordes of demons or 
                facing off against formidable foes, the Rogue is a force to be 
                reckoned with on the battlefield.
              </p>
              <p>
                The Rogue class draws inspiration from the fierce and primal tribes of 
                the northern lands in the world of Sanctuary. Rogues are <span className='text-red-500 font-bold'> known for 
                their relentless strength and resilience </span>, honed through generations of 
                harsh living conditions and constant battles against the forces of 
                darkness. <span className='text-red-500 font-bold'>They value their tribal traditions </span> and seek to preserve their 
                way of life, even as they venture out into the world to confront the 
                rising tide of evil that threatens Sanctuary.
              </p>
              <p>
              <span className='text-red-500 font-bold'>In a party, the Rogue serves as a frontline warrior </span>, absorbing damage and 
                dishing out devastating blows to enemies. They can draw enemies' attention away 
                from more vulnerable allies, providing a protective barrier and controlling the 
                battlefield with their brute force. The Rogue's versatility in weapon choices
                and ability to specialize in different combat styles makes them adaptable to 
                various team compositions and strategies.
              </p>
              <p>
                As a Rogue in Diablo IV, you will wield unparalleled strength and unleash 
                relentless fury upon your enemies. With a diverse set of skills and abilities, 
                you will be a formidable force on the battlefield, capable of decimating foes 
                and protecting your allies. Whether you prefer to charge headlong into battle or 
                strategically control the battlefield, the Rogue is a fearsome class that
                will leave a trail of destruction in your wake.
              </p>
          </motion.div>
        </>
        )} 
      </div>
  )
}

export default Rogue