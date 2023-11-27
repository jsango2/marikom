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

import Image from "next/image";
function CertifikatMobileSection() {
  return (
    <WrapAll>
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
      <Title>Posvećeni smo održivosti, a svoje procese certificiramo</Title>
      <WrapPhotos>
        <WrapPhoto>
          {" "}
          <Image src={p1} alt="Picture 1" layout="fill" objectFit="cover" />
        </WrapPhoto>{" "}
        <PhotoTitle>ODGOVORNI RIBOLOV</PhotoTitle>
        <PhotoSubTitle>
          U kategorijama svježih, smrznutih i rashlađenih proizvoda...
        </PhotoSubTitle>
        <ViseInfo>
          Vise informacija <ArrowRight />
        </ViseInfo>
        <WrapPhoto>
          <Image src={p2} alt="Picture 2" layout="fill" objectFit="cover" />
        </WrapPhoto>{" "}
        <PhotoTitle>CERTIFICIRANA KVALITETA</PhotoTitle>
        <PhotoSubTitle>
          Kvalitetu, održivost, hladni lanac i porijeklo naših proizvodima
          nastojimo potvrditi certifikatima kao potvrdom vrijednosti u koje
          vjerujemo.
        </PhotoSubTitle>
        <ViseInfo>
          Vise informacija <ArrowRight />
        </ViseInfo>
        <WrapPhoto>
          <Image src={p3} alt="Picture 3" layout="fill" objectFit="cover" />
        </WrapPhoto>
        <PhotoTitle>MARIKOMERC GARANCIJA KVALITETE</PhotoTitle>
        <PhotoSubTitle>
          U kategorijama svježih, smrznutih i rashlađenih proizvoda...
        </PhotoSubTitle>
        <ViseInfo>
          Vise informacija <ArrowRight />
        </ViseInfo>
      </WrapPhotos>
    </WrapAll>
  );
}

export default CertifikatMobileSection;
