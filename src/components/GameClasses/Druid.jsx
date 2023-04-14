import React from 'react'
import useMediaQuery from '../../hooks/useMediaQuery';
import { motion } from 'framer-motion';

import druid from '../../assets/Druid-in-Diablo-4.jpg'

const Druid = () => {
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
                Druid
              </h2> 
              <p>
                The <span className='text-red-500 font-bold'>Druid</span> is a versatile and nature-bound class in Diablo IV. 
                Drawing power from the natural world, the Druid is a <span className='text-red-500 font-bold'>master of shapeshifting, elemental magic, and 
                nature-based abilities</span>. With the ability to transform into powerful animal forms and harness the 
                elements to control the battlefield, the Druid is a <span className='text-red-500 font-bold'>formidable force in both melee and ranged combat</span>.
              </p>
              <p>
                The Druid class is deeply connected to the natural world, revered as protectors of the balance 
                between nature and civilization. They can call upon the forces of earth, fire, wind, and storm 
                to aid them in battle, as well as transform into animals such as bears, wolves, and ravens to 
                gain enhanced abilities and characteristics. The Druid's bond with nature allows them to heal 
                and rejuvenate themselves and their allies, making them <span className='text-red-500 font-bold'>valuable support characters in a party</span>.
              </p>
              <p>
                <span className='text-red-500 font-bold'>In a party, the Druid serves as a versatile and adaptable character</span>, capable of 
                fulfilling multiple roles depending on their form and abilities. They can function as a melee 
                tank in bear form, dealing heavy damage and absorbing hits, or as a ranged spellcaster in 
                elemental forms, unleashing devastating spells from a distance. The Druid's ability to shift 
                between forms and utilize a wide range of abilities makes them a valuable asset in various 
                team compositions and strategies.
              </p>
              <p>
                As a Druid in Diablo IV, you will harness the power of nature to shape-shift, control the elements, 
                and protect the balance of the natural world. With a diverse set of skills and abilities, you will 
                be able to adapt to different situations and playstyles, whether it's unleashing the fury of the 
                wild in animal forms or casting powerful elemental spells. The Druid is a versatile class that 
                brings the untamed forces of nature to the battlefield, making them a force to be reckoned with 
                against the forces of darkness in Sanctuary.
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
              src={druid} alt="Druid"
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
                src={druid} alt="Druid"
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
                Druid
              </h2> 
              <p>
                The <span className='text-red-500 font-bold'>Druid</span> is a versatile and nature-bound class in Diablo IV. 
                Drawing power from the natural world, the Druid is a <span className='text-red-500 font-bold'>master of shapeshifting, elemental magic, and 
                nature-based abilities</span>. With the ability to transform into powerful animal forms and harness the 
                elements to control the battlefield, the Druid is a <span className='text-red-500 font-bold'>formidable force in both melee and ranged combat</span>.
              </p>
              <p>
                The Druid class is deeply connected to the natural world, revered as protectors of the balance 
                between nature and civilization. They can call upon the forces of earth, fire, wind, and storm 
                to aid them in battle, as well as transform into animals such as bears, wolves, and ravens to 
                gain enhanced abilities and characteristics. The Druid's bond with nature allows them to heal 
                and rejuvenate themselves and their allies, making them <span className='text-red-500 font-bold'>valuable support characters in a party</span>.
              </p>
              <p>
                <span className='text-red-500 font-bold'>In a party, the Druid serves as a versatile and adaptable character</span>, capable of 
                fulfilling multiple roles depending on their form and abilities. They can function as a melee 
                tank in bear form, dealing heavy damage and absorbing hits, or as a ranged spellcaster in 
                elemental forms, unleashing devastating spells from a distance. The Druid's ability to shift 
                between forms and utilize a wide range of abilities makes them a valuable asset in various 
                team compositions and strategies.
              </p>
              <p>
                As a Druid in Diablo IV, you will harness the power of nature to shape-shift, control the elements, 
                and protect the balance of the natural world. With a diverse set of skills and abilities, you will 
                be able to adapt to different situations and playstyles, whether it's unleashing the fury of the 
                wild in animal forms or casting powerful elemental spells. The Druid is a versatile class that 
                brings the untamed forces of nature to the battlefield, making them a force to be reckoned with 
                against the forces of darkness in Sanctuary.
              </p>
          </motion.div>
        </>
        )} 
      </div>
  )
}

export default Druid