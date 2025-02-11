'use server'
import { getStrapiURL } from "./index";

export async function priceHandleSubmit(formData: FormData) {
    try {
        console.log("📦 Price Дані перед відправкою:", Object.fromEntries(formData.entries()));
        const url = new URL("/api/prices", getStrapiURL());
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
