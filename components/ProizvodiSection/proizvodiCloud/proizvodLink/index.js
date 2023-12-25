import { WrapAll, Text } from "./style.js";
import Link from "next/link";
import { AppContext } from "../../../../pages/_app.js";
import { useContext } from "react";
function ProizvodLink({ text, link }) {
  const [category, setCategory] = useContext(AppContext);
  console.log("PROIZVODI CLOUD COMP:", category);
  return (
    <WrapAll>
      <Text>
        <Link href="/proizvodi">
          <div style={{ cursor: "pointer" }} onClick={() => setCategory(text)}>
            {text}
          </div>
        </Link>
      </Text>
    </WrapAll>
  );
}

export default ProizvodLink;
