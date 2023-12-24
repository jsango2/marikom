// import { Link } from "gatsby"
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import Button from "../button/button.js";
// import { useHistory } from "react-router-dom"
import { WrapAll } from "./style.js";
// import scrollTo from "gatsby-plugin-smoothscroll"
// import { AnchorLink } from "gatsby-plugin-anchor-links"
// import { HashLink } from "react-router-hash-link";

import LanguageSwitcher from "../language switcher/index.js";
import { useRouter } from "next/router.js";
import useScrollBlock from "../helper/useScrollBlock.js";

const MeniMobile = ({
  isOpen,
  setIsOpen,
  closeMenu,
  novostiNaslovi,
  oglasiNaslovi,
}) => {
  const [isOnamaMenuOpen, setIsOnamaMenuOpen] = useState(false);
  const { locale } = useRouter();
  const [blockScroll, allowScroll] = useScrollBlock();

  // const history = useHistory()
  // const goToHome = () => {
  //   // console.log("klikni")
  //   // let path = `/`
  //   // history.push(path)
  // }
  useEffect(() => {
    if (isOpen === false) {
      setIsOnamaMenuOpen(false);
    }
  }, [isOpen]);

  return (
    <>
      <div className={`menu ${isOpen ? "openMenu" : "closedMenu"}`}>
        <div
          onClick={() => {
            setIsOnamaMenuOpen(!isOnamaMenuOpen);
          }}
          className={`linkOnama ${
            isOnamaMenuOpen ? "linkOnamaOpen" : "linkOnamaClosed"
          }`}
        >
          {locale === "hr" ? "O nama" : "About us"}
        </div>
        {isOnamaMenuOpen && (
          <div className="mobileSubLinkParent">
            <Link href="/o-nama">Naša priča</Link>
            <Link href="/marikomerc-kvalitete">Marikomerc kvalitete</Link>
            <Link href="/prerada-i-skladiste">Prerada i skladište</Link>
          </div>
        )}
        <Link
          className="mobileLinks"
          href="/proizvodi"
          // onClick={() => {
          //   setIsOpen(false);
          // }}
        >
          Proizvodi
        </Link>
        <Link href="/horeca">HoReCa suradnja</Link>
        <Link href="/karijere">Karijere</Link>
        <Link href="/kontakt">Kontakt</Link>
        <Link href="/novosti">Novosti</Link>
        <Link href="http://www.zadarnight.run">Grupa</Link>
        <div className="mobileLinkDivider"></div>
        <LanguageSwitcher
          closeMenu={closeMenu}
          novostiNaslovi={novostiNaslovi}
          oglasiNaslovi={oglasiNaslovi}
        />
        <div>
          <div
            onClick={() => {
              setIsOpen(false);
            }}
          >
            {" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default MeniMobile;
