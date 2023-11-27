import { WrapFact, WrapIcon, Title, Text, BlueLine } from "./style.js";
import Image from "next/image";

function Fact({ Image, title, text }) {
  return (
    <WrapFact>
      <BlueLine />
      <WrapIcon>
        <Image />
      </WrapIcon>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </WrapFact>
  );
}

export default Fact;
