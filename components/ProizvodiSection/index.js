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
import { useScrollPercentage } from "react-scroll-percentage";
import { useInView } from "react-intersection-observer";
import CertsComp from "./certs.js";
function ProizvodiSection() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });
  const [ref2, percentage] = useScrollPercentage({
    /* Optional options */
    threshold: 0,
  });
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
  return (
    <WrapAll ref={ref2}>
      <Piktogram />
      <WrapImage2>
        <Overlay>
          {/* <Image src={overlay} alt="overlay" layout="fill" objectFit="cover" /> */}
        </Overlay>
        <WrapBg percentage={percentage}>
          <Image src="/more.png" alt="bg" layout="fill" objectFit="cover" />
        </WrapBg>
        <Title ref={ref} className={` ${inView ? "inView" : "outView"}`}>
          {t.Products.title}
        </Title>
        <Text>{t.Products.subTitle}</Text>
        <ProizvodiCLoud />
        <CertsComp />
      </WrapImage2>
    </WrapAll>
  );
}

export default ProizvodiSection;
