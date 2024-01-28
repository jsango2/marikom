import {
  WrapCard,
  WrapImage,
  WrapText,
  Title,
  Text,
  WrapCerts,
} from "./style.js";

import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";
import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";

import Image from "next/image";
function Card({
  image,
  title,
  text,
  certMSC,
  certASC,
  certZZ,
  certIFS,
  certISO,
}) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <WrapCard ref={ref} className={` ${inView ? "inViewCert" : "outViewCert"}`}>
      <WrapImage bg={image}>
        <WrapCerts>
          {certMSC && (
            <Image src="/certifikat/MSC.svg" width={121} height={50} />
          )}
          {certASC && (
            <Image src="/certifikat/ASC.svg" width={96} height={50} />
          )}
          {certZZ && (
            <Image src="/certifikat/zivjetizdravo.svg" width={69} height={54} />
          )}
          {certIFS && (
            <Image src="/certifikat/IFSfood.svg" width={90} height={54} />
          )}
          {certISO && (
            <Image src="/certifikat/ISO9001.svg" width={57} height={54} />
          )}
        </WrapCerts>
      </WrapImage>
      <WrapText>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </WrapText>
    </WrapCard>
  );
}

export default Card;
