import React from "react";
import { WrapTextContetnt, Title, TitleUp, Text } from "./style.js";
const textContent = () => {
  return (
    <WrapTextContetnt>
      <TitleUp>PORIJEKLO RIBE</TitleUp>
      <Title>Odakle dolazi naša riba</Title>
      <Text>
        Smrznutu ribu i plodove mora uvozimo iz svih dijelova svijeta. U odabiru
        proizvoda uvijek smo se povodili za kvalitetom. Kvalitetni morski
        proizvodi su naša filozofija, naš brend i naša obveza prema vama.
        <br />
        <br /> Vodeći se našom filozofijom, ostvarili smo jake veze s našim
        partnerima te se na tržištu pozicionirali kao stabilna tvrtka s
        kvalitetnim proizvodima u koje možete imati potpuno povjerenje. Sve to
        činimo kako bi naši proizvodi sačuvali sve vrijednosti i karakteristike
        svježe ulovljene ribe.
      </Text>
    </WrapTextContetnt>
  );
};

export default textContent;
