import { useState } from "react";
import Navbar from '../components/Navbar'

const About = () => {
  const [selectedPage, setSelectedPage] = useState('about')
  return (
    <div>
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage ={setSelectedPage}
      />
      <div className='h-[1000px]'>
      </div>
    </div>
  )
}

export default About