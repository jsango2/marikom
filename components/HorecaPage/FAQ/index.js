import {
  WrapAll,
  HorecaWrapImage,
  HorecaContent,
  HorecaAccordion,
  AccordionTitle,
  WrapImage,
} from "./style.js";

import "bootstrap/dist/css/bootstrap.min.css";
import useWindowSize from "../../helper/usewindowsize";
import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";
import { useRouter } from "next/router.js";
import { useInView } from "react-intersection-observer";
import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";

// import {
//   Accordion,
//   AccordionBody,
//   AccordionHeader,
//   AccordionItem,
// } from "reactstrap";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { useState } from "react";
const ItemWithChevron = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <div className="chevron-down">
          <IoIosArrowDown />
        </div>
        {/* <img className="chevron-down" src={chevronDown} alt="Chevron Down" /> */}
      </>
    }
  />
);
const AccordionItem = styled(ItemWithChevron)`
  &:last-child {
    border-bottom: none;
  }
  border-bottom: 1px solid #cccccc36;
  a {
    color: var(--Prussian-blue, #0e3151);
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 12px 0;
    text-decoration: none;
  }
  .szh-accordion__item {
    &-btn {
      cursor: pointer;
      display: flex;
      align-items: center;
      width: 100%;
      margin: 0;
      padding: 1.8rem;
      text-align: left;
      color: #fff !important;
      background-color: #0c0b6200 !important;
      font-family: Roboto;
      font-size: 18px !important;
      font-style: normal;
      font-weight: 600;
      line-height: 120%;
      background-color: transparent;
      border: none;
      /* &:hover {
        background-color: #f3f3f3;
      } */
    }

    &-content {
      transition: height 0.25s cubic-bezier(0, 0, 0, 1);
    }

    &-panel {
      padding: 1rem;
      transition: height 2.25s cubic-bezier(0, 0, 0, 1);
    }
  }

  .chevron-down {
    margin-left: auto;
    transition: transform 0.25s cubic-bezier(0, 0, 0, 1);
  }
  /* &:nth-child(3) .chevron-down {
    display: none;
  }
  &:last-child .chevron-down {
    display: none;
  } */
  &:nth-child(2).szh-accordion__item-content {
    height: 0 !important;
  }
  &:last-child .szh-accordion__item-content {
    height: 0 !important;
  }
  .szh-accordion__item-panel {
    color: hsla(0, 0%, 100%, 0.6);
    font-family: Gilroy;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    padding: 20px 20px 40px;
  }

  &.szh-accordion__item--expanded {
    .szh-accordion__item-btn {
      background-color: #e7e7e7;
    }
    .chevron-down {
      transform: rotate(180deg);
    }
  }
`;
function FAQ({ props }) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });

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
        <HorecaAccordion ref={ref}>
          <AccordionTitle>{t.Horeca.FAQ}</AccordionTitle>
          {/* <Accordion flush open={open} toggle={toggle}>
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
          </Accordion> */}
          <Accordion transition transitionTimeout={250}>
            <AccordionItem header={t.Horeca.accordion1Title}>
              {t.Horeca.accordion1Text}
            </AccordionItem>
            <AccordionItem header={t.Horeca.accordion2Title}>
              {t.Horeca.accordion2Text}
            </AccordionItem>
            <AccordionItem header={t.Horeca.accordion3Title}>
              {t.Horeca.accordion3Text}
            </AccordionItem>
            <AccordionItem header={t.Horeca.accordion4Title}>
              {t.Horeca.accordion4Text}
            </AccordionItem>{" "}
            <AccordionItem header={t.Horeca.accordion5Title}>
              {t.Horeca.accordion5Text}
            </AccordionItem>
          </Accordion>
        </HorecaAccordion>
        <HorecaWrapImage
          className={` ${inView ? "inViewPhoto" : "outViewPhoto"}`}
        ></HorecaWrapImage>
      </HorecaContent>
    </WrapAll>
  );
}

export default FAQ;
