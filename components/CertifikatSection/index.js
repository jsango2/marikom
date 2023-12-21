import { Title, WrapAll, WrapCards } from "./style.js";

// import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";
import en from "../../locales/en.json";
import hr from "../../locales/hr.json";
import Card from "./card/index.js";
function CertifikatSection() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
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
    </WrapAll>
  );
}

export default CertifikatSection;
