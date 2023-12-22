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
} from "./style.js";

import { useRouter } from "next/router";
import en from "../../locales/en.json";
import hr from "../../locales/hr.json";
import { catalogData } from "../../catalogData.js";
import { useEffect, useState } from "react";
import Image from "next/image.js";
import axios from "axios";
import ReactPaginate from "react-paginate";

import Kartica from "./kartica/index.js";
import Lupa from "../../assets/images/lupa.svg";
import Arrow from "../../assets/images/arrowDown.svg";
import useWindowSize from "../helper/usewindowsize";
import useScrollBlock from "../helper/useScrollBlock.js";
import { storage } from "../firebase/firebase.js";
import { getDownloadURL, ref } from "firebase/storage";
import { productImagesIds } from "./productImagesIds.js";
function ProizvodiPage() {
  const [data, setData] = useState([]);

  const [blockScroll, allowScroll] = useScrollBlock();
  const size = useWindowSize();
  const router = useRouter();
  const { locale } = router;
  const [kategorija, setKategorija] = useState(
    locale === "hr" ? "Glavonošci" : "Cephalopods"
  );
  const [forcePage, setForcePage] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setstate] = useState({
    query: "",
    list: [],
  });

  const findKatbyLang = catalogData.find(
    (k) =>
      k["Kategorija kojoj proizvod pripada:"] ||
      k["Kategorija kojoj proizvod pripada ENG:"] === kategorija
  );
  useEffect(() => {
    setKategorija(
      locale === "hr"
        ? findKatbyLang["Kategorija kojoj proizvod pripada:"]
        : findKatbyLang["Kategorija kojoj proizvod pripada ENG:"]
    );
    setCurrent(
      locale === "hr"
        ? findKatbyLang["Kategorija kojoj proizvod pripada:"]
        : findKatbyLang["Kategorija kojoj proizvod pripada ENG:"]
    );
  }, [locale]);

  // const allPhotosProizvoda = allPhotosProizvodi.edges;

  // allPhotosProizvoda.forEach(
  //   (item) => (item.node.id = item.node.sourceUrl.slice(-9, -4))
  // );

  // console.log(allPhotosProizvoda);

  const [current, setCurrent] = useState(kategorija);
  const [filteredData, setFilteredData] = useState([]);
  const [filteredDataOnInput, setFilteredDataOnInput] = useState([]);
  const [filteredByKat, setFilteredByKat] = useState([]);
  const t = locale === "en" ? en : hr;

  const sveKategorije = catalogData.map((kat) =>
    locale === "hr"
      ? kat["Kategorija kojoj proizvod pripada:"]
      : kat["Kategorija kojoj proizvod pripada ENG:"]
  );
  const kategorije = [...new Set(sveKategorije)];

  const handleClick = (kat) => {
    setKategorija(kat);
    current === kat ? setCurrent(null) : setCurrent(kat);
    setItemOffset(0);
    setIsDropdownOpen(false);
    allowScroll();
  };
  // const photoIdList = allPhotosProizvoda.map((item) => item.node.id);

  // ./productImagesIds.js sadrzi array sa fotkama koje su u bazi (neki proizvodi nemaju fotku). Treba appendati tu informaciju svakom proizvodu a bi se znala renderirati fotka ili placeholder
  // ako nam posalju nove fotke (nazvane prema id proizvoda), stavi ih sve u /public/productImages u webp formatu a listu imena stavi u .productImagesId.js
  const photoIdList = productImagesIds.map((item) => item.ID);

  useEffect(() => {
    const filteredDataByCategory = catalogData.filter(
      (f) =>
        (locale === "hr"
          ? f["Kategorija kojoj proizvod pripada:"]
          : f["Kategorija kojoj proizvod pripada ENG:"]) === kategorija
    );

    const newArr1 = filteredDataByCategory.map((v) => ({
      ...v,
      photoUrl: `/productImages/${v["Kataloški broj:"]}.webp`,
    }));
    newArr1.forEach((item) => {
      item.hasUrl = false;
      for (let j = 0; j < photoIdList.length; j++) {
        if (item["Kataloški broj:"] == +photoIdList[j]) {
          item.hasUrl = true;
        }
      }
    });

    setFilteredData(newArr1);
    setstate({
      query: "",
      list: newArr1,
    });
  }, [kategorija]);

  const handleChange = (e) => {
    const results = filteredData.filter((post) => {
      if (e.target.value === "") return filteredData;
      if (locale === "hr") {
        return post["IME PROIZVODA - do 60 znakova"]
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      }
      if (locale === "en") {
        return post["PRODUCT NAME - up to 60 characters"]
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      }
    });
    setstate({
      query: e.target.value,
      list: results,
    });
  };

  // PAGINATION::::::

  const [itemOffset, setItemOffset] = useState([]);
  const [newOffset2, setNewOffset2] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [itemsPerPage] = useState(9);
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = state.list.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(state.list.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % state.list.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );

    setItemOffset(newOffset);
  };
  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
    blockScroll();
    // document.body.style.overflow = "hidden";
  };
  const paginationClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  // FIREBASE GET PHOTOS FROM STORAGE:
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
  return (
    <WrapAll>
      {size.width > 900 && (
        <ButtonsWrapDesktop>
          {kategorije.map((kat) => (
            <button
              key={kat}
              onClick={() => handleClick(kat)}
              className={current === kat ? "blueLink" : ""}
            >
              {kat}
            </button>
          ))}
          <Kontakt>
            <div style={{ marginBottom: "20px" }}>
              Kontaktirajte nas za više informacija:{" "}
            </div>
            <a href="tel: 023 627 054">Tel: 023 627 054</a>
            <a href="mailto: prodaja@marikomerc.hr">prodaja@marikomerc.hr</a>
            <a
              href="/images/myw3schoolsimage.jpg"
              download
              style={{
                marginTop: "20px",
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Arrow width="60px" />
              Download brošure Perla HORECA
            </a>
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
                type="text"
                placeholder="Pretraga artikala"
                value={state.query}
                onChange={handleChange}
              />
            </Search>
          </TrakaSearch>
          {size.width < 900 && (
            <DropdownMobile onClick={handleDropdownClick}>
              ODABIR KATEGORIJE
              <ArrowDown>
                <Image src="/arrowDown.svg" width={15} height={15} />
              </ArrowDown>
            </DropdownMobile>
          )}
          {isDropdownOpen && (
            <ButtonsWrapMobile>
              {kategorije.map((kat) => (
                <button
                  key={kat}
                  onClick={() => handleClick(kat)}
                  className={current === kat ? "blueLink" : ""}
                >
                  {kat}
                </button>
              ))}
            </ButtonsWrapMobile>
          )}
          {isDropdownOpen && <OverlayBG />}

          <Divider />
          {state.list.length > 0 ? (
            currentItems.map((item, i) => (
              <Kartica
                // key={item["Kataloški broj: "]}
                key={i}
                kataloskiBroj={item["Kataloški broj:"]}
                hasPhoto={item.hasUrl}
                photo={item.photoUrl}
                imeProizvoda={
                  locale === "hr"
                    ? item["IME PROIZVODA - do 60 znakova"]
                    : item["PRODUCT NAME - up to 60 characters"]
                }
                latinskiNaziv={item["LATINSKI NAZIV - do 60 znakova"]}
                opis={
                  locale === "hr"
                    ? item["OPIS (DO 300 ZNAKOVA)"]
                    : item["OPIS ENGLESKI"]
                }
                jedinicaMjere={item["Jedinica mjere"]}
                ostaleMjere={
                  locale === "hr"
                    ? item["Ostale jedinice: Veličina/pecatura/broj kom u kg:"]
                    : item["Other units: Size/patch/number of pcs in kg:"]
                }
                ostaleMjereVrijednost={
                  item["Vrijednost ukoliko je prethodno polje ispunjeno"]
                }
                pakiranje={item["Težina po jedinici mjere"]}
                nacinSmrzavanja={
                  locale === "hr"
                    ? item["NAČIN SMRZAVANJA"]
                    : item["METHOD OF FREEZING"]
                }
                certifikatMSC={item["Certifikat 'MSC' (DA/NE)"]}
                perlaHoreca={item["Perla HORECA (DA/NE)"]}
                certifikatIFS={item["IFS Food"]}
                certifikatZivjetiZdravo={
                  item["Certifikat 'Živjeti Zdravo' (DA/NE)"]
                }
                oznakaNovo={item[`OZNAKA "Novo" (DA/NE)`]}
                oznakaNovoPakiranje={item[`OZNAKA: "Novo pakiranje" (DA/NE)`]}
              />
            ))
          ) : (
            <NoInput>Nema traženog artikla</NoInput>
          )}
        </WrapProizvodi>
        <Pagination>
          <ReactPaginate
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
          />
        </Pagination>
      </WrapProizvodiPagination>
    </WrapAll>
  );
}

export default ProizvodiPage;
{
  /* <ProizvodWrap key={item["Kataloški broj: "]}>
            {item.hasUrl ? (
              <Image
                src={`https://cms.marikomerc.hr/wp-content/uploads/2023/12/${item["Kataloški broj: "]}.png`}
                layout="fill"
                objectFit="contain"
              ></Image>
            ) : (
              <Image
                src={`https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ1IMbohmTHJxvrfCCuSg1W0j7TJgb0Q7bVp-N5NfiTqmqagRzu`}
                layout="fill"
                objectFit="contain"
              ></Image>
            )}
          </ProizvodWrap> */
}
