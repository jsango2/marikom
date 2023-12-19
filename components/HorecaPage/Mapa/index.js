import {
  MapaWrapAll,
  MapaWrapTextBlock,
  MapaWrapKarta,
  MapaContent,
  TopTitle,
  Title,
  Text,
  Button,
  Galeb1,
  Galeb2,
  Galeb3,
} from "./style.js";

import useWindowSize from "../../helper/usewindowsize";
import Image from "next/image.js";
import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";
import { useRouter } from "next/router.js";

// import "react-accessible-accordion/dist/fancy-example.css";

function Mapa() {
  const { locale } = useRouter();
  const t = locale === "en" ? en : hr;
  const size = useWindowSize();
  return (
    <MapaWrapAll>
      <MapaContent>
        <MapaWrapTextBlock>
          <TopTitle>{t.Horeca.topTitle}</TopTitle>
          <Title>{t.Horeca.Title}</Title>
          <Text>{t.Horeca.Text}</Text>
          <Button>{t.Horeca.buttonText}</Button>
        </MapaWrapTextBlock>
        <MapaWrapKarta></MapaWrapKarta>
        <Galeb1>
          <Image src="/galeb1.png" width={300} height={230} />
        </Galeb1>
        <Galeb2>
          <Image src="/galeb2.png" width={185} height={70} />
        </Galeb2>
        <Galeb3>
          <Image src="/galeb3.png" width={170} height={190} />
        </Galeb3>
      </MapaContent>
    </MapaWrapAll>
  );
}

export default Mapa;
