import { WrapDogadjaj, Line, Title, Year, Text, DashedLine } from "./style.js";

import Image from "next/image";
import Link from "next/link";
import img1 from "../../../assets/images/nasaPrica/oNama/image1.png";

function Dogadjaj({ godina, text }) {
  return (
    <WrapDogadjaj>
      <DashedLine />

      <Line />
      <Year>{godina}</Year>
      <Text>{text}</Text>
    </WrapDogadjaj>
  );
}

export default Dogadjaj;
