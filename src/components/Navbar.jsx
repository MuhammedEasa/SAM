import { useState, useEffect } from "react";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import logo from "../assets/logo.svg";
import { navLinks } from "../constants";
import styles from "../style";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="w-full h-[100px] sm:h-[120px]" />
      
      <div className="w-full fixed top-0 left-0 right-0 z-50">
        <div 
          className={`w-full transition-all duration-300 ease-out
            ${scrolled ? 'bg-primary shadow-xl' : 'bg-transparent'}
          `}
        >
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <nav className="w-full flex py-6 justify-between items-center navbar">
                <img src={logo} alt="Sam" className="w-[124px] h-[32px]" />
                
                {/* Desktop Navigation */}
                <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                  {navLinks.map((nav, index) => (
                    <li
                      key={nav.id}
                      className={`font-poppins font-normal cursor-pointer text-[16px]
                        ${scrolled ? 'text-white hover:text-secondary' : 'text-white hover:text-dimWhite'}
                        transition-colors duration-200 ease-in-out
                        ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}
                      `}
                    >
                      <a href={`${nav.id}`}>{nav.title}</a>
                    </li>
                  ))}
                </ul>

                {/* Mobile Navigation */}
                <div className="sm:hidden flex flex-1 justify-end items-center">
                  <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain cursor-pointer"
                    onClick={() => setToggle((prev) => !prev)}
                  />

                  {/* Mobile Menu */}
                  <div
                    className={`${toggle ? 'flex' : 'hidden'} 
                      p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] 
                      rounded-xl bg-primary shadow-2xl
                      transition-transform duration-300 ease-in-out
                    `}
                  >
                    <ul className="list-none flex flex-col justify-end items-start flex-1 gap-4">
                      {navLinks.map((nav) => (
                        <li
                          key={nav.id}
                          className={`font-poppins font-medium cursor-pointer text-[16px] 
                            text-white hover:text-secondary transition-colors duration-200 ease-in-out w-full
                          `}
                        >
                          <a href={`${nav.id}`}>{nav.title}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;