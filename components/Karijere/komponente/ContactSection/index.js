import {
  ContactSectionHeadingOne,
  ContactSectionHeadingTwo,
  ContactSectionImage,
  ContactSectionImageStack,
  ContactSectionWrapper,
} from './style';

const ContactSection = () => {
  const sourceArray = [
    {
      src: '../contact-section-img/17.jpg',
    },
    {
      src: '../contact-section-img/18.jpg',
    },
    {
      src: '../contact-section-img/19.jpg',
    },
  ];
  return (
    <ContactSectionWrapper>
      <ContactSectionHeadingOne>
        <p>
          Vaše životopise šaljite na <a href='mailto:posao@marikomerc.hr'>posao@marikomerc.hr</a>, a za sve informacije
          nazovite: <a href='tel:023 342 615'>023 342 615</a> ili nas kontaktirajte putem <a href='//'>Linkedin-a</a>.
        </p>
        <p>Za više informacija pratite našu web stranicu ili nas kontaktirajte otvorenom molbom putem emaila.</p>
      </ContactSectionHeadingOne>
      <ContactSectionHeadingTwo>
        Nismo samo distributer kvalitetne hrane, već tim ljudi koji će vam pomoći u unapređivanju vašeg poslovanja, koji
        će se pobrinuti da najbolji proizvodi u što kraćem vremenu stignu do vas.
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
