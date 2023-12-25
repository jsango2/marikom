import ProizvodLink from "./proizvodLink/index.js";
import { WrapAll } from "./style.js";
import { catalogData } from "../../../catalogData.js";
import { useRouter } from "next/router.js";

function ProizvodiCLoud() {
  const router = useRouter();
  const { locale } = router;

  const sveKategorije = catalogData.map((kat) =>
    locale === "hr"
      ? kat["Kategorija kojoj proizvod pripada:"]
      : kat["Kategorija kojoj proizvod pripada ENG:"]
  );
  const kategorije = [...new Set(sveKategorije)];
  return (
    <WrapAll>
      {kategorije.map((item) => (
        <ProizvodLink key={item} text={item} />
      ))}
    </WrapAll>
  );
}

export default ProizvodiCLoud;
