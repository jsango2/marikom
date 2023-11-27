import ProizvodLink from "./proizvodLink/index.js";
import { WrapAll } from "./style.js";
const data = [
  {
    proizvod: "Riba",
    link: "riba",
  },
  {
    proizvod: "PERLA",
    link: "riba",
  },
  {
    proizvod: "Rakovi",
    link: "riba",
  },
  {
    proizvod: "Školjkaši",
    link: "riba",
  },
  {
    proizvod: "Tjestenina",
    link: "riba",
  },
  {
    proizvod: "Glavonošci",
    link: "riba",
  },
  {
    proizvod: "Fileti i odresci",
    link: "riba",
  },
  {
    proizvod: "Sushi program",
    link: "riba",
  },
  ,
  {
    proizvod: "Povrće & Njoki",
    link: "riba",
  },
  {
    proizvod: "Veganski proizvodi",
    link: "riba",
  },
  {
    proizvod: "Marinirani proizvodi",
    link: "riba",
  },
  {
    proizvod: "Ostali riblji proizvodi",
    link: "riba",
  },
  {
    proizvod: "Svježi i osvježeni proizvodi",
    link: "riba",
  },
  {
    proizvod: "Mesni proizvodi s hrvatskih farmi",
    link: "riba",
  },
  {
    proizvod: "Konzervirani, sušeni i dimljeni proizvodi",
    link: "riba",
  },
  {
    proizvod: "Pommes frites",
    link: "riba",
  },
];

function ProizvodiCLoud() {
  return (
    <WrapAll>
      {data.map((item) => (
        <ProizvodLink
          key={item.proizvod}
          text={item.proizvod}
          link={item.link}
        />
      ))}
    </WrapAll>
  );
}

export default ProizvodiCLoud;
