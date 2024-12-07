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
import bg from "../../assets/images/kontaktBgImg.webp";
import { useScrollPercentage } from "react-scroll-percentage";
import en from "../../locales/en.json";
import hr from "../../locales/hr.json";
import { useRouter } from "next/router.js";
import { useInView } from "react-intersection-observer";

// import "bootstrap/dist/css/bootstrap.min.css";

function KontaktSection() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
  const size = useWindowSize();
  const [ref1, percentage] = useScrollPercentage({
    /* Optional options */
    threshold: 0,
  });
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <WrapAll ref={ref1}>
      <Overlay percentage={percentage}>
        <Image src={bg} alt="p1" layout="fill" objectFit="cover" />
      </Overlay>
      <Container>
        <Title>{t.Kontakt.naslov}</Title>
        <WrapUp>
          <Box>
            <Name>E-mail (info)</Name>
            <Kontakt href="mailto:info@marikomerc.hr">
              info@marikomerc.hr
            </Kontakt>
          </Box>

          <Box>
            <Name>E-mail ({t.Kontakt.prodaja})</Name>
            <Kontakt href="mailto:narudzbe@marikomerc.hr">
              narudzbe@marikomerc.hr
            </Kontakt>
          </Box>
          <Box>
            <Name>E-mail ({t.Kontakt.ljudskiResursi})</Name>
            <Kontakt href="mailto:posao@marikomerc.hr">
              posao@marikomerc.hr
            </Kontakt>
          </Box>
          <Box>
            <Name>{t.Kontakt.kontaktTelefon}</Name>
            <Kontakt href="tel:+385 23 630 539">+385 23 630 539</Kontakt>
          </Box>
        </WrapUp>
        <BlueLine
          ref={ref}
          className={` ${inView ? "inViewLine" : "outViewLine"}`}
        />
        <WrapDown>
          <Box>
            <BoldTitle>MARIKOMERC GRUPA</BoldTitle>
            <Kontakt
              href="https://www.google.com/maps/@44.1751437,15.3570071,19.73z?entry=ttu"
              target="_blank"
            >
              Google Maps
            </Kontakt>
            <Kontakt
              href="https://www.instagram.com/marikomerc"
              target="_blank"
            >
              Instagram
            </Kontakt>
            <Kontakt href="https://www.facebook.com/marikomerc" target="_blank">
              Facebook
            </Kontakt>
          </Box>
          <Box>
            <BoldTitle>DI MARIS</BoldTitle>
            <Kontakt
              href="https://www.google.com/maps/@44.1197623,15.2271416,21z?entry=ttu"
              target="_blank"
            >
              Google Maps
            </Kontakt>
            <Kontakt
              href="https://www.instagram.com/dimaris_croatia"
              target="_blank"
            >
              Instagram
            </Kontakt>
            <Kontakt href="https://www.facebook.com/dimaris.hr" target="_blank">
              Facebook
            </Kontakt>
          </Box>{" "}
          <Box>
            <BoldTitle>MLS LOGISTIKA</BoldTitle>
            <Kontakt
              href="https://www.google.com/maps/@44.1751437,15.3570071,19.73z?entry=ttu"
              target="_blank"
            >
              Google Maps
            </Kontakt>
            <Kontakt
              href="https://www.instagram.com/marikomerc_logistics_solutions"
              target="_blank"
            >
              Instagram
            </Kontakt>
          </Box>
        </WrapDown>
      </Container>
    </WrapAll>
  );
}

export default KontaktSection;
