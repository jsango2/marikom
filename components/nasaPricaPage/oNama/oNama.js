import {
  WrapKarijere,
  Content,
  Photos,
  WrapPhoto,
  UpTitle,
  Text,
  Title,
  PonudaLink,
  BlueLine,
  WrapAll,
} from "./style.js";

import Image from "next/image";
import Link from "next/link";
import img1 from "../../../assets/images/nasaPrica/oNama/image1.png";

function Onama() {
  return (
    <WrapAll>
      <WrapKarijere>
        <Content>
          <BlueLine />
          <UpTitle>O NAMA</UpTitle>
          <Title>
            Naša je misija podijeliti zdravu, pravu i ukusnu kulturu hrane sa
            svima.
          </Title>
          <Text>
            Prerada, trgovina i distribucija smrznutim ribljim proizvodima naša
            je primarna djelatnost. Brinemo o moru i našim kupcima i iz tog
            razloga nikad ne prihvaćamo kompromise u pogledu kvalitete naših
            proizvoda, tražeći garancije za svaki dio opskrbnog lanca, od
            ribarskog broda do prodajnog mjesta.
            <br />
            <br /> Osim prerade, trgovine i distribucije ribe, distribuiramo i
            druge proizvode, a izgradnjom novog pogona u 2021. godini i
            formiranjem moderne flote transportnih vozila okrećemo se i novim
            poslovnim ciljevima poput osnivanja tvrtke MLS logistika, širenja
            lanca butique ribarnica Di Maris i razvojem ugostiteljske franšize
            Deli Maris Fish&Chips. <br />
            <br /> Poslujemo više od 30 godina i veselimo se sljedećih 30
            godina.
          </Text>
        </Content>
        <Photos>
          <WrapPhoto>
            <Image
              src={img1}
              alt="image warehouse"
              layout="fill"
              objectFit="cover"
            />
          </WrapPhoto>
        </Photos>
      </WrapKarijere>
    </WrapAll>
  );
}

export default Onama;
