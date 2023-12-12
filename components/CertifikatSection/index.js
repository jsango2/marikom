import {
  PhotoSubTitle,
  PhotoTitle,
  Title,
  ViseInfo,
  WrapAll,
  WrapPhoto,
  WrapPhotos,
  Overlay,
  WrapCert,
  WrapCert2,
  WrapCerts,
} from "./style.js";
import p1 from "../../assets/images/certifikat/p1.png";
import p2 from "../../assets/images/certifikat/p2.png";
import p3 from "../../assets/images/certifikat/p3.png";
import ArrowRight from "../../svg/arrowRightWhite.svg";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";
import en from "../../locales/en.json";
import hr from "../../locales/hr.json";

import Image from "next/image";
function CertifikatSection() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <WrapAll>
      <Title>{t.Certifikat.topTitle}</Title>
      <WrapPhotos ref={ref}>
        <WrapPhoto className={` ${inView ? "inView" : "outView"}`}>
          {" "}
          <Overlay />
          <Image src={p1} alt="Picture 1" layout="fill" objectFit="cover" />
          <PhotoTitle>{t.Certifikat.title1}</PhotoTitle>
          <PhotoSubTitle>{t.Certifikat.text1}</PhotoSubTitle>
          {/* <ViseInfo>
            Vise informacija <ArrowRight />
          </ViseInfo> */}
          <WrapCerts>
            <WrapCert>
              <Image
                src="/cert1.svg"
                alt="Picture 1"
                layout="fill"
                objectFit="cover"
              />
            </WrapCert>
            <WrapCert2>
              <Image
                src="/cert2.svg"
                alt="Picture 1"
                layout="fill"
                objectFit="cover"
              />

              {/* <Cert2 /> */}
            </WrapCert2>
          </WrapCerts>
        </WrapPhoto>
        <WrapPhoto className={` ${inView ? "inView" : "outView"}`}>
          <Overlay />{" "}
          <Image src={p2} alt="Picture 2" layout="fill" objectFit="cover" />
          <PhotoTitle>{t.Certifikat.title2}</PhotoTitle>
          <PhotoSubTitle>{t.Certifikat.text2}</PhotoSubTitle>
          {/* <ViseInfo>
            Vise informacija <ArrowRight />
          </ViseInfo> */}
          <WrapCerts>
            <WrapCert>
              <Image
                src="/zivjetiZdravo.svg"
                alt="Picture 1"
                layout="fill"
                objectFit="contain"
              />
            </WrapCert>
            <WrapCert2>
              <Image
                src="/IFSfood.svg"
                alt="Picture 1"
                layout="fill"
                objectFit="contain"
              />

              {/* <Cert2 /> */}
            </WrapCert2>
            <WrapCert2>
              <Image
                src="/ISO9001.svg"
                alt="Picture 1"
                layout="fill"
                objectFit="contain"
              />

              {/* <Cert2 /> */}
            </WrapCert2>
          </WrapCerts>
        </WrapPhoto>{" "}
        <WrapPhoto className={` ${inView ? "inView" : "outView"}`}>
          <Overlay />{" "}
          <Image src={p3} alt="Picture 3" layout="fill" objectFit="cover" />
          <PhotoTitle>{t.Certifikat.title3}</PhotoTitle>
          <PhotoSubTitle>{t.Certifikat.text3}</PhotoSubTitle>
          {/* <ViseInfo>
            Vise informacija <ArrowRight />
          </ViseInfo> */}
        </WrapPhoto>
      </WrapPhotos>
    </WrapAll>
  );
}

export default CertifikatSection;
