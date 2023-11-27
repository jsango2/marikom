import React, { useState, useEffect } from "react";

import { catalogData } from "../../catalogData";
import { news } from "../../news";
import Layout from "../../components/layout";
import { useRouter } from "next/router";

export default function News({ page, params }) {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const [language, setLanguage] = useState(locale);
  const router = useRouter();

  return (
    <Layout>
      <div
        style={{
          textAlign: "center",
          fontSize: "45px",
          marginTop: "40px",
          color: "black",
        }}
      >
        {locale === "hr" ? (
          <div>Naslov: {page.naslov}</div>
        ) : (
          <div>Title: {page.naslovEng}</div>
        )}
      </div>
    </Layout>
  );
}

// export async function getStaticPaths() {
//   const paths = catalogData.map((page) => {
//     const slug = page["IME PROIZVODA - do 60 znakova"];
//     return { params: { slug } };
//   });
//   return { paths, fallback: true };
// }

///------//
// string.split(" ").join("")
// export const getStaticPaths = async () => {;
//   const pathsNoSpace = catalogData.map((path) => path.IME.split(" ").join(""));
//   paths: catalogData.pathsNoSpace((node) => `/posts/${node.IME}`) || [];
//   return
//   return {
//     fallback: false,
//   };
// };
// export async function getStaticPaths() {
//   const paths = catalogData.map((page) => {
//     const slug = page["IME PROIZVODA - do 60 znakova"];
//     return { params: { slug } };
//   });
//   return { paths, fallback: true };
// }

// export const getStaticPaths = ({ locales }) => {
//   return {
//     paths: [
//       // if no `locale` is provided only the defaultLocale will be generated
//       { params: { slug: "post-1" }, locale: "en-US" },
//       { params: { slug: "post-1" }, locale: "fr" },
//     ],
//     fallback: true,
//   };
// };

// export async function getStaticPaths() {
//   const paths = news.map((page) => {
//     const slug = page.naslov.toLowerCase().split(" ").join("-");
//     const slugEng = page.naslovEng.toLowerCase().split(" ").join("-");

//     return { params: { slug, slugEng }, locale: "hr" };
//   });
//   return { paths, fallback: true };
// }

export async function getStaticPaths({ locales }) {
  const paths = [];

  locales.forEach((locale, i) => {
    news.forEach((post, i) => {
      paths.push({
        params: { slug: post.naslov.toLowerCase().split(" ").join("-") },
        locale,
      });
    });
  });

  return { paths, fallback: false };
}

// // export async function getStaticProps({ params }) {
// //   const currentPath = `/posts/${params}`;
// //   const page = catalogData.find((page) => page.IME === );
// //   return { props: { page } };
// // }

export async function getStaticProps({ params }) {
  const currentPath = params.slug;
  const page = news.find(
    (page) => page.naslov.toLowerCase().split(" ").join("-") === currentPath
  ) || { notfound: true };

  // const page = catalogData.find((a) => a.IME === "Lignja")
  return { props: { page, params } };
}
