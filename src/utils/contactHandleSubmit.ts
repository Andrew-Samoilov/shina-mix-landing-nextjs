'use server'
import { getStrapiURL } from "./index";

export async function contactHandleSubmit(formData: FormData) {
    try {
        // console.log("📦 Contact Дані перед відправкою:", Object.fromEntries(formData.entries()));
        const url = new URL("/api/messages", getStrapiURL());
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
        // console.log("🔹 Отримана відповідь від Strapi:", response.status, responseText);

        if (!response.ok) {
            throw new Error(`Failed to submit data: ${responseText}`);
        }

        return { success: true, message: "Form submitted successfully" };

    } catch (error) {
        console.error("❌ Помилка у `contactHandleSubmit`:", error);
        return { success: false, message: "Не вдалося відправити форму." };
    }
}
