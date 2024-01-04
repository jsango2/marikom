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
import { useEffect, useState } from "react";

import { useFormspark } from "@formspark/use-formspark";
import Image from "next/image.js";
// import "bootstrap/dist/css/bootstrap.min.css";
import en from "../../../../locales/en.json";
import hr from "../../../../locales/hr.json";
import { useRouter } from "next/router.js";
import { storage } from "../../../firebase/firebase.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
function Formular() {
  const { locale } = useRouter();
  const t = locale === "en" ? en : hr;
  const [ime, setIme] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [poruka, setPoruka] = useState("");
  const [file, setFile] = useState(null);
  const [percent, setPercent] = useState(0);
  const [submit, submitting] = useFormspark({
    formId: process.env.NEXT_PUBLIC_FORMSPARK_FORM_ID,
  });

  const [enabled, setEnabled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // await submit({ ime, email, telefon, poruka, file });
    // alert("Form submitted");
    if (file === null) {
      await submit({ ime, email, telefon, poruka });
      alert("Form submitted");
    } else {
      handleUpload();
    }
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
  // const handleFile = (e) => {
  //   setFile(e.target.value);
  // };
  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  const handleUpload = () => {
    // const file = e.currentTarget.files;
    //   if (files) setFile(files[0]);
    //   if (!file) {
    //     alert("Please choose a file first!")
    // }

    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
          submit({ ime, email, telefon, poruka, url });
          alert("Form submitted");
          setIme("");
          setEmail("");
          setTelefon("");
          setPoruka("");
          setFile(null);
        });
      }
    );
  };

  // const buttonEnabled = (username, password) => {
  //   if (username.length > 0 && password.length > 0) {
  //     setEnabled(true);
  //   } else {
  //     setEnabled(false);
  //   }
  // };
  const size = useWindowSize();
  const [ref2, percentage] = useScrollPercentage({
    /* Optional options */
    threshold: 0,
  });
  return (
    <WrapAll ref={ref2}>
      <StyledForm onSubmit={handleSubmit}>
        <WrapData>
          <StyledLabel>{t.Formular.ime}</StyledLabel>
          <StyledInput
            type="text"
            value={ime}
            onChange={(e) => handleIme(e)}
            required
          />
          <DoubleRow>
            <SmallBlock>
              <StyledLabel>Email</StyledLabel>
              <StyledInput
                type="email"
                value={email}
                required
                onChange={(e) => handleEmail(e)}
              />
            </SmallBlock>
            <SmallBlock>
              <StyledLabel>{t.Formular.broj}</StyledLabel>
              <StyledInput
                type="tel"
                value={telefon}
                required
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

          {/* <UploadBlock
            multiple={false}
            accept="application/pdf"
            type="file"
            onChange={(e) => handleFile(e)}
          ></UploadBlock> */}

          <UploadBlock
            type="file"
            onChange={handleChange}
            accept="application/pdf"
          />
          {file !== null && (
            <div style={{ color: "black", marginTop: "20px" }}>{file.name}</div>
          )}

          {/* <button onClick={handleUpload}>Upload to Firebase</button> */}

          <UploadBlockTopLayer />
        </WrapUpload>
        <StyledButtonMob type="submit">{t.Formular.button}</StyledButtonMob>
      </StyledForm>
    </WrapAll>
  );
}

export default Formular;
