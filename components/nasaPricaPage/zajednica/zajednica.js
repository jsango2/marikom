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
  ImgMapa,
  WrapContent,
} from './style.js';
import { useRouter } from 'next/router.js';
import en from '../../../locales/en.json';
import hr from '../../../locales/hr.json';
import { TitleH4 } from '../vrijednost/style.js';
import { useInView } from 'react-intersection-observer';
import React from 'react';

function Zajednica() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });

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
          query getRadUZajednici {
  radUZajednici {
    edges {
      node {
        id
        radUZajedniciFotoITekst {
          opisniTekstEngleskiJezik
          opisniTekstHrvatskiJezik
          slikaSDogadajaIliAkcije {
            id
            sourceUrl
          }
        }
      }
    }
  }
}
        `,
      }),
    });

    const result = await response.json();

    setData(result.data.radUZajednici.edges);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <WrapAll>
      <WrapContent>
        <TextBox ref={ref} className={` ${inView ? 'inView' : 'outView'}`}>
          <TitleH4>{t.Onama.radUzajednici}</TitleH4>
          <Title>{t.Onama.naslovPodrzavamo}</Title>
          <Text>{t.Onama.textPodrzavamo}</Text>
        </TextBox>

        <WrapImages>
          {data &&
            data.map((rz, i) => {
              return (
                <ImgMapa
                  key={i}
                  style={{
                    backgroundImage: `url(${rz.node.radUZajedniciFotoITekst.slikaSDogadajaIliAkcije.sourceUrl})`,
                  }}
                >
                  <Overlay />
                  <SmallText>
                    {locale === 'hr'
                      ? rz.node.radUZajedniciFotoITekst.opisniTekstHrvatskiJezik
                      : rz.node.radUZajedniciFotoITekst.opisniTekstEngleskiJezik}
                  </SmallText>
                </ImgMapa>
              );
            })}
        </WrapImages>
      </WrapContent>
    </WrapAll>
  );
}

export default Zajednica;
