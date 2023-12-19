import { WrapAllContactData, WrapContent } from "./style.js";

import useWindowSize from "../../helper/usewindowsize";
import Image from "next/image.js";

import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";
import { useRouter } from "next/router.js";

function ContactData() {
  const { locale } = useRouter();

  const t = locale === "en" ? en : hr;
  const size = useWindowSize();
  return (
    <WrapAllContactData>
      <WrapContent></WrapContent>
    </WrapAllContactData>
  );
}

export default ContactData;
