import { UploadBlockTop, UploadBlockTopLayer, WrapAll } from "./style.js";
import useWindowSize from "../../../helper/usewindowsize.js";

import { useScrollPercentage } from "react-scroll-percentage";
import {
  StyledForm,
  StyledInput,
  StyledButton,
  StyledAlert,
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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // validate password and set passwordInvalid state accordingly
    if (password.length < 8) {
      setPasswordInvalid(true);
    } else {
      setPasswordInvalid(false);
    }
  };

  const usernameEntered = (e) => {
    setUsername(e.target.value);
    // buttonEnabled(username, password)
  };

  const passwordEntered = (e) => {
    setPassword(e.target.value);
    // buttonEnabled(username, password)
  };

  const buttonEnabled = (username, password) => {
    if (username.length > 0 && password.length > 0) {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  };
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
          <StyledInput
            type="text"
            value={username}
            onChange={(e) => usernameEntered(e)}
          />
          <DoubleRow>
            <SmallBlock>
              <StyledLabel>Email</StyledLabel>
              <StyledInput
                type="email"
                value={password}
                onChange={(e) => passwordEntered(e)}
              />
            </SmallBlock>
            <SmallBlock>
              <StyledLabel>Broj mobitela</StyledLabel>
              <StyledInput
                type="tel"
                value={password}
                onChange={(e) => passwordEntered(e)}
              />
            </SmallBlock>
          </DoubleRow>
          <StyledLabel>Poruka</StyledLabel>
          <StyledTextarea
            type="text"
            value={username}
            onChange={(e) => usernameEntered(e)}
            rows={4}
          />
          <StyledButton type="submit">Pošalji prijavu</StyledButton>
        </WrapData>
        <WrapUpload>
          <StyledLabel>Upload CV-a:</StyledLabel>
          <UploadBlock type="file"></UploadBlock>
          <UploadBlockTopLayer />
        </WrapUpload>
      </StyledForm>
    </WrapAll>
  );
}

export default Formular;
