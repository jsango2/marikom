import Link from "next/link";
import React, { useState, useRef } from "react";
// import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import Headroom from "react-headroom"
// import scrollTo from "gatsby-plugin-smoothscroll"
// import styled from "styled-components"
import { GiHamburgerMenu } from "react-icons/gi";
import ArrowDown from "../svg/arrowDown.svg";
import MeniMobile from "./meni/meniMobile";
import { Link as Veza } from "react-scroll";
// import scrollTo from "gatsby-plugin-smoothscroll"
import Script from "next/script";
import Image from "next/image";
import { useRouter } from "next/router";
import LanguageSwitcher from "./language switcher";
import MarikomercLogo from "../svg/MarikomercGrupaWhite.svg";
// import HeroLogo from "../assets/images/herologo.png";
import HeroLogo from "../assets/images/MClogo2023.svg";
import { useOnClickOutside } from "./helper/useClickOutside";

const Header = ({ siteTitle }) => {
  const ref = useRef();
  // State for our modal

  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setIsOnamaOpen(false));

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isOnamaOpen, setIsOnamaOpen] = useState(false);
  const handleOnamaOpen = () => {
    setIsOnamaOpen(true);
  };

  // <Headroom
  //   style={{
  //     WebkitTransition: "all .5s ease-in-out",
  //     Transition: "all .5s ease-in-out",
  //     transition: "all .5s ease-in-out",
  //     zIndex: "999",
  //     height: "65px",
  //   }}
  // >
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15/dist/smooth-scroll.polyfills.min.js" />

      <header>
        <MeniMobile isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="headerWrap">
          <div className="navBar">
            <Link href="/">
              <div className="navLink navTitle navLogo">
                {/* <Image
                  src={HeroLogo}
                  alt="logo"
                  width={100}
                  height={31}
                  objectFit="cover"
                /> */}
                <HeroLogo />

                {/* <MarikomercLogo style={{ width: "70px" }} /> */}
              </div>
            </Link>
            <div>
              <GiHamburgerMenu
                className="hamburgerMenu"
                onClick={() => {
                  setIsOpen(() => !isOpen);
                  // blockScroll()
                }}
              />
              {isOnamaOpen && (
                <div className="OnamaDropDown" ref={ref}>
                  <Link className="navLinkDrop" href="/o-nama">
                    {router.locale === "hr" ? "Naša priča" : "Our story"}
                  </Link>
                  <Link className="navLinkDrop" href="/marikomerc-kvalitete">
                    Marikomerc kvalitete
                  </Link>
                  <Link className="navLinkDrop" href="/prerada-i-skladiste">
                    Prerada i skladište
                  </Link>
                  <Link className="navLinkDrop" href="/press">
                    PRESS
                  </Link>
                </div>
              )}

              <div className="navLinks">
                <div
                  style={{ cursor: "pointer", marginRight: "20px" }}
                  onMouseEnter={handleOnamaOpen}
                >
                  <Link className="navLink" href="/">
                    O nama
                  </Link>
                  <ArrowDown
                    style={{ position: "relative", marginLeft: "-8px" }}
                  />
                </div>
                <div>
                  <Link className="navLink" href="/proizvodi">
                    Proizvodi
                  </Link>
                </div>
                <div>
                  <Link className="navLink" href="/imate-restoran">
                    HoReCa suradnja
                  </Link>
                </div>
                <div>
                  <Link className="navLink" href="/karijera">
                    Karijere
                  </Link>
                </div>
                <div>
                  <Link className="navLink" href="/kontakt">
                    Kontakt
                  </Link>
                </div>
                <div>
                  <Link className="navLink" href="/novosti">
                    Novosti
                  </Link>
                </div>
                <div className="navLink borderNav"></div>
                <div>
                  <Link className="navLink" href="/grupa">
                    Grupa
                  </Link>
                </div>
                <div className="languageSwitcher">
                  {/* <ArrowDown
                    style={{
                      position: "relative",
                      marginLeft: "-8px",
                      marginRight: "5px",
                    }}
                  /> */}
                  <LanguageSwitcher />
                </div>
                {/* <Veza
                activeClass="active"
                to="prijava"
                spy={true}
                smooth="easeInOutCubic"
                offset={0}
                duration={1800}
              > */}

                {/* </Veza> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
    // </Headroom>
  );
};

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header;
