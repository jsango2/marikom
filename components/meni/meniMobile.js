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

const MeniMobile = ({ isOpen, setIsOpen, closeMenu, novostiNaslovi }) => {
  // const history = useHistory()
  // const goToHome = () => {
  //   // console.log("klikni")
  //   // let path = `/`
  //   // history.push(path)
  // }
  return (
    <>
      <div className={`menu ${isOpen ? "openMenu" : "closedMenu"}`}>
        <Link
          className="mobileLinks"
          href="/blog"
          // onClick={() => {
          //   setIsOpen(false);
          // }}
        >
          O nama
        </Link>
        <Link
          className="mobileLinks"
          href="/proizvodi"
          // onClick={() => {
          //   setIsOpen(false);
          // }}
        >
          Proizvodi
        </Link>
        <Link className="mobileLinks" href="http://www.zadarnight.run">
          Imate restoran?
        </Link>
        <Link className="mobileLinks" href="http://www.zadarnight.run">
          Karijera
        </Link>
        <Link className="mobileLinks" href="http://www.zadarnight.run">
          Kontakt
        </Link>
        <Link className="mobileLinks" href="/novosti">
          Novosti
        </Link>
        <Link className="mobileLinks" href="http://www.zadarnight.run">
          Grupa
        </Link>

        <LanguageSwitcher
          closeMenu={closeMenu}
          novostiNaslovi={novostiNaslovi}
        />
        <div className="mobileLinks">
          {/* <Link
            to="/"
            onClick={() => {
              setIsOpen(false)
            }}
          > */}
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
