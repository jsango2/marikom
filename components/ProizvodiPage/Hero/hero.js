import { ContentWrap, HeroWrap, Overlay } from './style.js';
// import HeroVideo from "../../video/kraciVideo.mp4";
import useWindowSize from '../../helper/usewindowsize';
import { useRouter } from 'next/router.js';
import en from '../../../locales/en.json';
import hr from '../../../locales/hr.json';
import Image from 'next/image.js';
import bg from '../../../assets/images/proizvodiBg.png';
import { TitleH1 } from '../../../styles/globalStyle.js';
import React from 'react';
import Arrow from '../../../assets/images/arrowDown.svg';

{
  /* <a
  target='_blank'
  rel='noopener noreferrer'
  // onClick={() =>
  //   data
  //     ? (window.location.href = `/api/download?url=${encodeURIComponent(
  //         data.node.katalogProizvoda.katalog.mediaItemUrl
  //       )}`)
  //     : console.log('no file')
  // }
  href={data ? data.node.katalogProizvoda.katalog.mediaItemUrl : ''}
  style={{
    marginTop: '20px',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  }}
  title={`${locale === 'hr' ? 'Preuzmi katalog' : 'Download catalogue'}`}
></a>; */
}

const Hero = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : hr;
  const size = useWindowSize();

  const fetchData = async () => {
    const response = await fetch('https://marikomerc.sutra.hr/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query getAllKatalozi {
  katalozi {
    edges {
      node {
        id
        title
        katalogProizvoda {
          nazivKatalogaEngleski
          nazivKatalogaHrvatski
          katalog {
            id
            title
            mediaItemUrl
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

    setData(result.data.katalozi.edges[0]);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const [data, setData] = React.useState();

  return (
    <>
      <HeroWrap>
        <Overlay />
        <Image src='/proizvodiHero.webp' layout='fill' objectFit='cover' />
        <TitleH1>{t.Products.title}</TitleH1>

        <a
          target='_blank'
          rel='noopener noreferrer'
          className='download__mobile'
          // onClick={() =>
          //   data
          //     ? (window.location.href = `/api/download?url=${encodeURIComponent(
          //         data.node.katalogProizvoda.katalog.mediaItemUrl
          //       )}`)
          //     : console.log('no file')
          // }
          href={data ? data.node.katalogProizvoda.katalog.mediaItemUrl : ''}
          title={`${locale === 'hr' ? 'Preuzmi katalog' : 'Download catalogue'}`}
        >
          <Arrow width='60px' />
          <div style={{ marginLeft: '5px' }}>
            {locale === 'hr'
              ? `DOWNLOAD ${data ? data.node.katalogProizvoda.nazivKatalogaHrvatski : ''}`
              : `DOWNLOAD ${data ? data.node.katalogProizvoda.nazivKatalogaEngleski : ''}`}
          </div>
        </a>
      </HeroWrap>
      {/* <Companies /> */}
    </>
  );
};

export default Hero;
