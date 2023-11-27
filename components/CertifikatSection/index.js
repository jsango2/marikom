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

import Image from "next/image";
function CertifikatSection() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <WrapAll>
      <Title>POSVEĆENI SMO ODRŽIVOSTI, A SVOJE PROCESE CERTIFICIRAMO</Title>
      <WrapPhotos ref={ref}>
        <WrapPhoto className={` ${inView ? "inView" : "outView"}`}>
          {" "}
          <Overlay />
          <Image src={p1} alt="Picture 1" layout="fill" objectFit="cover" />
          <PhotoTitle>ODRŽIVOST KAO TEMELJ POSLOVANJA</PhotoTitle>
          <PhotoSubTitle>
            Marikomerc grupa ima važnu ulogu u zaštiti okoliša i očuvanju
            resursa. Trudimo se ostaviti našoj djeci i budućim generacijama
            održiv svijet bez kompromisa. Ekološki smo osviješteni, te nam je
            zaštita oceana i očuvanje ribljeg fonda prioritet.
          </PhotoSubTitle>
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
          <PhotoTitle>CERTIFICIRANA KVALITETA I SIGURNOST HRANE</PhotoTitle>
          <PhotoSubTitle>
            Brojni zasluženi certifikati za sigurnost hrane, upravljanje
            kvalitetom i nutritivno bogate namirnice dokaz su naše kvalitete, a
            vaše sigurnosti i povjerenja u nas i naše proizvode.
          </PhotoSubTitle>
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
          <PhotoTitle>ZADOVOLJSTVO NAŠIH KUPACA</PhotoTitle>
          <PhotoSubTitle>
            Kupci su naša vrijednost, te je njihovo zadovoljstvo putokaz ka
            uspješnom poslovanju u budućnosti. Svake godine vršimo analizu
            zadovoljstva naših kupaca, te istim podižemo poslovne i proizvodne
            procese na najviši nivo.
          </PhotoSubTitle>
          {/* <ViseInfo>
            Vise informacija <ArrowRight />
          </ViseInfo> */}
        </WrapPhoto>
      </WrapPhotos>
    </WrapAll>
  );
}

export default CertifikatSection;
