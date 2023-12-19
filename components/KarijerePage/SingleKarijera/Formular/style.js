import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  z-index: 10;
  height: 520px;
  width: 100%;
  min-width: 1080px;
  margin: 0 auto;
  padding-top: 40px;
  background: linear-gradient(
    180deg,
    rgba(199, 199, 199, 0.1) 0%,
    rgba(242, 242, 242, 0) 100%
  );
  @media only screen and (max-width: 1050px) {
    padding-bottom: 70px;
  }
  @media only screen and (max-width: 720px) {
    min-width: unset;
  }
`;

export const StyledForm = styled.form`
  padding: 20px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  max-width: 1080px;
  margin: 0 auto;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
export const WrapData = styled.div`
  position: relative;
  width: 60%;
  @media only screen and (max-width: 720px) {
    width: 95%;
  }
`;
export const WrapUpload = styled.div`
  position: relative;
  width: 30%;
`;
export const UploadBlock = styled.input`
  position: relative;
  z-index: 5;
  width: 134px;
  height: 134px;
  display: flex;
  justify-content: center;
  align-items: cente;
  border-radius: 6px;
  border: 1px solid #dbe2ea;

  background: #fff;
  background-image: url("/upload.svg");
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0;
  box-shadow: 0px 4px 8px 0px rgba(44, 39, 56, 0.04);
  cursor: pointer;
`;
export const UploadBlockTopLayer = styled.div`
  position: absolute;
  z-index: 4;
  width: 134px;
  height: 134px;
  display: flex;
  justify-content: center;
  align-items: cente;
  border-radius: 6px;
  border: 1px solid #dbe2ea;
  top: 30px;
  left: 0;
  background: #fff;
  background-image: url("/upload.svg");
  background-repeat: no-repeat;
  background-position: center;
  opacity: 1;
  box-shadow: 0px 4px 8px 0px rgba(44, 39, 56, 0.04);
  cursor: pointer;
`;
export const StyledTextarea = styled.textarea`
  position: relative;
  max-width: 100%;
  width: 100%;
`;
export const DoubleRow = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const SmallBlock = styled.div`
  position: relative;
  width: 45%;
`;
export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  color: #1c2640;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const StyledButton = styled.button`
  color: white;
  padding: 10px 40px;
  margin-top: 30px;
  border: none;

  cursor: pointer;
  display: block;
  border-radius: 4px;
  background: #4299c8;
  color: #fff;

  text-align: center;
  font-family: Gilroy;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 142.5%;
  /* opacity: ${(props) => (!props.enabled ? 0.5 : 1)}; */
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;
export const StyledButtonMob = styled.button`
  color: white;
  padding: 10px 40px;
  margin-top: 30px;
  border: none;

  cursor: pointer;
  display: block;
  border-radius: 4px;
  background: #4299c8;
  color: #fff;
  width: 300px;
  text-align: center;
  font-family: Gilroy;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 142.5%;
  /* opacity: ${(props) => (!props.enabled ? 0.5 : 1)}; */
  @media only screen and (min-width: 900px) {
    display: none;
  }
`;
export const StyledAlert = styled.div`
  padding: 10px;
  background-color: #f44336;
  color: white;
  margin-top: 10px;
  border-radius: 5px;
`;
