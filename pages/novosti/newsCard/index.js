import {
  WrapAll,
  Container,
  Title,
  Text,
  Datum,
  ViseInfo,
  BlueLine,
  Photo,
  DataContainer,
} from "./style.js";
import ArrowRight from "../../../svg/arrowRight.svg";
import Link from "next/link";
import { useRouter } from "next/router";

function NewsCard({ datum, naslov, text, link, isFeatured }) {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  console.log(isFeatured);
  return (
    <WrapAll isFeatured={isFeatured}>
      {!isFeatured && <Photo></Photo>}
      <DataContainer>
        <BlueLine isFeatured={isFeatured} />
        <Datum>{datum}</Datum>
        <Title isFeatured={isFeatured}>{naslov}</Title>
        <Text>{text}</Text>

        <ViseInfo>
          <Link href={`/novosti/${naslov.toLowerCase().split(" ").join("-")}`}>
            Vise informacija <ArrowRight />
          </Link>
        </ViseInfo>
      </DataContainer>
    </WrapAll>
  );
}

export default NewsCard;
