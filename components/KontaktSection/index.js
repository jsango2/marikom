import Logos from "../ProLogMapSection/logos.js";
import {
  WrapAll,
  Container,
  BlueLine,
  Title,
  WrapUp,
  WrapDown,
  Box,
  BoldTitle,
  WrapColumns,
  Column,
  Name,
  Kontakt,
  Overlay,
} from "./style.js";
import useWindowSize from "../helper/usewindowsize";
import { data } from "./data.js";
import Image from "next/image.js";
import bg from "../../assets/images/kontaktSekcijaBg.png";
import { useScrollPercentage } from "react-scroll-percentage";

// import "bootstrap/dist/css/bootstrap.min.css";

function KontaktSection() {
  const size = useWindowSize();
  const [ref, percentage] = useScrollPercentage({
    /* Optional options */
    threshold: 0,
  });
  return (
    <WrapAll ref={ref}>
      <Overlay percentage={percentage}>
        <Image src={bg} alt="p1" layout="fill" objectFit="cover" />
      </Overlay>
      <Container>
        <Title>KONTAKTIRAJTE NAS S POVJERENJEM</Title>
        <WrapUp>
          <Box>
            <Name>E-mail (info)</Name>
            <Kontakt href="mailto:info@marikomerc.hr">
              info@marikomerc.hr
            </Kontakt>
          </Box>

          <Box>
            <Name>E-mail (Prodaja)</Name>
            <Kontakt href="mailto:narudzbe@marikomerc.hr">
              narudzbe@marikomerc.hr
            </Kontakt>
          </Box>
          <Box>
            <Name>E-mail (ljudski resursi)</Name>
            <Kontakt href="mailto:posao@marikomerc.hr">
              posao@marikomerc.hr
            </Kontakt>
          </Box>
          <Box>
            <Name>Kontakt telefon</Name>
            <Kontakt href="tel:+385 23 630 539">+385 23 630 539</Kontakt>
          </Box>
        </WrapUp>
        <BlueLine />
        <WrapDown>
          <Box>
            <BoldTitle>MARIKOMERC GRUPA</BoldTitle>
            <Kontakt href="www.google.com">Google Maps</Kontakt>
            <Kontakt href="www.instagram.com">Instagram</Kontakt>
            <Kontakt href="www.facebook.com">Facebook</Kontakt>
          </Box>
          <Box>
            <BoldTitle>DI MARIS</BoldTitle>
            <Kontakt href="www.google.com">Google Maps</Kontakt>
            <Kontakt href="www.instagram.com">Instagram</Kontakt>
            <Kontakt href="www.facebook.com">Facebook</Kontakt>
          </Box>{" "}
          <Box>
            <BoldTitle>MLS LOGISTIKA</BoldTitle>
            <Kontakt href="www.google.com">Google Maps</Kontakt>
            <Kontakt href="www.instagram.com">Instagram</Kontakt>
          </Box>
        </WrapDown>
      </Container>
    </WrapAll>
  );
}

export default KontaktSection;
