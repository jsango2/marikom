import {
  WrapAll,
  ButtonsWrapDesktop,
  ButtonsWrapMobile,
  ProizvodWrap,
  WrapProizvodi,
  DropdownMobile,
  Placeholder,
  TrakaSearch,
  NazivKategorije,
  Search,
  NoInput,
  WrapLupa,
  WrapProizvodiPagination,
  Pagination,
  Divider,
  Kontakt,
  ArrowDown,
  OverlayBG,
} from './style.js';

import { useRouter } from 'next/router';
import en from '../../locales/en.json';
import hr from '../../locales/hr.json';
// import { catalogData } from "../../catalogData.js";
import { catalogData } from '../../catalogData.js';
import { useEffect, useState } from 'react';
import Image from 'next/image.js';
// import axios from "axios";
import ReactPaginate from 'react-paginate';

import Kartica from './kartica/index.js';
import Lupa from '../../assets/images/lupa.svg';
import Arrow from '../../assets/images/arrowDown.svg';
import useWindowSize from '../helper/usewindowsize';
import useScrollBlock from '../helper/useScrollBlock.js';
// import { storage } from "../firebase/firebase.js";
// import { getDownloadURL, ref } from "firebase/storage";
import { productImagesIds } from './productImagesIds.js';
import { freezingMethods, productCategories, velicine } from '../../productCategories.js';

import { useContext } from 'react';
import { AppContext } from '../../pages/_app.js';
import React from 'react';

function ProizvodiPage({ allProizvodi }) {
  // console.log({ productCategories });
  const [category, setCategory] = useContext(AppContext);
  const [kategorija, setKategorija] = useState(
    // locale === "hr" ? "Riba" : "Fish"
    ''
  );
  const [current, setCurrent] = useState(kategorija);

  // const [data, setData] = useState([]);

  const [blockScroll, allowScroll] = useScrollBlock();
  const size = useWindowSize();
  const router = useRouter();
  const { locale } = router;
  // const [forcePage, setForcePage] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  // const [searchTerm, setSearchTerm] = useState("");
  const [state, setstate] = useState({
    query: '',
    list: [],
  });

  useEffect(() => {
    if (category.length > 0) {
      const findKatbyLang = catalogData.find(
        (k) =>
          k['Kategorija kojoj proizvod pripada:'] === category ||
          k['Kategorija kojoj proizvod pripada ENG:'] === category
      );
      setKategorija(
        locale === 'hr'
          ? findKatbyLang['Kategorija kojoj proizvod pripada:']
          : findKatbyLang['Kategorija kojoj proizvod pripada ENG:']
      );
      setCurrent(
        locale === 'hr'
          ? findKatbyLang['Kategorija kojoj proizvod pripada:']
          : findKatbyLang['Kategorija kojoj proizvod pripada ENG:']
      );
    } else {
      const findKatbyLang = catalogData.find(
        (k) => k['Kategorija kojoj proizvod pripada:'] || k['Kategorija kojoj proizvod pripada ENG:'] === kategorija
      );
      setKategorija(
        locale === 'hr'
          ? findKatbyLang['Kategorija kojoj proizvod pripada:']
          : findKatbyLang['Kategorija kojoj proizvod pripada ENG:']
      );

      setCurrent(
        locale === 'hr'
          ? findKatbyLang['Kategorija kojoj proizvod pripada:']
          : findKatbyLang['Kategorija kojoj proizvod pripada ENG:']
      );
    }
  }, [locale]);

  const [filteredData, setFilteredData] = useState([]);
  // const [filteredDataOnInput, setFilteredDataOnInput] = useState([]);
  // const [filteredByKat, setFilteredByKat] = useState([]);
  const t = locale === 'en' ? en : hr;

  // productCategories su fiksni popis kategorija u lokalnom fileu a ne iz CMS-a. Na taj način imamo prijevode kategorija jer ih u CMS-u nema nego su sve hr

  const kategorije = productCategories.map((kat) => (locale === 'hr' ? kat.hr : kat.en));
  // const kategorije = [...new Set(sveKategorije)];

  const handleClick = (kat) => {
    console.log({ kat });
    setCategory(kat);
    setKategorija(kat);
    current === kat ? setCurrent(null) : setCurrent(kat);
    setItemOffset(0);
    setIsDropdownOpen(false);
    allowScroll();
    if (currentPage !== 0) {
      setCurrentPage(1);
    }
    setRemountComponent(Math.random());
  };

  // ./productImagesIds.js sadrzi array sa fotkama koje su u bazi (neki proizvodi nemaju fotku). Treba appendati tu informaciju svakom proizvodu a bi se znala renderirati fotka ili placeholder
  // ako nam posalju nove fotke (nazvane prema id proizvoda), stavi ih sve u /public/productImages u webp formatu a listu imena stavi u .productImagesId.js
  //./productImagesIds kreiraj tako da kopiras imena svih fotki koje imas u excel i maknes .jpg..kreiras od tog json sa ID: 23444 npr. To kopiraj u ./productImagesIDs

  const photoIdList = productImagesIds.map((item) => item.ID);
  function findCategoryTranslation(hrTerm) {
    const category = productCategories.find((category) => category.hr === hrTerm);
    return category ? category.en : null; // Return the English translation or null if not found
  }

  function findFreezingTranslation(hrTerm) {
    const translation = freezingMethods.find((item) => item.hr === hrTerm);
    return translation ? translation.en : null;
  }

  function findSizingTranslation(hrTerm) {
    const translation = velicine.find((item) => item.hr.toLowerCase() === hrTerm.toLowerCase());

    // If a match is found, return the translation; otherwise, return null
    return translation ? translation.en : null;
  }

  useEffect(() => {
    const filteredDataByCategory = allProizvodi.edges.filter(
      (f) =>
        (locale === 'hr'
          ? f.node.proizvodiInformacije.kategorijaKojojProizvodPripada
          : findCategoryTranslation(f.node.proizvodiInformacije.kategorijaKojojProizvodPripada)) === kategorija
    );

    const newArr1 = filteredDataByCategory.map((v) => ({
      ...v,
      photoUrl: `/productImages/${v.node.proizvodiInformacije.kataloskiBroj}.png`,
    }));

    //gleda dali ima slika u katalogu slika lokalno pa ju prikaze
    newArr1.forEach((item) => {
      item.hasUrl = false;
      for (let j = 0; j < photoIdList.length; j++) {
        if (item.node.proizvodiInformacije.kataloskiBroj == +photoIdList[j]) {
          item.hasUrl = true;
        }
      }
    });

    setFilteredData(newArr1);
    setstate({
      query: '',
      list: newArr1,
    });
  }, [kategorija]);

  const handleChange = (e) => {
    const results = filteredData.filter((post) => {
      if (e.target.value === '') return filteredData;
      if (locale === 'hr') {
        return post.node.proizvodiInformacije.imeProizvodaDo60Znakova
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      }
      if (locale === 'en') {
        return postpost.node.proizvodiInformacije.imeProizvodaDo60ZnakovaEng
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      }
    });
    setstate({
      query: e.target.value,
      list: results,
    });
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // PAGINATION::::::
  const [page, setPage] = useState();
  const [remountComponent, setRemountComponent] = useState(0);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const [itemOffset, setItemOffset] = useState([]);
  // const [newOffset2, setNewOffset2] = useState([]);
  const currentListPaginated = state.list.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  const [itemsPerPage] = useState(9);
  // const endOffset = itemOffset + itemsPerPage;
  // const currentItems = state.list.slice(itemOffset, endOffset);
  // const pageCount = Math.ceil(state.list.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % state.list.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);

    setItemOffset(newOffset);
  };
  const paginationClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  // --------

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
    blockScroll();
    // document.body.style.overflow = "hidden";
  };

  // useEffect(() => {
  //   let podaci = [];
  //   const getNotes = () => {
  //     getDocs(dbInstance4).then((data) => {
  //       podaci = data.docs.map((item) => {
  //         return { ...item.data(), id: item.id };
  //       });
  //       setData(podaci);
  //     });
  //   };
  //   getNotes();
  // }, []);

  // const imageRef = ref(storage, "images/23001.png");
  // // Get the download URL
  // getDownloadURL(imageRef)
  //   .then((url) => {
  //     console.log(url);
  //   })
  //   .catch((error) => {
  //     // A full list of error codes is available at
  //     // https://firebase.google.com/docs/storage/web/handle-errors
  //     switch (error.code) {
  //       case "storage/object-not-found":
  //         // File doesn't exist
  //         break;
  //       case "storage/unauthorized":
  //         // User doesn't have permission to access the object
  //         break;
  //       case "storage/canceled":
  //         // User canceled the upload
  //         break;

  //       // ...

  //       case "storage/unknown":
  //         // Unknown error occurred, inspect the server response
  //         break;
  //     }
  //   });
  // console.log("Context cat:", category);

  // console.log({ state });

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
    <WrapAll key={remountComponent}>
      {size.width > 900 && (
        <ButtonsWrapDesktop>
          {kategorije.map((kat) => (
            <button key={kat} onClick={() => handleClick(kat)} className={current === kat ? 'blueLink' : ''}>
              {kat}
            </button>
          ))}
          <Kontakt>
            <div style={{ marginBottom: '20px' }}>
              {locale === 'hr' ? 'Kontaktirajte nas za više informacija:' : 'Contact us for more information:'}
            </div>
            <a href='tel: 023 627 054'>Tel: 023 630 539</a>
            <a href='mailto: info@marikomerc.hr'>info@marikomerc.hr</a>
            <div
              onClick={() =>
                data
                  ? (window.location.href = `/api/download?url=${encodeURIComponent(
                      data.node.katalogProizvoda.katalog.mediaItemUrl
                    )}`)
                  : console.log('no file')
              }
              style={{
                marginTop: '20px',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
              }}
              title={`${locale === 'hr' ? 'Preuzmi katalog' : 'Download catalogue'}`}
            >
              <Arrow width='60px' />
              <div style={{ marginLeft: '5px' }}>
                {locale === 'hr'
                  ? `DOWNLOAD ${data ? data.node.katalogProizvoda.nazivKatalogaHrvatski : ''}`
                  : `DOWNLOAD ${data ? data.node.katalogProizvoda.nazivKatalogaEngleski : ''}`}
              </div>
            </div>
          </Kontakt>
        </ButtonsWrapDesktop>
      )}

      <WrapProizvodiPagination>
        <WrapProizvodi>
          <TrakaSearch>
            <NazivKategorije>{kategorija}</NazivKategorije>
            <Search>
              <WrapLupa>
                <Lupa />
              </WrapLupa>
              {/* <Image src={lupa} width={10} height={10} /> */}
              <input
                type='text'
                placeholder={locale === 'hr' ? 'Pretraga artikala' : 'Search products'}
                value={state.query}
                onChange={handleChange}
              />
            </Search>
          </TrakaSearch>
          {size.width < 900 && (
            <DropdownMobile onClick={handleDropdownClick}>
              {locale === 'hr' ? 'ODABIR KATEGORIJE' : 'CHOOSE CATEGORY'}
              <ArrowDown>
                <Image src='/arrowDown.svg' width={15} height={15} />
              </ArrowDown>
            </DropdownMobile>
          )}
          {isDropdownOpen && (
            <ButtonsWrapMobile>
              {kategorije.map((kat) => (
                <button key={kat} onClick={() => handleClick(kat)} className={current === kat ? 'blueLink' : ''}>
                  {kat}
                </button>
              ))}
            </ButtonsWrapMobile>
          )}
          {isDropdownOpen && <OverlayBG />}

          <Divider />
          {state.list.length > 0 ? (
            currentListPaginated.map((item, i) => (
              <Kartica
                // key={item["Kataloški broj: "]}
                key={i}
                kataloskiBroj={item.node.proizvodiInformacije.kataloskiBroj}
                hasPhoto={item.hasUrl}
                photo={item.photoUrl}
                imeProizvoda={
                  locale === 'hr'
                    ? item.node.proizvodiInformacije.imeProizvodaDo60Znakova
                    : item.node.proizvodiInformacije.imeProizvodaDo60ZnakovaEng
                }
                latinskiNaziv={item.node.proizvodiInformacije.latinskiNazivDo60Znakova}
                opis={
                  locale === 'hr'
                    ? item.node.proizvodiInformacije.opisHrDo300Znakova
                    : item.node.proizvodiInformacije.opisEngDo300Znakova
                }
                jedinicaMjere={item.node.proizvodiInformacije.jedinicaMjere}
                ostaleMjere={
                  locale === 'hr'
                    ? item.node.proizvodiInformacije.ostaleJediniceVelicinaPecaturaBrojKomUKg
                    : findSizingTranslation(item.node.proizvodiInformacije.ostaleJediniceVelicinaPecaturaBrojKomUKg)
                }
                ostaleMjereVrijednost={item.node.proizvodiInformacije.vrijednostOstaleVelicine}
                pakiranje={item.node.proizvodiInformacije.tezinaPoJediniciMjere}
                nacinSmrzavanja={item.node.proizvodiInformacije.nacinSmrzavanja}
                //   locale === "hr"
                //     ? item.node.proizvodiInformacije.nacinSmrzavanja
                //     : findFreezingTranslation(
                //         item.node.proizvodiInformacije.nacinSmrzavanja
                //       )
                // }
                certifikatMSC={item.node.proizvodiInformacije.certifikatMsc}
                perlaHoreca={item.node.proizvodiInformacije.perlaHoreca}
                certifikatIFS={item.node.proizvodiInformacije.ifsFood}
                certifikatZivjetiZdravo={item.node.proizvodiInformacije.certifikatZivjetiZdravo}
                oznakaNovo={item.node.proizvodiInformacije.oznakaNovo}
                oznakaNovoPakiranje={item.node.proizvodiInformacije.oznakaNovoPakiranje}
                slikaProizvoda={item.node.proizvodiInformacije.slikaProizvoda}
              />
            ))
          ) : (
            <NoInput> {locale === 'hr' ? 'Nema traženog artikla' : 'No product found'}</NoInput>
          )}
        </WrapProizvodi>
        <Pagination>
          {/* <ReactPaginate
            breakLabel="..."
            nextLabel=""
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageClassName={"pageClassName"}
            // activeClassName={"activePage"}
            activeLinkClassName={"activePage"}
            pageLinkClassName={"pagelink"}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            containerClassName={"pagination"}
            previousLabel={""}
            forcePage={forcePage}
            onClick={paginationClick}
          /> */}
          <ReactPaginate
            activeClassName={'item active '}
            breakClassName={'item break-me '}
            breakLabel={'...'}
            containerClassName={'pagination'}
            disabledClassName={'disabled-page'}
            onPageChange={paginate}
            pageCount={Math.ceil(state.list.length / postsPerPage)}
            previousLabel={''}
            nextLabel={''}
            nextClassName={'item next '}
            pageClassName={'pageClassName'}
            pageLinkClassName={'pagelink'}
            previousLinkClassName={'page-number'}
            nextLinkClassName={'page-number'}
            activeLinkClassName={'activePage'}
            previousClassName={'item previous'}
            forcePage={page}
            onClick={paginationClick}
          />
        </Pagination>
      </WrapProizvodiPagination>
    </WrapAll>
  );
}

export default ProizvodiPage;
