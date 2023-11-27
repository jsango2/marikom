import {
  WrapAll,
  RedLine,
  RedLine2,
  WrapContent,
  Content,
  WrapImage,
  Title,
  Text,
  WrapLogo,
  LinkLokacije,
  WrapLogoBoja,
} from "./style.js";
import p1 from "../../assets/images/perla/delimarisphoto.png";
import Logo from "../../svg/delimarislogobijeli.svg";
import LogoBoja from "../../svg/delimarisBoja.svg";
import ArrowRight from "../../svg/arrowRight.svg";

import Image from "next/image";
import Button from "../buttonBlue/Button.js";
import Link from "next/link";
import { Overlay } from "../DiMarisSection/style.js";
import useWindowSize from "../helper/usewindowsize";

function DeliMarisSection() {
  const size = useWindowSize();
  return (
    <WrapAll>
      <RedLine />
      <WrapContent>
        <WrapImage>
          {size.width < 1250 && (
            <WrapLogoBoja>
              <LogoBoja />
            </WrapLogoBoja>
          )}
          <Overlay />
          <Image src={p1} alt="p1" layout="fill" objectFit="cover" />
        </WrapImage>
        <Content>
          {size.width > 1250 && (
            <WrapLogo>
              <Logo />
            </WrapLogo>
          )}
          <Title>Dopustite da vas oduševimo našom verzijom fish&chipsa</Title>
          <Text>
            Cijeli koncept Delimarisovog menija se bazira na domaćem, jadranskom
            i tradicionalnom, a onim malo zahtjevnijim gostima nudi se i nešto
            više.
          </Text>

          <Button
            bgColor="#4299C8"
            color="#FFFFFF"
            width="172px"
            text="Pogledaj meni"
            linkTo="/o-nama"
          />
          <LinkLokacije>
            Lokacije i radno vrijeme <ArrowRight />
          </LinkLokacije>
        </Content>
      </WrapContent>
    </WrapAll>
  );
}

export default DeliMarisSection;
