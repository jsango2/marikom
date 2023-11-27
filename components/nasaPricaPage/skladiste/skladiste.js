import { WrapAll } from "./style.js";

import Image from "next/image";
import { BlueLine, WrapSkladiste } from "../../Katalog Section/style.js";
import Lottie from "lottie-react";
import katalogAnimation from "../../../animations/katalogVideo/katalogANimation";
function Skladiste() {
  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0.1, 2],
        type: "seek",
        frames: [1, 35],
      },
    ],
  };
  return (
    <WrapSkladiste>
      <BlueLine />
      {/* <Image src={skladiste} alt="p1" layout="fill" /> */}
      <Lottie
        animationData={katalogAnimation}
        interactivity={interactivity}
        // autoPlay={true}
        loop={false}
      />
    </WrapSkladiste>
  );
}

export default Skladiste;
