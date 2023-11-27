import {
  WrapAll,
  UpTitle,
  Title,
  Text,
  BlueLine,
  Photo,
  WrapKartica,
  Content,
} from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
// import useWindowSize from "../../helper/usewindowsize";
import { Link as Veza } from "react-scroll";
import Image from "next/image";

const Kartice = () => {
  // const size = useWindowSize();
  return (
    <WrapAll>
      <WrapKartica>
        <Content>
          <BlueLine />
          <UpTitle>KARIJERE</UpTitle>
          <Title>Više od 150 profesionalaca u službi izvrsnosti</Title>
          <Text>
            Ponuda najboljeg proizvoda i pružanje najbolje usluge zahtijevaju
            obučene stručnjake. Rano ustajanje, rukovanje hranom na
            temperaturima ispod nule, rad s modernom tehnologijom dio su naše
            rutine.
            <br />
            <br />
            Pred nama su veliki planovi i konstantno imamo potrebu za novim
            članovima tima na svim razinama. Proces selekcije stalna je
            aktivnost, usmjerena na prepoznavanje mladih ljudi koji imaju
            sposobnost i želju uklopiti se u naše okruženje. Odabir uključuje
            proces evaluacije čiji je cilj utvrđivanje stvarne prisutnosti
            profesionalnih karakteristika i vještina te razvojnog potencijala.
          </Text>
        </Content>
        <Photo></Photo>
      </WrapKartica>
      <WrapKartica>
        <Content>
          <BlueLine />
          <UpTitle>KARIJERE</UpTitle>
          <Title>Više od 150 profesionalaca u službi izvrsnosti</Title>
          <Text>
            Ponuda najboljeg proizvoda i pružanje najbolje usluge zahtijevaju
            obučene stručnjake. Rano ustajanje, rukovanje hranom na
            temperaturima ispod nule, rad s modernom tehnologijom dio su naše
            rutine.
            <br />
            <br />
            Pred nama su veliki planovi i konstantno imamo potrebu za novim
            članovima tima na svim razinama. Proces selekcije stalna je
            aktivnost, usmjerena na prepoznavanje mladih ljudi koji imaju
            sposobnost i želju uklopiti se u naše okruženje. Odabir uključuje
            proces evaluacije čiji je cilj utvrđivanje stvarne prisutnosti
            profesionalnih karakteristika i vještina te razvojnog potencijala.
          </Text>
        </Content>
        <Photo></Photo>
      </WrapKartica>{" "}
      <WrapKartica>
        <Content>
          <BlueLine />
          <UpTitle>KARIJERE</UpTitle>
          <Title>Više od 150 profesionalaca u službi izvrsnosti</Title>
          <Text>
            Ponuda najboljeg proizvoda i pružanje najbolje usluge zahtijevaju
            obučene stručnjake. Rano ustajanje, rukovanje hranom na
            temperaturima ispod nule, rad s modernom tehnologijom dio su naše
            rutine.
            <br />
            <br />
            Pred nama su veliki planovi i konstantno imamo potrebu za novim
            članovima tima na svim razinama. Proces selekcije stalna je
            aktivnost, usmjerena na prepoznavanje mladih ljudi koji imaju
            sposobnost i želju uklopiti se u naše okruženje. Odabir uključuje
            proces evaluacije čiji je cilj utvrđivanje stvarne prisutnosti
            profesionalnih karakteristika i vještina te razvojnog potencijala.
          </Text>
        </Content>
        <Photo></Photo>
      </WrapKartica>
    </WrapAll>
  );
};

export default Kartice;
