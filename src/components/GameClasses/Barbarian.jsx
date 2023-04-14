import React from 'react'
import useMediaQuery from '../../hooks/useMediaQuery';
import { motion } from 'framer-motion';

import barbarian from '../../assets/barbarian.jpg'

const Barbarian = () => {
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
                Barbarian
              </h2> 
              <p>
                The <span className='text-red-500 font-bold'> Barbarian </span>is a fearsome and mighty warrior class in Diablo IV. 
                Armed with brute strength and unrivaled combat prowess, the Barbarian 
                excels in <span className='text-red-500 font-bold'>close-quarters combat</span>, wielding devastating weapons to crush 
                enemies with raw power. Whether it's cleaving through hordes of demons or 
                facing off against formidable foes, the Barbarian is a force to be 
                reckoned with on the battlefield.
              </p>
              <p>
                The Barbarian class draws inspiration from the fierce and primal tribes of 
                the northern lands in the world of Sanctuary. Barbarians are <span className='text-red-500 font-bold'> known for 
                their relentless strength and resilience </span>, honed through generations of 
                harsh living conditions and constant battles against the forces of 
                darkness. <span className='text-red-500 font-bold'>They value their tribal traditions </span> and seek to preserve their 
                way of life, even as they venture out into the world to confront the 
                rising tide of evil that threatens Sanctuary.
              </p>
              <p>
              <span className='text-red-500 font-bold'>In a party, the Barbarian serves as a frontline warrior </span>, absorbing damage and 
                dishing out devastating blows to enemies. They can draw enemies' attention away 
                from more vulnerable allies, providing a protective barrier and controlling the 
                battlefield with their brute force. The Barbarian's versatility in weapon choices
                and ability to specialize in different combat styles makes them adaptable to 
                various team compositions and strategies.
              </p>
              <p>
                As a Barbarian in Diablo IV, you will wield unparalleled strength and unleash 
                relentless fury upon your enemies. With a diverse set of skills and abilities, 
                you will be a formidable force on the battlefield, capable of decimating foes 
                and protecting your allies. Whether you prefer to charge headlong into battle or 
                strategically control the battlefield, the Barbarian is a fearsome class that
                will leave a trail of destruction in your wake.
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
              src={barbarian} alt="Barbarian"
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
                src={barbarian} alt="Barbarian"
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
                Barbarian
              </h2> 
              <p>
                The <span className='text-red-500 font-bold'> Barbarian </span>is a fearsome and mighty warrior class in Diablo IV. 
                Armed with brute strength and unrivaled combat prowess, the Barbarian 
                excels in <span className='text-red-500 font-bold'>close-quarters combat</span>, wielding devastating weapons to crush 
                enemies with raw power. Whether it's cleaving through hordes of demons or 
                facing off against formidable foes, the Barbarian is a force to be 
                reckoned with on the battlefield.
              </p>
              <p>
                The Barbarian class draws inspiration from the fierce and primal tribes of 
                the northern lands in the world of Sanctuary. Barbarians are <span className='text-red-500 font-bold'> known for 
                their relentless strength and resilience </span>, honed through generations of 
                harsh living conditions and constant battles against the forces of 
                darkness. <span className='text-red-500 font-bold'>They value their tribal traditions </span> and seek to preserve their 
                way of life, even as they venture out into the world to confront the 
                rising tide of evil that threatens Sanctuary.
              </p>
              <p>
              <span className='text-red-500 font-bold'>In a party, the Barbarian serves as a frontline warrior </span>, absorbing damage and 
                dishing out devastating blows to enemies. They can draw enemies' attention away 
                from more vulnerable allies, providing a protective barrier and controlling the 
                battlefield with their brute force. The Barbarian's versatility in weapon choices
                and ability to specialize in different combat styles makes them adaptable to 
                various team compositions and strategies.
              </p>
              <p>
                As a Barbarian in Diablo IV, you will wield unparalleled strength and unleash 
                relentless fury upon your enemies. With a diverse set of skills and abilities, 
                you will be a formidable force on the battlefield, capable of decimating foes 
                and protecting your allies. Whether you prefer to charge headlong into battle or 
                strategically control the battlefield, the Barbarian is a fearsome class that
                will leave a trail of destruction in your wake.
              </p>
          </motion.div>
        </>
        )} 
      </div>
  )
}

export default Barbarian