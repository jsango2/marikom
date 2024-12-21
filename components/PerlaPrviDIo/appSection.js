import {
  WrapAppSection,
  AppText,
  MobileText,
  MobileTitle,
  MobileTopTitle,
  MobiletopText,
  Mobiles,
  WrapAppStore,
  Google,
  AppStore,
  Mobile1,
  Mobile2,
} from "./style.js";

import Image from "next/image";
import { useScrollPercentage } from "react-scroll-percentage";

import Mob1 from "../../assets/images/Mob1.webp";
import Mob2 from "../../assets/images/Mob2.webp";
import AppStoreimg from "../../assets/images/appstore.png";
import GoogleImg from "../../assets/images/googleplay.png";
import useWindowSize from "../helper/usewindowsize.js";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";

import { useRouter } from "next/router.js";
import en from "../../locales/en.json";
import hr from "../../locales/hr.json";
function AppSection() {
  // const [style2, setStyle2] = useState({});
  const size = useWindowSize();

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
  // const interactivity = {
  //   mode: "scroll",
  //   actions: [
  //     {
  //       visibility: [0.2, 1.0],
  //       type: "play",
  //       frames: [0, 24],
  //     },
  //     {
  //       visibility: [0.2, 1.0],
  //       type: "stop",
  //       frames: [25],
  //     },
  //   ],
  // };

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: false,
  });

  const [ref2, percentage] = useScrollPercentage({
    /* Optional options */
    threshold: 0,
  });

  return (
    <WrapAppSection>
      <AppText>
        <MobileTopTitle>Prednosti poslovanja s nama</MobileTopTitle>
        <MobileTitle>
          Sve što trebate za jednostavno poslovanje – Marikomerc App
        </MobileTitle>
        <MobiletopText>Laka navigacija</MobiletopText>
        <MobileText>Brzo pretraživanje i naručivanje</MobileText>
        <MobiletopText> Spremanje narudžbi</MobiletopText>
        <MobileText>
          Pratite povijest svojih narudžbi izravno u aplikaciji i optimizirajte
          svoje zalihe
        </MobileText>
        <MobiletopText>Personalizirane ponude </MobiletopText>
        <MobileText>
          Kreirajte popis svojih omiljenih proizvoda i uživajte u ekskluzivnim
          ponudama prilagođenima vašim potrebama.
        </MobileText>
        <MobiletopText>Podrška korisnicima</MobiletopText>
        <MobileText>
          Naš tim za podršku je tu da vam osigura brzo i jednostavno iskustvo
          naručivanja
        </MobileText>
        <WrapAppStore>
          <a
            href="https://apps.apple.com/hr/app/marikomerc/id6503952124"
            target="_blank"
          >
            <Google>
              <Image
                src={AppStoreimg}
                alt="Mobile"
                layout="fill"
                objectFit="contain"
              />
            </Google>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=net.croz.marikomerc&hl=hr&pli=1"
            target="_blank"
          >
            <AppStore>
              <Image
                src={GoogleImg}
                alt="Mobile"
                layout="fill"
                objectFit="contain"
              />
            </AppStore>
          </a>
        </WrapAppStore>
      </AppText>
      <Mobiles ref={ref}>
        <Mobile1 inView={inView}>
          <Image src={Mob1} alt="Mobile" layout="fill" objectFit="contain" />
        </Mobile1>
        <Mobile2 inView={inView}>
          <Image src={Mob2} alt="Mobile" layout="fill" objectFit="contain" />
        </Mobile2>
      </Mobiles>
    </WrapAppSection>
  );
}

export default AppSection;
