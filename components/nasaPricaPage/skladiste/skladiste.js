import { WrapAll } from "./style.js";

import Image from "next/image";
import { BlueLine, WrapSkladiste, WrapImage } from "./style.js";
// import Lottie from "lottie-react";
// import katalogAnimation from "../../../animations/katalogVideo/katalogANimation";
import { useScrollPercentage } from "react-scroll-percentage";
function Skladiste() {
  const [ref, percentage] = useScrollPercentage({
    /* Optional options */
    threshold: 0,
  });

  // const interactivity = {
  //   mode: "scroll",
  //   actions: [
  //     {
  //       visibility: [0.1, 2],
  //       type: "seek",
  //       frames: [1, 35],
  //     },
  //   ],
  // };
  return (
    <WrapSkladiste ref={ref}>
      {/* <BlueLine /> */}
      <WrapImage percentage={percentage}>
        <Image src="/oNamaTemp.webp" alt="p1" layout="fill" objectFit="cover" />
      </WrapImage>
      {/* <Lottie
        animationData={katalogAnimation}
        interactivity={interactivity}
        // autoPlay={true}
        loop={false}
      /> */}
    </WrapSkladiste>
  );
}

export default Skladiste;
