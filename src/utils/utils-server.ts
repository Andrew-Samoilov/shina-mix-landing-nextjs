'use server'
import qs from "qs";
import { getStrapiURL } from "@/utils/utils";

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
  const contact_name = formData.get("contact_name");
  const contact_email = formData.get("contact_email");
  const contact_tel = formData.get("contact_tel");
  const contact_message = formData.get("contact_message");
  const url = new URL("/api/messages", baseUrl);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: {
        ...(contact_name ? { contact_name } : {}),
        ...(contact_email ? { contact_email } : {}),
        ...(contact_tel ? { contact_tel } : {}),
        ...(contact_message ? { contact_message } : {}),
      },
    }),
  });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to submit data: ${errorText}`);
    }
    return { success: true, message: "Form submitted successfully" };
  } catch (error) {
    console.error("Error in handleSubmit:", error);
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
}

export async function priceHandleSubmit(formData: FormData) {

    try {
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");
        const url = new URL("/api/prices", process.env.NEXT_PUBLIC_STRAPI_URL);

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                data: { name, eMail: email, message },
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to submit data: ${errorText}`);
        }
        return { success: true, message: "Form submitted successfully" };
    } catch (error) {
        console.error("Error in handleSubmit:", error);
        return {
            success: false,
            message:
                error instanceof Error ? error.message : "An unknown error occurred",
        };
    }

}
