const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query, { variables } = {}) {
  const headers = { "Content-Type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getOglasById(id, preview) {
  const data = await fetchAPI(
    `
      query OglasById($id: ID!) {
        oglas(id: $id, idType: ID) {   
         title
    id
    oglasi {
      uvjetiEng
      uvjeti
      tvrtka
      stoNudimoEng
      stoNudimo
      opisPoslaEng
      opisPosla
      natjecajTrajeDo
      naslovOglasaEng
      naslovOglasa
      mojPosaoLink
      mjestoRada
      fieldGroupName
      fotografija {
        sourceUrl
      }
    }
    date
        }
      }
    `,
    {
      variables: {
        id: id, // Pass the ID directly to the GraphQL query
        preview,
      },
    }
  );

  return data?.oglas; // Returns the specific novost node
}

export async function getAllOglasi(preview) {
  const data = await fetchAPI(
    `
      query allOglas{
        oglasi {
          edges {
            node {
            id
              oglasi {
                uvjeti
                tvrtka
                stoNudimo
                opisPosla
                natjecajTrajeDo
                mojPosaoLink
                mjestoRada
                fieldGroupName
                naslovOglasa
                naslovOglasaEng
                stoNudimoEng
                opisPoslaEng
                uvjetiEng
                fotografija {
                  sourceUrl
                }
              }
              date
              title
            }
          }
        }
      }
    `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  );

  return data?.oglasi;
}

export async function getAllOglasiNaslovi(preview) {
  const data = await fetchAPI(
    `
      query allOglas{
        oglasi {
          edges {
            node {
            id
            title
            }
          }
        }
      }
    `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  );

  return data?.oglasi;
}
// lib/api2.js (New or modified function)

export async function getNovostById(id, preview) {
  const data = await fetchAPI(
    `
      query NovostById($id: ID!) {
        novost(id: $id, idType: ID) { 
          id
          slug
          novosti {
            naslov
            naslovEng
            gallery {
              id
              sourceUrl
            }
            textNovosti
            seoDescription
            seoOpis
            textNovostiEng
            istaknutaNovost
            datum
            istaknutaFotografija {
              sourceUrl
              srcSet
            }
          }
        }
      }
    `,
    {
      variables: {
        id: id, // Pass the ID directly to the GraphQL query
        preview,
      },
    }
  );

  return data?.novost; // Returns the specific novost node
}
export async function getAllRadnaVremena(preview) {
  const data = await fetchAPI(
    `
    query svaRadnaVremena {
 radnaVremena {
    edges {
      node {
        radnaVremenaPoslovnica {
          dubrovnik {
            ponpet
            sub
          }
          metkovic {
            ponpet
            sub
          }
          rijeka {
            ponpet
            sub
          }
          zadar {
            ponpet
            sub
          }
        }
      }
    }
  }
}
    `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  );

  return data?.radnaVremena;
}

export async function getAllNovosti(preview) {
  const data = await fetchAPI(
    `
      query allNovosti {
        novosti {
          edges {
            node {
             id
             slug
              novosti {
                naslov
                naslovEng
                gallery {
                  id
                  sourceUrl
                }
                textNovosti
                seoDescription
                seoOpis
                textNovostiEng
                istaknutaNovost
                datum
                istaknutaFotografija {
                  sourceUrl
                  srcSet
                }
              }
            }
          }
        }
      }
    `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  );

  return data?.novosti;
}

export async function getFirstThreeNovosti(preview) {
  const data = await fetchAPI(
    `
      query allNovosti {
        novosti(first: 3)  {
          edges {
            node {
             id
             slug
              novosti {
                naslov
                naslovEng
                gallery {
                  id
                  sourceUrl
                }
                textNovosti
                seoDescription
                seoOpis
                textNovostiEng
                istaknutaNovost
                datum
                istaknutaFotografija {
                  sourceUrl
                  srcSet
                }
              }
            }
          }
        }
      }
    `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  );

  return data?.novosti;
}

export async function getAllNovostiNaslovi(preview) {
  const data = await fetchAPI(
    `
      query allNovosti {
        novosti {
          edges {
            node {
             id
             slug
              novosti {
                naslov
                naslovEng
              }
            }
          }
        }
      }
    `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  );

  return data?.novosti;
}

// export async function getAllKontakti(preview) {
//   const data = await fetchAPI(
//     `
//       query allKontakti{
//         kontakti {
//           edges {
//             node {
//               kontakti {
//                 prviKontakt {
//                   brojTelefona
//                   email
//                   fotografija {
//                     sourceUrl
//                   }
//                   funkcija
//                   funkcijaEng
//                   imeIPrezime
//                 }
//                 ostaliKontakti {
//                   brojTelefona
//                   email
//                   funkcija
//                   funkcijaEng
//                   imeIPrezime
//                 }
//               }
//             }
//           }
//         }
//       }
//     `,
//     {
//       variables: {
//         onlyEnabled: !preview,
//         preview,
//       },
//     }
//   );

//   return data?.kontakti;
// }

export async function getAllProizvodi(preview) {
  const data = await fetchAPI(
    `
      query allProizvodi {
  proizvodi(first:300) {
    edges {
      node {
        title
        slug
        proizvodiInformacije {
          aktivatorProizvoda
          brojKutijaNaPaleti
          certifikatMsc
          certifikatZivjetiZdravo
          featuredPerlaProduct
          fieldGroupName
          ifsFood
          imeProizvodaDo60Znakova
          imeProizvodaDo60ZnakovaEng
          jedinicaMjere
          kataloskiBroj
          kategorijaKojojProizvodPripada
          latinskiNazivDo60Znakova
          marketinskoImePerlaProizvodaEng
          marketinskoImePerlaProizvodaHr
          nacinSmrzavanja
          opisEngDo300Znakova
          opisHrDo300Znakova
          ostaleJediniceVelicinaPecaturaBrojKomUKg
          oznakaNovo
          oznakaNovoPakiranje
          vrijednostOstaleVelicine
          tezinaPoJediniciMjere
          perlaHoreca
          slikaProizvoda {
            sourceUrl
          }
        }
        proizvodId
      }
    }
  }
}
    `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  );

  return data?.proizvodi;
}
