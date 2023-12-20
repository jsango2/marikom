import {
  WrapContent,
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
      <WrapContent>
        <Content>
          <BlueLine />
          <UpTitle>O NAMA</UpTitle>
          <Title>
            Visoka kvaliteta i briga o okolišu su fokus našeg poslovanja
          </Title>
          <Text>
            Visoka kvaliteta i briga o okolišu su fokus našeg poslovanja
            Praćenjem i osmišljavanjem tržišnih trendova razvili smo i proizveli
            linije proizvoda prilagođene segmentima HoReCa i RETAIL. Ponosni smo
            nositelji certifikata IFS Food za sigurnost hrane te ISO 9001 za
            upravljanje kvalitetom. Također smo nositelji jamstvenog žiga
            ŽIVJETI ZDRAVO kojim jamčimo kupcima da označeni proizvodi
            odgovaraju visokim standardima i da su upravo te proizvode
            stručnjaci analizirali i preporučili kao dio umjerene, uravnotežene
            i raznolike prehrane. Naš stručni tim pažljivo prati i kontrolira
            proizvode u svakoj fazi, od prijema robe, preko prerade do krajnjih
            potrošača, kako bi osigurali visoku razinu kvalitete i plasirali
            proizvode na tržište u skladu s najvišim standardima. <br />
            <br /> U svim segmentima poslovanja veliku brigu posvećujemo
            održivosti i okolišu te time doprinosimo većoj kvaliteti životnih
            uvjeta nama i generacijama koje dolaze. Posebnu pozornost
            posvećujemo zaštiti oceana i očuvanju ribljih fondova što
            potvrđujemo MSC/ ASC certifikatima koji garantiraju odgovoran ulov i
            uzgoj ribe. Kompletan logistički objekt koristi električnu energiju
            na ekološki održiv način, putem solarnih panela, čime minimaliziramo
            negativan utjecaj na okoliš. Kontinuirano razvijamo proizvode s
            dodanom vrijednošću i ekološkom ambalažom kako bismo standardizirali
            kvalitetu konačnih proizvoda te olakšali pripremu krajnjim kupcima.
            Poslujemo više od 30 godina i idemo ususret godinama koje dolaze
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
      </WrapContent>
    </WrapAll>
  );
}

export default Onama;
