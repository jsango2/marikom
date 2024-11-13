import Image from "next/image";
import {
  WrapAll,
  WrapContent,
  Left,
  Right,
  Title,
  MainTitle,
  TopText,
  SingleFact,
  Numbers,
  Number,
  WrapNumberText,
  Fact,
  ThinLine,
  TextFact,
  Line,
  Wrap,
  Overlay,
  BlueLine,
  Elipse,
  Up,
  Down,
  BgMore,
} from "./style.js";

import viljuskar from "../../assets/images/viljuskar.webp";
import { useRouter } from "next/router.js";
import en from "../../locales/en.json";
import hr from "../../locales/hr.json";
import { useInView } from "react-intersection-observer";
// import { useScrollPercentage } from "react-scroll-percentage";

function BGmore() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
  // const [ref, percentage] = useScrollPercentage({
  //   /* Optional options */
  //   threshold: 0,
  // });

  return <BgMore ref={ref} />;
}

export default BGmore;
