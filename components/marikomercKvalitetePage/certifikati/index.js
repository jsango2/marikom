import {
  ContentWrap,
  WrapAllCertifikati,
  HeroWrap,
  Overlay,
  UpTitle,
  Title,
  Text,
  TextBox,
  WrapCerts,
} from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import useWindowSize from "../../helper/usewindowsize.js";
import { Link as Veza } from "react-scroll";
import Companies from "../../hero/companies/index.js";
import Image from "next/image";
import hero from "../../../assets/images/nasaPrica/hero.png";
import PhotosRow from "../../ProizvodiSection/piktogram/index.js";
import Cert from "./cert.js";

const Certifikati = () => {
  const size = useWindowSize();
  return (
    <>
      <WrapAllCertifikati>
        <PhotosRow />
        <ContentWrap>
          <TextBox>
            <UpTitle>CERTIFIKATI</UpTitle>
            <Title>
              Kvalitetu, sigurnost hrane, održivost i podrijetlo naših proizvoda
              potvrđujemo brojnim, zasluženim certifikatima
            </Title>
            <Text>
              Kvalitetu, održivost, hladni lanac i porijeklo naših proizvodima
              nastojimo potvrditi certifikatima kao potvrdom vrijednosti u koje
              vjerujemo.
            </Text>
          </TextBox>
          <WrapCerts>
            <Cert
              text="MSC (Marine Stewardship Council) i ASC (Aquaculture Stewardship Council) međunarodne su neprofitne organizacije čiji je cilj zaštita oceana i očuvanja ribljeg fonda budućim generacijama kao i ekološki i društveno prihvatljiv uzgoj proizvoda od ribe i plodova mora. Naša tvrtka ulaskom u MSC/ASC svijet, postala je dio jedne održive, ekološki osviještene priče."
              MSC
              ASC
            />
            <Cert
              ISO
              text="Sustav upravljanja kvalitetom mora biti usklađen s potrebama tvrtke, te proizvodima i uslugama koje pružamo, a ISO 9001 standard daje smjernice kako bismo bili sigurni da nismo propustili važne elemente potrebne za uspješan sustav. Kao međunarodni standard, prepoznat je kao temelj na kojemu će svaka tvrtka izgraditi sustav koji će osigurati zadovoljstvo kupaca i unaprjeđenje, i kao takvog, mnoge tvrtke ga zahtijevaju kao minimalan uvjet da bi neka organizacija mogla postati dobavljač."
            />
            <Cert
              IFS
              text="International Featured Standard (IFS) rezultat je udruživanja vodećih međunarodnih trgovačkih lanaca i dobavljača koji su prepoznali sigurnost hrane kao prioritet u svome poslovanju. Marikomerc d.o.o tako je od 2022. godine certificiran od strane međunarodne certifikacijske kuće SGS Adriatic po IFS Food normi, višoj razini ispunjenja zahtjeva odnosno s ocjenom višom od 95% ispunjenja zahtjeva norme (“higher level”)."
            />
            <Cert
              ZZ
              text='Kao ponosni nositelj jamstvenog žiga „Živjeti zdravo", Marikomerc surađuje sa Zavodom za javno zdravstvo s ciljem promoviranja pravilne prehrane i jačanja svijesti o važnosti nutritivno vrijedne hrane. Ovim žigom jamčimo kupcima da označeni proizvod i odgovaraju visokim standardima kvalitete i da su upravo te proizvode stručnjaci analizirali i preporučili kao dio umjerene, uravnotežene i raznolike prehrane.'
            />
          </WrapCerts>
        </ContentWrap>
      </WrapAllCertifikati>
      {/* <Companies /> */}
    </>
  );
};

export default Certifikati;
