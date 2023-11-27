import {
  WrapAll,
  Container,
  Title,
  Text,
  Datum,
  ViseInfo,
  BlueLine,
} from "./style.js";
import ArrowRight from "../../../svg/arrowRight.svg";
import Link from "next/link";

function NewsCard({ datum, naslov, text, link }) {
  return (
    <WrapAll>
      <BlueLine />
      <Datum>{datum}</Datum>
      <Title>{naslov}</Title>
      <Text>{text}</Text>

      <ViseInfo href={link}>
        Vise informacija <ArrowRight />
      </ViseInfo>
    </WrapAll>
  );
}

export default NewsCard;
