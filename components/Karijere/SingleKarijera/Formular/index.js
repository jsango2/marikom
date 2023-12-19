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
import en from "../../../../locales/en.json";
import hr from "../../../../locales/hr.json";
import { useRouter } from "next/router.js";

function Formular() {
  const { locale } = useRouter();
  const t = locale === "en" ? en : hr;
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
          <StyledLabel>{t.Formular.ime}</StyledLabel>
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
              <StyledLabel>{t.Formular.broj}</StyledLabel>
              <StyledInput
                type="tel"
                value={telefon}
                onChange={(e) => handleTel(e)}
              />
            </SmallBlock>
          </DoubleRow>
          <StyledLabel>{t.Formular.poruka}</StyledLabel>
          <StyledTextarea
            type="text"
            value={poruka}
            onChange={(e) => handlePoruka(e)}
            rows={4}
          />
          <StyledButton type="submit">{t.Formular.button}</StyledButton>
        </WrapData>
        <WrapUpload>
          <StyledLabel>{t.Formular.upload}</StyledLabel>

          <UploadBlock
            type="file"
            onChange={(e) => handleFile(e)}
          ></UploadBlock>
          <UploadBlockTopLayer />
        </WrapUpload>
        <StyledButtonMob type="submit">{t.Formular.button}</StyledButtonMob>
      </StyledForm>
    </WrapAll>
  );
}

export default Formular;
