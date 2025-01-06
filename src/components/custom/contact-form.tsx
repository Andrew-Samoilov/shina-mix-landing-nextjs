import Form from "next/form";
import SubmitButton from "./submit-button";
import { getStrapiURL } from "@/lib/utils";

async function handleSubmit(formData: FormData) {
    "use server"; 

    const contact_name = formData.get("contact_name");
    const contact_email = formData.get("contact_email");
    const contact_tel = formData.get("contact_tel");
    const contact_message = formData.get("contact_message");

    const baseUrl = getStrapiURL();
    const url = new URL("/api/messages", baseUrl);

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            data: { contact_name, contact_email, contact_tel, contact_message },
        }),
    });

    if (!response.ok) {
        throw new Error("Failed to submit data");
    }

}

export function ContactForm() {
    return (
        <Form action={handleSubmit}
            className='flex flex-col items-start min-w-[55vw] xl:min-w-[40vw] mx-auto
                border border-border dark:border-darkmode-border rounded-md p-10'>
            <label htmlFor='contact_name' className='form-label'>Ім&apos;я</label>
            <input
                name='contact_name'
                type='name'
                id='contact_name'
                autoComplete='off'
                className='mb-6 form-input' />
            <label
                htmlFor='contact_email'
                className='form-label'>Email
            </label>
            <input
                name='contact_email'
                type='email'
                id='contact_email'
                autoComplete='off'
                className='mb-6 form-input' />
            <label
                htmlFor='contact_tel'
                className='form-label'>Тел
            </label>
            <input
                name='contact_tel'
                type='tel'
                id='contact_tel'
                autoComplete='off'
                className='mb-6 form-input' />
            <label htmlFor='contact_message' className='form-label'>Повідомлення <span className='text-red-500'>*</span></label>
            <textarea
                name='contact_message'
                id='contact_message'
                rows={4}
                className='mb-6 form-input' />
            <div className="mb-6 ">
                <input
                    type='checkbox'
                    defaultChecked
                    name='contact_ok'
                    id='contact_ok'
                    className="mr-2 rounded"
                />
                <label
                    htmlFor='contact_ok'
                    className="font-secondary text-xl max-md:text-base font-normal text-dark dark:text-darkmode-light"
                >Погоджуюсь з умовами використання</label>
            </div>

            <SubmitButton
                className='ml-auto btn btn-primary md:btn-lg'>
                Надіслати
            </SubmitButton>
        </Form>
    )
}
