import {
  WrapAll,
  TextBox,
  UpTitle,
  Title,
  Text,
  SmallText,
  Overlay,
  WrapImages,
  Img1,
  Img2,
  Img3,
  Img4,
  WrapContent,
} from "./style.js";

function Zajednica() {
  return (
    <WrapAll>
      <WrapContent>
        <TextBox>
          <UpTitle>RAD U ZAJEDNICI</UpTitle>
          <Title>
            Podržavamo projekte i aktivnosti lokalne i regionalne zajednice i
            rastemo zajedno s njima
          </Title>
          <Text>
            Kroz korporativno volontiranje, donacije i podršku lokalnim i
            regionalnim inicijativama nastojimo biti društveno odgovorno
            poduzeće koje ostvaruje pozitivan utjecaj na zajednicu.
          </Text>
        </TextBox>

        <WrapImages>
          <Img1>
            <Overlay />
            <SmallText>
              Sponzoriranje košarkaškog kolektiva Diadora
            </SmallText>{" "}
          </Img1>
          <Img2>
            <Overlay />
            <SmallText>Sponzoriranje košarkaškog kolektiva Diadora</SmallText>
          </Img2>
          <Img3>
            <Overlay />
            <SmallText>Sponzoriranje košarkaškog kolektiva Diadora</SmallText>
          </Img3>
          <Img4>
            <Overlay />
            <SmallText>Sponzoriranje košarkaškog kolektiva Diadora</SmallText>
          </Img4>
        </WrapImages>
      </WrapContent>
    </WrapAll>
  );
}

export default Zajednica;
