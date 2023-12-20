import Piktogram from "./piktogram/index.js";
import {
  WrapAll,
  WrapImage2,
  Overlay,
  WrapBg,
  Title,
  Text,
  WrapImage,
  WrapCerts,
} from "./style.js";
import Image from "next/image";

import overlay from "../../assets/images/overlay.png";
import ProizvodiCLoud from "./proizvodiCloud/index.js";
import { useRouter } from "next/router";
import en from "../../locales/en.json";
import hr from "../../locales/hr.json";
function ProizvodiSection() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
  return (
    <WrapAll>
      <Piktogram />
      <WrapImage2>
        <Overlay>
          <Image src={overlay} alt="overlay" layout="fill" objectFit="cover" />
        </Overlay>
        <WrapBg>
          <Image src="/more2.webp" alt="bg" layout="fill" objectFit="cover" />
        </WrapBg>
        <Title>{t.Products.title}</Title>
        <Text>{t.Products.subTitle}</Text>
        <ProizvodiCLoud />
        <WrapCerts>
          <WrapImage>
            <Image src="/certifikat/MSC.svg" height={62} width={173} />
          </WrapImage>
          <WrapImage>
            <Image src="/certifikat/ASC.svg" height={62} width={130} />
          </WrapImage>

          <WrapImage>
            <Image src="/certifikat/IFSfood.svg" height={62} width={113} />
          </WrapImage>

          <WrapImage>
            {" "}
            <Image src="/certifikat/zivjetizdravo.svg" height={62} width={85} />
          </WrapImage>

          <WrapImage>
            {" "}
            <Image src="/certifikat/ISO9001.svg" height={62} width={70} />
          </WrapImage>
        </WrapCerts>
      </WrapImage2>
    </WrapAll>
  );
}

export default ProizvodiSection;
