import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Marquee } from '@devnomic/marquee';
import '@devnomic/marquee/dist/index.css';
import parse from 'html-react-parser';

export default function ObavijestTraka() {
  const [data, setData] = React.useState(null);

  const router = useRouter();
  const { locale } = router;
  const fetchData = async () => {
    const response = await fetch('https://marikomerc.sutra.hr/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query getObavijesti {
            obavijesti {
              edges {
                node {
                  id
                  title
                  obavijest {
                    aktivatorObavijesti
                    linkUkolikoPostojiEng
                    linkUkolikoPostojiHr
                    tekstObavijestiEngleskiJezik
                    tekstObavijestiHrvatskiJezik
                  }
                }
              }
            }
          }
        `,
      }),
    });

    const result = await response.json();
    setData(result.data.obavijesti.edges);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='obavijest-traka'>
      {data && (
        <Marquee>
          <div className='obavijest_traka_inner'>
            <div>
              {locale === 'hr'
                ? parse(data[0].node.obavijest.tekstObavijestiHrvatskiJezik)
                : parse(data[0].node.obavijest.tekstObavijestiEngleskiJezik)}
            </div>

            {data[0].node.obavijest.linkUkolikoPostojiHr && locale === 'hr' && (
              <a href={data[0].node.obavijest.linkUkolikoPostojiHr} rel='noopener noreferrer' target='_blank'>
                {data[0].node.obavijest.linkUkolikoPostojiHr}
              </a>
            )}

            {data[0].node.obavijest.linkUkolikoPostojiEng && locale === 'en' && (
              <a href={data[0].node.obavijest.linkUkolikoPostojiEng} rel='noopener noreferrer' target='_blank'>
                {data[0].node.obavijest.linkUkolikoPostojiEng}
              </a>
            )}
          </div>
        </Marquee>
      )}
    </div>
  );
}
