import { toast } from "react-toastify";

export async function handleClientSubmit(
    formData: FormData,
    submitFunction: (formData: FormData) => Promise<{ success: boolean; message: string }>
) {
    const result = await submitFunction(formData);

    if (!result.success) {
        toast.error(result.message);
    } else {
        toast.success("Запит успішно надіслано!");
    }
}
