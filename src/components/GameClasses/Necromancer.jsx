import React from 'react'
import useMediaQuery from '../../hooks/useMediaQuery';
import { motion } from 'framer-motion';

import necromancer from '../../assets/diablo-4-beta-unlock-necromancer.jpg'

const Necromancer = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div className='section-wrapper flex flex-col items-center md:flex-row'>
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
                className="flex flex-col gap-3 max-w-[800px] pr-8"
            >
              <h2 className="text-heading text-center">
                Necromancer
              </h2> 
              <p>
                The <span className='text-red-500 font-bold'>Necromancer</span> is a dark and mysterious class in Diablo IV, wielding the powers of 
                death and the undead to control and manipulate the battlefield. With mastery over the forces of 
                life and death, the The <span className='text-red-500 font-bold'>Necromancer can summon minions, manipulate corpses, and wield devastating 
                curses to crush their enemies</span> and restore balance to the world of Sanctuary.
              </p>
              <p>
                The <span className='text-red-500 font-bold'>Necromancer class draws power from the dark arts of death magic</span>, tapping into the 
                supernatural realm to command legions of undead minions. They can raise skeletons, summon 
                golems, and harness the powers of decay and decay to weaken and destroy their foes. In 
                addition, the Necromancer can wield powerful curses that cripple enemies and enhance their 
                own abilities, making them a formidable force on the battlefield.
              </p>
              <p>
                <span className='text-red-500 font-bold'>In a party, the Necromancer serves as a versatile support class</span>, capable of 
                healing and protecting allies while simultaneously decimating enemies. They can summon 
                minions to tank and deal damage, as well as provide powerful crowd control and debuff 
                effects. The Necromancer's ability to manipulate corpses and curses also makes them 
                valuable in controlling the battlefield and weakening enemy forces.
              </p>
              <p>
                As a Necromancer in Diablo IV, you will wield the powers of life and death, controlling 
                the forces of the afterlife to vanquish your enemies and protect your allies. With a wide 
                array of summoning, curse, and support abilities, you will be able to adapt to different 
                combat situations and playstyles, whether it's commanding a horde of undead minions or 
                wielding powerful curses to control the battlefield. The Necromancer is a master of the 
                dark arts, capable of bending the forces of life and death to their will, and a force to 
                be reckoned with in the ongoing battle against evil in Sanctuary.
              </p>
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
              src={necromancer} alt="Necromancer"
              className='rounded- w-[600px] h-[500px] mt-4 rounded-md border-4 border-solid border-red-600'
            />
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
                src={necromancer} alt="Necromancer"
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
                Necromancer
              </h2> 
              <p>
                The <span className='text-red-500 font-bold'>Necromancer</span> is a dark and mysterious class in Diablo IV, wielding the powers of 
                death and the undead to control and manipulate the battlefield. With mastery over the forces of 
                life and death, the The <span className='text-red-500 font-bold'>Necromancer can summon minions, manipulate corpses, and wield devastating 
                curses to crush their enemies</span> and restore balance to the world of Sanctuary.
              </p>
              <p>
                The <span className='text-red-500 font-bold'>Necromancer class draws power from the dark arts of death magic</span>, tapping into the 
                supernatural realm to command legions of undead minions. They can raise skeletons, summon 
                golems, and harness the powers of decay and decay to weaken and destroy their foes. In 
                addition, the Necromancer can wield powerful curses that cripple enemies and enhance their 
                own abilities, making them a formidable force on the battlefield.
              </p>
              <p>
                <span className='text-red-500 font-bold'>In a party, the Necromancer serves as a versatile support class</span>, capable of 
                healing and protecting allies while simultaneously decimating enemies. They can summon 
                minions to tank and deal damage, as well as provide powerful crowd control and debuff 
                effects. The Necromancer's ability to manipulate corpses and curses also makes them 
                valuable in controlling the battlefield and weakening enemy forces.
              </p>
              <p>
                As a Necromancer in Diablo IV, you will wield the powers of life and death, controlling 
                the forces of the afterlife to vanquish your enemies and protect your allies. With a wide 
                array of summoning, curse, and support abilities, you will be able to adapt to different 
                combat situations and playstyles, whether it's commanding a horde of undead minions or 
                wielding powerful curses to control the battlefield. The Necromancer is a master of the 
                dark arts, capable of bending the forces of life and death to their will, and a force to 
                be reckoned with in the ongoing battle against evil in Sanctuary.
              </p>
          </motion.div>
        </>
        )} 
      </div>
  )
}

export default Necromancer