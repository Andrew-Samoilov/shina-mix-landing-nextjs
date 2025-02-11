'use server'
import qs from "qs";
import { getStrapiURL } from "./getStrapiURL";

// const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
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
  const headers = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  };

  try {
    const response = await fetch(url, headers);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function getHomePageData() {
  const url = new URL("/api/landing-page", baseUrl);

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
              feature: { populate: true, },
            },
          },
          "layout.benefits-section": {
            populate: {
              benefit: { populate: true, },
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
                  link: { populate: true, },
                  icon: {
                    fields: ["url", "alternativeText"],
                  },
                },
              },
              address: { populate: true, },
            },

          },
        },

      },
    },
  });

  return await fetchData(url.href);
}

export async function contactHandleSubmit(formData: FormData) {
  try {
    console.log("📦 Contact Дані перед відправкою:", Object.fromEntries(formData.entries()));
    const url = new URL("/api/messages", baseUrl);
    // console.log(`Url: `, url);
    const jsonData = {
      data: {
        contact_name: formData.get("contact_name"),
        contact_email: formData.get("contact_email"),
        contact_tel: formData.get("contact_tel"),
        contact_message: formData.get("contact_message"),
        recaptcha: formData.get("recaptcha"),
      }
    };

    // console.log("📤 Відправляємо у Strapi:", jsonData);
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify(jsonData),
    });

    const responseText = await response.text();
    console.log("🔹 Отримана відповідь від Strapi:", response.status, responseText);

    if (!response.ok) {
      throw new Error(`Failed to submit data: ${responseText}`);
    }

    return { success: true, message: "Form submitted successfully" };

  } catch (error) {
    console.error("❌ Помилка у `contactHandleSubmit`:", error);
    return { success: false, message: "Не вдалося відправити форму." };
  }
}

export async function priceHandleSubmit(formData: FormData) {
  try {
    console.log("📦 Price Дані перед відправкою:", Object.fromEntries(formData.entries()));
    const url = new URL("/api/prices", baseUrl);
    // console.log(`Url: `, url);
    const jsonData = {
      data: {
        name: formData.get("name"),
        eMail: formData.get("email"),
        message: formData.get("message"),
        recaptcha: formData.get("recaptcha"),
      }
    };

    // console.log("📤 Відправляємо у Strapi:", jsonData);
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jsonData),
    });

    const responseText = await response.text();
    console.log("🔹 Отримана відповідь від Strapi:", response.status, responseText);

    if (!response.ok) {
      throw new Error(`Failed to submit data: ${responseText}`);
    }

    return { success: true, message: "Form submitted successfully" };
  } catch (error) {
    console.error("❌ Помилка у `priceHandleSubmit`:", error);
    return { success: false, message: "Не вдалося відправити форму." };
  }
}
