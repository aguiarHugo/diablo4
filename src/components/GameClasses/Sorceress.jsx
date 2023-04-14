import React from 'react'
import useMediaQuery from '../../hooks/useMediaQuery';
import { motion } from 'framer-motion';

import sorceress from '../../assets/sorceress.jpg'

const Sorceress = () => {
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
              src={sorceress} alt="Sorceress"
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
                    Sorceress
                  </h2> 
                  <p>
                    The <span className='text-red-500 font-bold'>Sorceress</span> is a master of arcane magic in Diablo IV. 
                    Harnessing the <span className='text-red-500 font-bold'> elements of fire, ice, and 
                    lightning</span>, the Sorceress can wield devastating spells to obliterate enemies from 
                    afar or control the battlefield with <span className='text-red-500 font-bold'>powerful 
                    crowd-control effects</span>. As a spell casting expert, the Sorceress excels at dealing 
                    high burst damage, manipulating the environment, and supporting allies with her 
                    versatile magical abilities.
                  </p>
                  <p>
                    The Sorceress is a <span className='text-red-500 font-bold'>gifted wielder of magic</span>, 
                    with extensive knowledge of the arcane arts. She has studied for years to master the elements and unlock the
                    secrets of the universe's fundamental forces. In the world of Sanctuary, 
                    Sorceresses are respected for their mastery of the arcane and often sought 
                    after for their immense power. However, their insatiable thirst for knowledge 
                    and power can also be a double-edged sword, as they must be wary of the 
                    temptations and dangers that lurk in the world of magic.
                  </p>
                  <p>
                    <span className='text-red-500 font-bold'>In a party</span>, the Sorceress fulfills the role of a ranged spell caster, 
                    dealing <span className='text-red-500 font-bold'>high burst damage from a distance and controlling the battlefield with 
                    her powerful spells</span>. She can freeze, burn, or electrocute enemies, creating 
                    strategic advantages for her allies and keeping foes at bay. The Sorceress's 
                    versatility in element specialization allows her to adapt to different situations
                    and enemy types, making her a valuable asset in any adventuring party.
                  </p>
                  <p>
                    As a Sorceress in Diablo IV, you will wield the power of the elements and unleash 
                    devastating spells upon your enemies. With your unparalleled mastery of arcane 
                    magic, you will be a force to be reckoned with, capable of dealing immense damage 
                    and controlling the battlefield with your powerful spells. Whether you prefer to 
                    freeze enemies in place, rain down fiery meteors, or electrify the battlefield 
                    with lightning, the Sorceress is a formidable class that will leave enemies in 
                    awe of your magical prowess.
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
                src={sorceress} alt="Sorceress"
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
                Sorceress
              </h2> 
              <p>
                The <span className='text-red-500 font-bold'> Sorceress </span>is a fearsome and mighty warrior class in Diablo IV. 
                Armed with brute strength and unrivaled combat prowess, the Sorceress 
                excels in <span className='text-red-500 font-bold'>close-quarters combat</span>, wielding devastating weapons to crush 
                enemies with raw power. Whether it's cleaving through hordes of demons or 
                facing off against formidable foes, the Sorceress is a force to be 
                reckoned with on the battlefield.
              </p>
              <p>
                The Sorceress class draws inspiration from the fierce and primal tribes of 
                the northern lands in the world of Sanctuary. Sorceresss are <span className='text-red-500 font-bold'> known for 
                their relentless strength and resilience </span>, honed through generations of 
                harsh living conditions and constant battles against the forces of 
                darkness. <span className='text-red-500 font-bold'>They value their tribal traditions </span> and seek to preserve their 
                way of life, even as they venture out into the world to confront the 
                rising tide of evil that threatens Sanctuary.
              </p>
              <p>
              <span className='text-red-500 font-bold'>In a party, the Sorceress serves as a frontline warrior </span>, absorbing damage and 
                dishing out devastating blows to enemies. They can draw enemies' attention away 
                from more vulnerable allies, providing a protective barrier and controlling the 
                battlefield with their brute force. The Sorceress's versatility in weapon choices
                and ability to specialize in different combat styles makes them adaptable to 
                various team compositions and strategies.
              </p>
              <p>
                As a Sorceress in Diablo IV, you will wield unparalleled strength and unleash 
                relentless fury upon your enemies. With a diverse set of skills and abilities, 
                you will be a formidable force on the battlefield, capable of decimating foes 
                and protecting your allies. Whether you prefer to charge headlong into battle or 
                strategically control the battlefield, the Sorceress is a fearsome class that
                will leave a trail of destruction in your wake.
              </p>
          </motion.div>
        </>
        )} 
      </div>
  )
}

export default Sorceress