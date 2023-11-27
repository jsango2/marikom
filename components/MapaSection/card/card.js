import React from "react";
import { WrapAll, Graphic, Title, Text } from "./style.js";
import Image from "next/image";

export const Card = ({ Grafika, title, text, gradient, inview }) => {
  return (
    <WrapAll gradient={gradient} className={inview}>
      <Graphic>
        <Grafika />
      </Graphic>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </WrapAll>
  );
};
