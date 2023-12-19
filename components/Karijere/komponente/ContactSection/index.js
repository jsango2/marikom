import {
  ContactSectionHeadingOne,
  ContactSectionHeadingTwo,
  ContactSectionImage,
  ContactSectionImageStack,
  ContactSectionWrapper,
} from "./style";
import en from "../../../../locales/en.json";
import hr from "../../../../locales/hr.json";
import { useRouter } from "next/router";
import parse from "html-react-parser";

const ContactSection = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : hr;
  const sourceArray = [
    {
      src: "../contact-section-img/17.jpg",
    },
    {
      src: "../contact-section-img/18.jpg",
    },
    {
      src: "../contact-section-img/19.jpg",
    },
  ];
  return (
    <ContactSectionWrapper>
      <ContactSectionHeadingOne>
        {parse(t.Karijere.zivotopisi)}
      </ContactSectionHeadingOne>
      <ContactSectionHeadingTwo>
        {parse(t.Karijere.nismoSamo)}
      </ContactSectionHeadingTwo>

      <ContactSectionImageStack>
        {sourceArray.map((image, index) => (
          <ContactSectionImage key={index} imagesource={image.src} />
        ))}
      </ContactSectionImageStack>
    </ContactSectionWrapper>
  );
};

export default ContactSection;
