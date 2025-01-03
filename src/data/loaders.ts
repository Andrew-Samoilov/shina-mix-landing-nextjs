import qs from "qs";
import { getStrapiURL } from "@/lib/utils";

const baseUrl = getStrapiURL();

export async function getGlobalData() {
  const url = new URL("/api/global", baseUrl);

  url.search = qs.stringify({
    populate: {
      header: {
        populate: ["logoText", "menuItems"],
      },
      footer: {
        populate: ["logoText", "socialLinks"],
      },
    },
  });

  return await fetchData(url.href);
}

async function fetchData(url: string) {
  const authToken = null; // we will implement this later getAuthToken() later
  const headers = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };

  try {
    const response = await fetch(url, authToken ? headers : {});
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // or return null;
  }
}

export async function getHomePageData() {
  const url = new URL("/api/landing-page", baseUrl);

  // console.log(`1111`);
  // console.dir(url);
  // console.log(`1111`);

  url.search = qs.stringify({
    populate: {
      blocks: {
        on: {
          "layout.hero-section": {
            populate: {
              image: { fields: ["url", "alternativeText"], },
              link: { populate: true, },
            },
          },
          "layout.sert-section": {
            populate: {
              sert: {
                populate: {
                  image: { populate: true, },
                }
              },
            },
          },
          "layout.features-section": {
            populate: {
              feature: {
                populate: true,
              },
            },
          },
          "layout.benefits-section": {
            populate: {
              benefit: {
                populate: true,
              },
            },
          },
          "layout.price-section": {
            populate: {
              populate: true,
            },
          },
          "layout.brends-section": {
            populate: {
              brand: {
                populate: {
                  image: { populate: true, },
                }
              },
            },
          },


          "layout.contact-section": {
            populate: {
              contact: {
                populate: {
                  link: {
                    populate: true,
                  },
                  icon: {
                    fields: ["url", "alternativeText"],
                  },
                },
              },
            },
          },



        },

      },
    },
  });

  return await fetchData(url.href);
}

interface PriceData {
  name: string;
  eMail: string;
  message: string;
}

export async function createPriceRecord(price: PriceData): Promise<void> {
  try {
    const response = await fetch("http://localhost:1337/api/prices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: price,
      }),
    });

    if (!response.ok) {
      throw new Error("Error creating price record");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
