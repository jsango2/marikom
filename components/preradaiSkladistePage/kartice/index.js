import {
  WrapAll,
  UpTitle,
  Title,
  Text,
  BlueLine,
  Photo1,
  Photo2,
  Photo3,
  WrapKartica,
  WrapKartica3,
  Content,
  Overlay,
  WrapCert,
} from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
// import useWindowSize from "../../helper/usewindowsize";
import { Link as Veza } from "react-scroll";
import Image from "next/image";
import { useRouter } from "next/router.js";
import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";
import { useInView } from "react-intersection-observer";
import Kartica from "./kartica/index.js";

const Kartice = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
  // const size = useWindowSize();
  return (
    <WrapAll>
      <Kartica
        upTitle={t.Prerada.upTitle1}
        title={t.Prerada.title1}
        text={t.Prerada.text1}
        photo="/prerada/p1.webp"
      />
      <Kartica
        upTitle={t.Prerada.upTitle2}
        title={t.Prerada.title1}
        text={t.Prerada.text2}
        photo="/prerada/p2.webp"
      />
      <WrapKartica3 ref={ref}>
        <Content className={` ${inView ? "inView" : "outView"}`}>
          <BlueLine />
          <UpTitle>{t.Prerada.upTitle3}</UpTitle>
          <Title>{t.Prerada.title3}</Title>
          <Text>{t.Prerada.text3}</Text>
        </Content>
        <Photo3 bg="/prerada/p3.webp">
          <Overlay>
            <WrapCert>
              <Image src="/certifikat/ASC.svg" layout="fill" />
            </WrapCert>
            <WrapCert>
              <Image src="/certifikat/IFSfood.svg" layout="fill" />
            </WrapCert>

            <WrapCert>
              <Image src="/certifikat/MSC.svg" layout="fill" />
            </WrapCert>

            <WrapCert>
              <Image src="/certifikat/zivjetizdravo.svg" layout="fill" />
            </WrapCert>
            <WrapCert>
              <Image src="/certifikat/ISO9001.svg" layout="fill" />
            </WrapCert>
          </Overlay>
        </Photo3>
      </WrapKartica3>
    </WrapAll>
  );
};

export default Kartice;
