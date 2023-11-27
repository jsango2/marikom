import Piktogram from "./piktogram/index.js";
import {
  WrapAll,
  WrapImage2,
  Overlay,
  WrapBg,
  Title,
  Text,
  WrapCerts,
} from "./style.js";
import Image from "next/image";
import p1 from "../../assets/images/podmorjeSm.png";
import Certs from "../../assets/images/LogotipiCert.png";
import overlay from "../../assets/images/overlay.png";
import ProizvodiCLoud from "./proizvodiCloud/index.js";
function ProizvodiSection() {
  return (
    <WrapAll>
      <Piktogram />
      <WrapImage2>
        <Overlay>
          <Image src={overlay} alt="overlay" layout="fill" objectFit="cover" />
        </Overlay>
        <WrapBg>
          <Image src={p1} alt="bg" layout="fill" objectFit="cover" />
        </WrapBg>
        <Title>PROIZVODI</Title>
        <Text>
          Nudimo širok izbor smrznutih, svježih, dimljenih, sušenih, mariniranih
          i usoljenih morskih proizvoda. Također, u ponudi imamo McCain program,
          smrznuto povrće, tjesteninu, meso i veganske supstitute za meso.
        </Text>
        <ProizvodiCLoud />
        <WrapCerts>
          <Image src={Certs} alt="overlay" layout="fill" objectFit="cover" />
        </WrapCerts>
      </WrapImage2>
    </WrapAll>
  );
}

export default ProizvodiSection;
