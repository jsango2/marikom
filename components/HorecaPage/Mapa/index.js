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

function Mapa() {
  const { locale } = useRouter();
  const t = locale === "en" ? en : hr;
  const size = useWindowSize();
  const zoom = size.width < 650 ? 5.5 : 6.8;
  return (
    <MapaWrapAll>
      <MapaContent>
        <MapaWrapTextBlock>
          <TopTitle>{t.Horeca.topTitle}</TopTitle>
          <Title>{t.Horeca.Title}</Title>
          <Text>{t.Horeca.Text}</Text>
          <Button>{t.Horeca.buttonText}</Button>
        </MapaWrapTextBlock>

        <MapaWrapKarta>
          <iframe
            width="100%"
            height="100%"
            src={`https://api.mapbox.com/styles/v1/lovreperaic/ckx4qlojc09b014tdp3ao3vuw.html?title=false&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}&zoomwheel=false#${zoom}/44.14/15.576`}
            title="Marikomerc"
            style={{ border: "none" }}
          ></iframe>
        </MapaWrapKarta>

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
