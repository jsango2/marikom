import { WrapAll, Text } from "./style.js";
import Link from "next/link";

function ProizvodLink({ text, link }) {
  return (
    <WrapAll>
      <Text>
        <Link href={link}>{text}</Link>
      </Text>
    </WrapAll>
  );
}

export default ProizvodLink;
