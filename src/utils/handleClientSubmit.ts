import { toast } from "react-toastify";
import { sendGAEvent } from "./sendGAEvent";

export async function handleClientSubmit(
    formId: string,
    formData: FormData,
    submitFunction: (formData: FormData) => Promise<{ success: boolean; message: string }>
) {
    // console.log("📨 Вміст FormData:", Object.fromEntries(formData.entries()));

    const result = await submitFunction(formData);


    if (!result.success) {
        toast.error(result.message);
    } else {
        toast.success("Запит успішно надіслано!");

        switch (formId) {
            case "price-form":
                sendGAEvent("subscribe_price_list", {
                    event_category: "Form",
                    event_label: "Price Subscription",
                });
                break;
            case "contact-form":
                sendGAEvent("message_from_site", {
                    event_category: "Form",
                    event_label: "Contact Form",
                });
                break;
            default:
                console.warn("⚠️ Невідомий `id` форми: ", formId);
        }
    }
}
