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

const Kartice = () => {
  // const size = useWindowSize();
  return (
    <WrapAll>
      <WrapKartica>
        <Content>
          <BlueLine />
          <UpTitle>POGON ZA PRERADU U POLIČNIKU</UpTitle>
          <Title>Održivost kao misija na kojoj temeljimo poslovanje</Title>
          <Text>
            Za djelovanje u području održivosti ističemo činjenicu da sunčanom
            elektranom pokrivamo 52% vlastitih potreba energije,
            biopročiščivaćem saniramo sve otpadne vode, a vozni park okrećemo
            prema alternativnim rješenjima s ciljem smanjenja emisije CO2. Uz
            to, svu ambalažu izrađujemo od recikliranih materijala te najveći
            dio otpada recikliramo po najvišim standardima.
          </Text>
        </Content>
        <Photo1 bg="/prerada/p1.webp"></Photo1>
      </WrapKartica>
      <WrapKartica>
        <Content>
          <BlueLine />
          <UpTitle>ODRžIVOST OBJEKTA</UpTitle>
          <Title>Objekt koji pazi na okoliš</Title>
          <Text>
            Želimo da nam je objekt ekološki prihvatljiv i dugoročno održiv.
            Isto uspijevamo na način da osiguravamo prilagodljivost planiranja
            promjenama okoliša, potrebama korisnika i ekonomske održivosti te da
            minimaliziramo potrošnju energije i optimiziramo procese:
            <ul>
              <li>
                100 % prerađenost tehnoloških otpadnih voda unutar vlastitog
                pogona
              </li>
              <li>
                100 % nusproizvoda kategorije III predano u daljnju reciklažu
              </li>
              <li>
                100 % odvajanje i razvrstavanje otpada u vlastitom reciklažnom
                dvorištu
              </li>
              <li>
                100 % korištenje reciklabilnih kutija za pakiranje proizvoda
              </li>
              <li>
                100 % pokrivenost proizvodnih prostora sa sustavom ventilacije i
                pročišćavanja atmosferskog zraka
              </li>
              <li>100 % socijalna održivost putem sigurnosti objekta</li>
              <li>
                55 % potreba energije su iz vlastite proizvodnje putem SE
                Marikomerc
              </li>
            </ul>
          </Text>
        </Content>
        <Photo2 bg="/prerada/p2.webp"></Photo2>
      </WrapKartica>{" "}
      <WrapKartica>
        <Content>
          <BlueLine />
          <UpTitle>CERTIFIKATI I SIGURNOST</UpTitle>
          <Title>Certifikati </Title>
          <Text>
            Naš stručni tim pažljivo prati i kontrolira proizvode u svakoj fazi,
            od prijema robe, preko prerade do krajnjih potrošača, kako bi
            osigurali visoku razinu kvalitete i plasirali proizvode na tržište u
            skladu s najvišim standardima. U svim segmentima poslovanja veliku
            brigu posvećujemo održivosti i okolišu, te time doprinosimo većoj
            kvaliteti životnih uvjeta nama i generacijama koje dolaze. Kao dokaz
            navedenom, Marikomerc je certificirao svoje procese kroz niz
            certifikata za sigurnost hrane, održivost i upravljanje kvalitetom.
          </Text>
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
