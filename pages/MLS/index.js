import React from "react";
import Layout from "../../components/layout";
import Hero from "../../components/MLSpage/hero/hero";
import Main from "../../components/MLSpage/main";

function index() {
  return (
    <Layout>
      <Hero />
      <Main />
    </Layout>
  );
}

export default index;

// export async function getStaticProps({ locales }) {
//   const kontakti = await getAllKontakti();

//   return {
//     props: {
//       fallback: false,
//       kontakti,
//     },
//   };
// }
