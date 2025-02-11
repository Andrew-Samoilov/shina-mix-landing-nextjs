import { handleClientSubmit } from "./handleClientSubmit";

export async function handleRecaptchaSubmit(
    formId: string,
    recaptchaToken: string,
    submitFunction: (formData: FormData) => Promise<{ success: boolean; message: string }>
) {
    const form = document.getElementById(formId) as HTMLFormElement;
    if (!form) return;

    const formData = new FormData(form);
    formData.append("recaptcha", recaptchaToken);

    await handleClientSubmit(formData, submitFunction);
    form.reset();
}
