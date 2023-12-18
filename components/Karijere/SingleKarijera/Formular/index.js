import { UploadBlockTop, UploadBlockTopLayer, WrapAll } from "./style.js";
import useWindowSize from "../../../helper/usewindowsize.js";

import { useScrollPercentage } from "react-scroll-percentage";
import {
  StyledForm,
  StyledInput,
  StyledButton,
  StyledButtonMob,
  StyledLabel,
  StyledTextarea,
  WrapData,
  DoubleRow,
  SmallBlock,
  WrapUpload,
  UploadBlock,
} from "./style.js";
import { useState } from "react";
import Image from "next/image.js";
// import "bootstrap/dist/css/bootstrap.min.css";

function Formular() {
  const [ime, setIme] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [poruka, setPoruka] = useState("");
  const [file, setFile] = useState(null);

  const [enabled, setEnabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleIme = (e) => {
    setIme(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleTel = (e) => {
    setTelefon(e.target.value);
  };
  const handlePoruka = (e) => {
    setPoruka(e.target.value);
  };
  const handleFile = (e) => {
    setFile(e.target.value);
  };
  // const buttonEnabled = (username, password) => {
  //   if (username.length > 0 && password.length > 0) {
  //     setEnabled(true);
  //   } else {
  //     setEnabled(false);
  //   }
  // };
  const size = useWindowSize();
  const [ref, percentage] = useScrollPercentage({
    /* Optional options */
    threshold: 0,
  });
  return (
    <WrapAll ref={ref}>
      <StyledForm onSubmit={handleSubmit}>
        <WrapData>
          <StyledLabel>Ime i Prezime</StyledLabel>
          <StyledInput type="text" value={ime} onChange={(e) => handleIme(e)} />
          <DoubleRow>
            <SmallBlock>
              <StyledLabel>Email</StyledLabel>
              <StyledInput
                type="email"
                value={email}
                onChange={(e) => handleEmail(e)}
              />
            </SmallBlock>
            <SmallBlock>
              <StyledLabel>Broj mobitela</StyledLabel>
              <StyledInput
                type="tel"
                value={telefon}
                onChange={(e) => handleTel(e)}
              />
            </SmallBlock>
          </DoubleRow>
          <StyledLabel>Poruka</StyledLabel>
          <StyledTextarea
            type="text"
            value={poruka}
            onChange={(e) => handlePoruka(e)}
            rows={4}
          />
          <StyledButton type="submit">Pošalji prijavu</StyledButton>
        </WrapData>
        <WrapUpload>
          <StyledLabel>Upload CV-a:</StyledLabel>

          <UploadBlock
            type="file"
            onChange={(e) => handleFile(e)}
          ></UploadBlock>
          <UploadBlockTopLayer />
        </WrapUpload>
        <StyledButtonMob type="submit">Pošalji prijavu</StyledButtonMob>
      </StyledForm>
    </WrapAll>
  );
}

export default Formular;
