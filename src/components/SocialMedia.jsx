import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube  } from 'react-icons/ai'


const SocialMedia = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
      className="transition duration-500"
      href="#"
      target="_blank"
      rel="noreferrer"
      >
        <AiFillTwitterCircle size={40}/>
      </a>

      <a
      className="transition duration-500"
      href="#"
      target="_blank"
      rel="noreferrer"
      >
        <AiFillInstagram size={40}/>
      </a>

      <a
      className="transition duration-500"
      href="#"
      target="_blank"
      rel="noreferrer"
      >
        <AiFillYoutube size={40}/>
      </a>
    </div>
  )
}

export default SocialMedia