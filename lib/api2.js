const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query, { variables } = {}) {
  if (!API_URL) {
    console.error("WORDPRESS_API_URL is not defined");
    throw new Error("WORDPRESS_API_URL environment variable is not set");
  }

  const headers = { "Content-Type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  const body = JSON.stringify({
    query,
    variables,
  });

  let lastError;
  const maxRetries = 3;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      let res;

      if (typeof window === "undefined") {
        const https = require("https");
        const http = require("http");
        const { URL } = require("url");

        const parsedUrl = new URL(API_URL);
        const protocol = parsedUrl.protocol === "https:" ? https : http;

        res = await new Promise((resolve, reject) => {
          const req = protocol.request(
            parsedUrl,
            {
              method: "POST",
              headers: {
                ...headers,
                "Content-Length": Buffer.byteLength(body),
              },
            },
            (response) => {
              let data = "";
              response.on("data", (chunk) => {
                data += chunk;
              });
              response.on("end", () => {
                resolve({
                  ok: response.statusCode >= 200 && response.statusCode < 300,
                  status: response.statusCode,
                  json: async () => JSON.parse(data),
                });
              });
            }
          );

          req.on("error", reject);
          req.write(body);
          req.end();
        });
      } else {
        res = await fetch(API_URL, {
          method: "POST",
          headers,
          body,
        });
      }

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const json = await res.json();
      if (json.errors) {
        console.error(json.errors);
        throw new Error("Failed to fetch API");
      }
      return json.data;
    } catch (error) {
      lastError = error;
      console.error(`Fetch attempt ${attempt} failed:`, error.message);

      if (attempt < maxRetries) {
        const delay = attempt * 1000;
        console.log(`Retrying in ${delay}ms...`);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }

  throw new Error(
    `Failed to fetch API after ${maxRetries} attempts: ${lastError.message}`
  );
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
                tvrtka
                natjecajTrajeDo
                mojPosaoLink
                mjestoRada
                fieldGroupName
                naslovOglasa
                naslovOglasaEng
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
        novosti(first: 50)  {
          edges {
            node {
             id
             slug
              novosti {
                naslov
                naslovEng
                textNovosti
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
