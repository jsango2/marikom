import {
  WrapAll,
  HorecaWrapImage,
  HorecaContent,
  HorecaAccordion,
  AccordionTitle,
} from "./style.js";

import "bootstrap/dist/css/bootstrap.min.css";
import useWindowSize from "../../helper/usewindowsize";
import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";
import { useRouter } from "next/router.js";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import { useState } from "react";
function FAQ(props) {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  const { locale } = useRouter();

  const t = locale === "en" ? en : hr;
  const size = useWindowSize();
  return (
    <WrapAll>
      <HorecaContent>
        <HorecaAccordion>
          <AccordionTitle>{t.Horeca.FAQ}</AccordionTitle>
          <Accordion flush open={open} toggle={toggle}>
            <AccordionItem className="accordionItem">
              <AccordionHeader targetId="1" className="accordionHeader">
                {t.Horeca.accordion1Title}
              </AccordionHeader>
              <AccordionBody accordionId="1" className="accordionBody">
                {t.Horeca.accordion1Text}
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="2">
                {t.Horeca.accordion2Title}
              </AccordionHeader>
              <AccordionBody accordionId="2">
                {t.Horeca.accordion2Text}
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="3">
                {t.Horeca.accordion3Title}
              </AccordionHeader>
              <AccordionBody accordionId="3">
                {t.Horeca.accordion3Text}
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="4">
                {t.Horeca.accordion4Title}
              </AccordionHeader>
              <AccordionBody accordionId="4">
                {t.Horeca.accordion4Text}
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="5">
                {t.Horeca.accordion5Title}
              </AccordionHeader>
              <AccordionBody accordionId="5">
                {t.Horeca.accordion5Text}
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </HorecaAccordion>
        <HorecaWrapImage></HorecaWrapImage>
      </HorecaContent>
    </WrapAll>
  );
}

export default FAQ;
