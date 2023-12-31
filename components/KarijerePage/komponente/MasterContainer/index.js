import { MasterContainerWrapper } from "./style";
import Script from "next/script";

// ne znan zasto baca warning ali radi kako se ocekuje
//eslint-disable-next-line
const MasterContainer = ({ children }) => (
  <MasterContainerWrapper>
    <Script src="https://ucarecdn.com/libs/widget/3.x/uploadcare.full.min.js"></Script>
    {children}
  </MasterContainerWrapper>
);

export default MasterContainer;
