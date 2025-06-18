import { Overlay, WrapAll, Container, OverlayTop, Number } from './style.js';

import Image from 'next/image';
import bg from '../../../assets/images/nasaPrica/brojkeBG.png';
import { Line, Right, SingleFact, TextFact, Wrap } from '../../RastSection/style.js';
import { useRouter } from 'next/router.js';
import en from '../../../locales/en.json';
import hr from '../../../locales/hr.json';
import React from 'react';

function Brojke() {
  const { locale } = useRouter();
  const t = locale === 'en' ? en : hr;

  const [data, setData] = React.useState(null);

  const fetchData = async () => {
    const response = await fetch('https://marikomerc.sutra.hr/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query getBrojke {
  brojcanici {
    edges {
      node {
        id
        title
        brojcanik {
          brojKupacaUProslojGodini
          kapacitetPrijemaKamionaUJednomDanu
          prosjecnaGodisnjaKolicinaProdaje
          prosjecniGodisnjiVolumenPreradenihVlastitihProizvoda
          ukupanKapacitetPaletaNa25
          ukupanKapacitetPaletaNa4
        }
      }
    }
  }
}
        `,
      }),
    });

    const result = await response.json();

    const setBrojcanika = result.data.brojcanici.edges.find(
      (item) => item.node.title === 'Brojke u brojcaniku na Marikomerc webu'
    );

    setData(setBrojcanika.node.brojcanik);
    // console.log('RESULT', setBrojcanika.node.brojcanik);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <WrapAll>
      {/* <OverlayTop /> */}
      <Overlay />
      <Image src={bg} alt='p1' layout='fill' objectFit='cover' />
      <Container>
        <Right>
          <SingleFact>
            <Wrap>
              {data && <Number>{data.brojKupacaUProslojGodini}</Number>}
              <TextFact>{t.MLS.numberFact1}</TextFact>
            </Wrap>
            <Line />
          </SingleFact>
          <SingleFact>
            <Wrap>
              {data && <Number>{data.kapacitetPrijemaKamionaUJednomDanu}</Number>}
              <TextFact>{t.MLS.numberFact2}</TextFact>
            </Wrap>
            <Line />
          </SingleFact>
          <SingleFact>
            <Wrap>
              {data && <Number>{data.prosjecnaGodisnjaKolicinaProdaje}</Number>}
              <TextFact>{t.MLS.numberFact3}</TextFact>
            </Wrap>
          </SingleFact>
        </Right>
        <Right>
          <SingleFact>
            <Wrap>
              {data && <Number>{data.ukupanKapacitetPaletaNa4}</Number>}
              <TextFact>{t.MLS.numberFact4}</TextFact>
            </Wrap>
            <Line />
          </SingleFact>
          <SingleFact>
            <Wrap>
              {data && <Number>{data.ukupanKapacitetPaletaNa25}</Number>}
              <TextFact>{t.MLS.numberFact5}</TextFact>
            </Wrap>
            <Line />
          </SingleFact>
          <SingleFact>
            <Wrap>
              {data && <Number>{data.prosjecniGodisnjiVolumenPreradenihVlastitihProizvoda}</Number>}
              <TextFact>{t.MLS.numberFact6}</TextFact>
            </Wrap>
          </SingleFact>
        </Right>
      </Container>
    </WrapAll>
  );
}

export default Brojke;
