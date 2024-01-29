import {
  Title,
  WrapAll,
  WrapCards,
  TopImage,
  ImageAbsolute,
  TextTopImage,
  OverlayTop,
} from "./style.js";

// import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";
import en from "../../locales/en.json";
import hr from "../../locales/hr.json";
import Card from "./card/index.js";
import { useScrollPercentage } from "react-scroll-percentage";
import Image from "next/image.js";
function CertifikatSection() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
  const [ref, percentage] = useScrollPercentage({
    /* Optional options */
    threshold: 0,
  });
  // const { ref, inView, entry } = useInView({
  //   /* Optional options */
  //   threshold: 0,
  //   triggerOnce: true,
  // });
  // ref={ref}
  return (
    <WrapAll>
      <Title>{t.Certifikat.topTitle}</Title>
      <WrapCards>
        <Card
          image="/p1.webp"
          title={t.Certifikat.title1}
          text={t.Certifikat.text1}
          certMSC
          certASC
        />
        <Card
          image="/p2.webp"
          title={t.Certifikat.title2}
          text={t.Certifikat.text2}
          certZZ
          certIFS
          certISO
        />
        <Card
          image="/p3.webp"
          title={t.Certifikat.title3}
          text={t.Certifikat.text3}
        />
      </WrapCards>
      {/* <TopImage ref={ref}>
        <ImageAbsolute percentage={percentage} />
        <TextTopImage>
          <a href="https://www.youtube.com">
            <Image src="/playIcon.svg" width={40} height={40} />
          </a>
          Izdvojite 2 minute i saznajte zašto smo najbolji u onom što radimo.
        </TextTopImage>
        <OverlayTop />
      </TopImage> */}
    </WrapAll>
  );
}

export default CertifikatSection;
