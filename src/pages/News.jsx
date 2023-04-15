import { useState } from "react";
import { motion } from "framer-motion";

import Navbar from '../components/Navbar';
import useMediaQuery from "../hooks/useMediaQuery";
import Footer from "../components/Footer";

const News = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const [selectedPage, setSelectedPage] = useState('news')
  return (
    <section>
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage ={setSelectedPage}
      />
      <div className="h-screen section-wrapper">
        <h1 className="text-center text-heading">News</h1>

        <div className="mt-4 flex flex-col gap-3">
          <h2 className="text-heading ">DIABLO IV OPEN BETA RETROSPECTIVE: TRANSFORMING FEEDBACK INTO CHANGE</h2>
          <p>On the weekends of March 17 and 24, Sanctuary let out a cry for help. A cry that would be answered by hordes of wanderers who rode in on a nameless horse and loosened Lillith’s grasp on Sanctuary. During the Early Access and Open Beta weekends, these players sent countless demons back to the Burning Hells, obtained powerful gear, and saw Lilith’s grand plot begin to unfold before them. Many of these players also took the time to leave valuable feedback on our official Diablo IV forums, and on platforms such as Reddit and Discord.</p>
          <p>After the Early Access and Open Beta weekends concluded, the development team read through all your feedback and reviewed gameplay data. Using this information, we have made a variety of fixes and updates to various systems in Diablo IV, all of which will be present in the version of the game that launches on June 6. None of this would be possible without the community’s dedication and love for the Diablo universe, to which we say THANK YOU!</p>
          <h2>DUNGEONS</h2>
          <h3 className="subtext">Dungeon Layouts</h3>
          <p>One of the most common pieces of feedback we received is that players felt they were doing a lot of backtracking within certain dungeons. We have optimized multiple dungeons across all zones to minimize the need for backtracking. Here is a list of dungeons specifically in the Fractured Peaks zone which received layout updates:</p>
          <ul className="list-disc ml-12">
            <li>Caldera Gate</li>
            <li>Defiled Catacombs</li>
            <li>Derelict Lodge</li>
            <li>Forbidden City</li>
            <li>Hoarfrost Demise</li>
            <li>Immortal Emanation</li>
            <li>Kor Dragan Barracks</li>
            <li>Maulwood</li>
            <li>Rimescar Caverns</li>
          </ul>
          <p>Developer’s Note: Our primary goal with the Layout changes was to reduce certain kinds of backtracking which detract from a player’s experience. An example of this change is that players previously needed to enter side rooms to interact with Structure Objectives, causing them to retread the same path. Now, many of our Structure Objectives have been repositioned along main dungeon pathways, making them easier for players to reach and allowing them to readily explore the dungeon after defeating the Structure.</p>
          <h3 className="subtext" >Dungeon Events</h3>
          <p>The chance for an Event to spawn inside of a dungeon has increased from 10% to 60%.</p>
          <h3>Dungeon Gameplay</h3>
          <p>To reduce the need to backtrack, small numbers of straggling monsters will seek out the player to help complete the Kill All Monsters objective.</p>
          <p>When Animus is gathered, the player and nearby allies will:</p>
          <ul  className="list-disc ml-12">
            <li>Gain 10 Resource.</li>
            <li>Reduce all active Cooldowns by 1 second.</li>
          </ul>
          <p>Depositing Animus channel time was reduced from 3 to 0 seconds.</p>
          <p>The time to Rescue was reduced from 3 to 1.5 seconds.</p>
          <p>All Rescue objectives now drop a Health Potion upon completion.</p>
          <p>While carrying the Ancient's Statue, Bloodstone, Mechanical Box, or Stone Carving, you will receive a Momentum bonus granting a 25% move speed increase to you and nearby allies.</p>
          <p>Pedestals have had their channel time reduced from 2 to 0 seconds.</p>
          <p>Returning a Portable Object to its Pedestal now fully restores Health, Resource, Potions, and resets cooldowns for</p>

          <a className="text-red-500 font-bold" href="https://news.blizzard.com/en-us/diablo4/23938289/diablo-iv-open-beta-retrospective-transforming-feedback-into-change" target="__blank">Blizzard Official Website</a>
        </div>
      </div>
      <div className="h-screen">
        <Footer />
      </div>
    </section>
  )
}

export default News