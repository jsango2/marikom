import React, { useState } from "react";
import {
  WrapAll,
  Naslov,
  WrapTreneri,
  Trener,
  Naslov2,
  Text,
} from "./style.js";
import Pozadina from "../../svg/pozadinTreneri.svg";
import Jure from "../../images/jure.png";
import Tuta from "../../images/tuta.png";
import KosaCrta from "../../svg/kosacrta.svg";
import { Parallax } from "react-scroll-parallax";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

const Treneri = () => {
  return (
    <WrapAll>
      <Naslov>VAŠI TRENERI</Naslov>
      <Pozadina
        style={{
          position: "absolute",
          top: "20px",
        }}
      />
      <Tilt
        className="treneriCrta"
        transitionEasing={"cubic-bezier(.14,.58,.51,.99)  "}
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "600px",
            top: "0px",
            left: "0px",
            zIndex: "-1",
          }}
        >
          <Image src="/linijautrke.svg" layout="fill" objectFit="cover" />
        </div>
      </Tilt>

      <WrapTreneri>
        <Trener data-sal="fade" data-sal-delay="300" data-sal-easing="ease">
          <div className="trenerImg">
            <Image
              src="/jure.png"
              alt="coach Jure"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <Naslov2>
            <KosaCrta
              style={{
                position: "absolute",
                transform: "translate(-25px,0",
              }}
            />
            JURE ŠANGO
          </Naslov2>
          <Text>
            Školu trčanja Zadar organizira i vodi magistar kineziologije Jure
            Šango, kondicijski trener sa petnaestogodišnjim iskustvom u radu sa
            sportašima i rekreativcima. Deset godina kondicijski trener u
            košarkaškom klubu Zadar te trener Hrvatske i BiH košarkaške
            reprezentacije na Europskim prvenstvima. Kondicijski trener Hrvatske
            košarkaške reprezentacije na Olimpijskim igrama u Riju 2016. godine.
            Trener triatlona a i sam rekreativni triatlonac već 6 godina.
            Vanjski suradnik-predavač na Kineziološkom fakultetu u Zagrebu.
            Aktivan u radu Triatlon kluba Zadar. Predsjednik Udruge kondicijskih
            trenera zadarske županije.{" "}
          </Text>
        </Trener>
        <Trener data-sal="fade" data-sal-delay="800" data-sal-easing="ease">
          <div className="trenerImg">
            <Image
              src="/tuta.png"
              alt="coach Tuta"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <Naslov2>
            <KosaCrta
              style={{
                position: "absolute",
                transform: "translate(-25px,0px)",
              }}
            />
            IVAN TUTA
          </Naslov2>
          <Text>
            Suradnik Škole trčanja Zadar je naš iskusni triatlonac Ivan Tuta.
            Ivan Tuta je apsolvent kineziološkog fakulteta sa usmjerenjem
            kondicijske pripreme sportaša. Bavi se triatlonom već deset godina i
            postiže zapažene rezultate. Višestruki je finisher na Ironman
            natjecanjima. Natječe se i na brojnim dugoprugaškim trkačkim
            natjecanjima u Hrvatskoj. Trener je u triatlon klubu Zadar. ‍
            “Postigli smo tako lijepe stvari sa našim programima u Školi
            trčanja. Jako veliki broj ljudi je u potpunosti promjenilo svoj stil
            života i na to smo jako ponosni.” – Ivan Tuta
          </Text>
        </Trener>
      </WrapTreneri>
    </WrapAll>
  );
};

export default Treneri;
