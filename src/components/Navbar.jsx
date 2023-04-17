import { useState, useMemo } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

import logo from '../assets/logo.png'
import { Link } from "react-router-dom";

const Links = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  
  return(
    <Link
    className={`${selectedPage === lowerCasePage ? "text-yellow" : "text-white"}`}
    to={`/${lowerCasePage}`}
    onClick={() => {
      setSelectedPage(lowerCasePage);
      windowScrollTo(0, 0);
      }
    }
    >
      {page}
    </Link>
  )
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)")
  
  const navbarBackground = useMemo(
    () => (isTopOfPage ? "bg-transparent" : "bg-red-700"),
    [isTopOfPage]
  );  

  const navbarLogo = useMemo(
    () => (isTopOfPage ? "invisible" : ""),
    [isTopOfPage]
  );

  const toggleMenu = useMemo(() => {
    const animate = () => {
      setIsAnimating(!isMenuToggled);
      setIsMenuToggled(!isMenuToggled);
    };
    return animate;
  }, [isMenuToggled]);


  return (
    <nav
      className={`${navbarBackground} z-40 w-full fixed top-0`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <img
          className={`${navbarLogo} cursor-pointer w-[90px]`}
          src={logo}
          alt="Logo"
          onClick={() => {
            setSelectedPage('')
            window.scrollTo(0, 0,)
        }}
        />
        {/*DESKTOP */ }
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-md font-semibold">
            <Links
            page="Home"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />
             <Links
            page="About"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />
             <Links
            page="Classes"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}

            />
             <Links
            page="News"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
            <button 
            className={"rounded-full bg-red-700 p-2"}
            onClick={toggleMenu}
            >
              <GiHamburgerMenu size={24} /> 
            </button>)}

            {/* MOBILE BUTTON POPUP*/}
            {!isAboveSmallScreens && isMenuToggled && (
              <div className={`fixed right-0 bottom-0 h-full bg-red-700 w-1/3 ${isAnimating ? "menu-animation" : ""} `}>
                {/* CLOSE ICON */}
                <div className="flex justify-end p-12">
                  <button
                  onClick={() => setIsMenuToggled(prevState => !prevState)}>
                  <AiOutlineClose size={24} />
                  </button>
                </div>

                {/* MENU ITEMS */}
                <div 
                  className="flex mt-5 flex-col gap-10 items-center text-2xl "
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  <Links
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}

                  />
                  <Links
                    page="About"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Links
                    page="Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}

                  />
                  <Links
                    page="News"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
              </div>
            )}
      </div>
    </nav>
  )
}

export default Navbar