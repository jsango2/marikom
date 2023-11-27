import {
  WrapAll,
  TextBox,
  UpTitle,
  Title,
  Text,
  WrapIcons,
  Icon,
  WrapImages,
  Img1,
  Img2,
  Img3,
  Img4,
} from "./style.js";

import Image from "next/image";
import Link from "next/link";
import img1 from "../../../assets/images/nasaPrica/1.png";
import img2 from "../../../assets/images/nasaPrica/2.png";
import img3 from "../../../assets/images/nasaPrica/3.png";
import img4 from "../../../assets/images/nasaPrica/4.png";

function Zajednica() {
  return (
    <WrapAll>
      <TextBox>
        <UpTitle>RAD U ZAJEDNICI</UpTitle>
        <Title>NASLOV NEKI KOJI GOVORI O RADU U ZAJEDNICI</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant hac
          euismod euismod lectus ridiculus eu et. Facilisis molestie nulla nunc
          pulvinar. Orci elit vel in quis. Habitant hac euismod euismod lectus
          ridiculus eu
        </Text>
      </TextBox>

      <WrapImages>
        <Img1>
          {" "}
          <Image
            src={img1}
            // width={157}
            // height={244}
            layout="fill"
            alt="p1"
          />
        </Img1>
        <Img2>
          {" "}
          <Image
            src={img2}
            // width={157}
            // height={244}
            layout="fill"
            alt="p1"
          />
        </Img2>
        <Img3>
          {" "}
          <Image
            src={img3}
            // width={157}
            // height={244}
            layout="fill"
            alt="p1"
          />
        </Img3>
        <Img4>
          {" "}
          <Image
            src={img4}
            // width={157}
            // height={244}
            layout="fill"
            alt="p1"
          />
        </Img4>
      </WrapImages>
    </WrapAll>
  );
}

export default Zajednica;
