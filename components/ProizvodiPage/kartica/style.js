import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  z-index: 9;
  width: 330px;
  height: 479px;

  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: white;
  /* overflow: hidden; */
  /* padding-bottom: 50px; */
  /* border: 2px solid var(--color-boja-svj-plava-ocjena, #bee2f0); */

  -webkit-box-shadow: 10px 10px 73px -43px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 73px -43px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 73px -43px rgba(0, 0, 0, 0.75);
  margin: 14px 24px;
  padding: 15px 0;
  /* transform: ; */
  overflow: hidden;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  &:hover {
    transform: scale3d(1.05, 1.05, 1);
    z-index: 11;
  }
  @media only screen and (max-width: 600px) {
    /* height: 400px; */
    height: auto;
    padding: 15px 0 15px 0;
  }
`;
export const WrapData = styled.div`
  position: relative;
  z-index: 10;
  margin: 30px 0 auto 40px;
  height: 271px;
  padding-right: 20px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: flex-start;
  @media only screen and (max-width: 600px) {
    margin: 10px 0 auto 30px;
    height: auto;
  }
`;
export const DonjiBlok = styled.div`
  position: relative;
  z-index: 10;
  /* height: 270px; */
  padding-right: 20px;

  display: flex;
  flex-direction: column;
  height: auto;
  /* justify-content: ; */
  @media only screen and (max-width: 600px) {
  }
`;
export const GornjiBlok = styled.div`
  position: relative;
  z-index: 10;
  /* height: 270px; */
  padding-right: 20px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  /* justify-content: ; */
  @media only screen and (max-width: 600px) {
  }
`;
export const WrapCerts = styled.div`
  position: relative;
  z-index: 10;
  left: 40px;
  /* margin-top: 20px;
  margin-left: 40px;
  display: flex;
  align-items: center;
  bottom: 20px; */
  display: flex;
  @media only screen and (max-width: 600px) {
  }
`;
export const WrapCert = styled.div`
  position: relative;
  z-index: 10;
  height: auto;
  @media only screen and (max-width: 600px) {
    /* margin-top: 35px; */
    top: 5px;
    margin: 5px 0 0 0;
  }
`;
export const Novo = styled.div`
  position: absolute;
  z-index: 20;
  top: 30px;
  right: 0;
  width: 75px;
  height: 25px;
  background: linear-gradient(135deg, #338bc2 0%, #dffee6 100%);
  color: white;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
  }
`;
export const NovoPakiranje = styled.div`
  position: absolute;
  z-index: 20;
  top: 70px;
  right: 0;
  height: 25px;
  width: 150px;
  background: linear-gradient(135deg, #338bc2 0%, #dffee6 100%);
  color: white;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
  }
`;
// Photo,
// Naziv,
// LatinskiNaziv,
// JedinicaMjere,
// Pakiranje,
// NacinSmrzavanja,
export const Photo = styled.div`
  position: relative;
  z-index: 10;
  width: 288px;

  height: 180px;
  color: black;
  display: flex;

  justify-content: center;
  align-items: flex-start;
  background-color: white;
  /* overflow: hidden; */
  /* padding-bottom: 50px; */

  margin: 0 auto auto auto;
  @media only screen and (max-width: 600px) {
  }
`;
export const Naziv = styled.div`
  position: relative;
  z-index: 10;
  color: var(--color-boja-marikomerc-plava);
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 19.2px */

  @media only screen and (max-width: 600px) {
  }
`;

export const LatinskiNaziv = styled.div`
  position: relative;
  z-index: 10;
  color: var(--color-bijela-plava);
  font-family: Gilroy;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 153%; /* 21.42px */
  margin: 10px 0 20px 0;

  @media only screen and (max-width: 600px) {
    margin: 5px 0 10px 0;
  }
`;
export const JedinicaMjere = styled.div`
  position: relative;
  z-index: 10;
  color: var(--color-boja-marikomerc-plava);
  font-family: Gilroy;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 14.4px */
  margin-top: 30px;
  @media only screen and (max-width: 600px) {
    margin-top: 10px;
  }
`;
export const Pakiranje = styled.div`
  position: relative;
  z-index: 10;
  color: var(--color-boja-marikomerc-plava);
  font-family: Gilroy;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 14.4px */
  margin-top: 6px;
  @media only screen and (max-width: 600px) {
  }
`;
export const NacinSmrzavanja = styled.div`
  position: relative;
  z-index: 10;
  color: var(--color-boja-marikomerc-plava);
  font-family: Gilroy;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 14.4px */
  margin-top: 6px;
  @media only screen and (max-width: 600px) {
  }
`;
export const Opis = styled.div`
  position: relative;
  z-index: 10;
  color: var(--color-boja-marikomerc-plava);
  font-family: Gilroy;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 153%; /* 21.42px */
  min-height: 40px;
  @media only screen and (max-width: 600px) {
    min-height: unset;
    height: auto;
  }
`;
export const Placeholder = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100%;
  color: black;
  display: flex;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  color: darkgray /* overflow: hidden; */ /* padding-bottom: 50px; */;
  opacity: 0.6;
  @media only screen and (max-width: 600px) {
  }
`;
