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

const Kartice = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
  // const size = useWindowSize();
  return (
    <WrapAll>
      <WrapKartica>
        <Content>
          <BlueLine />
          <UpTitle>{t.Prerada.upTitle1}</UpTitle>
          <Title>{t.Prerada.title1}</Title>
          <Text>{t.Prerada.text1}</Text>
        </Content>
        <Photo1 bg="/prerada/p1.webp"></Photo1>
      </WrapKartica>
      <WrapKartica>
        <Content>
          <BlueLine />
          <UpTitle>{t.Prerada.upTitle2}</UpTitle>
          <Title>{t.Prerada.title2}</Title>
          <Text dangerouslySetInnerHTML={{ __html: t.Prerada.text2 }}></Text>
        </Content>
        <Photo2 bg="/prerada/p2.webp"></Photo2>
      </WrapKartica>{" "}
      <WrapKartica>
        <Content>
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
      </WrapKartica>
    </WrapAll>
  );
};

export default Kartice;
