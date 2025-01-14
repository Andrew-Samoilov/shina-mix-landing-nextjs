"use client";
import Form from "next/form";
import SubmitButton from "./submit-button";
import { useState } from "react";
import { contactHandleSubmit } from "@/data/loaders";

export function ContactForm() {
    const [isChecked, setIsChecked] = useState(true);
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    return (
        <Form
            action={contactHandleSubmit}
            aria-label="Форма зворотнього звязку"
            className='flex flex-col items-start min-w-[55vw] xl:min-w-[40vw] mx-auto
                border border-border dark:border-darkmode-border rounded-md p-10'>
            <label htmlFor='contact_name' className='form-label'>Ім&apos;я</label>
            <input
                name='contact_name'
                type='text'
                id='contact_name'
                autoComplete='name'
                className='mb-6 form-input' />
            <label
                htmlFor='contact_email'
                className='form-label'>Email
            </label>
            <input
                name='contact_email'
                type='email'
                id='contact_email'
                autoComplete='email'
                className='mb-6 form-input' />
            <label
                htmlFor='contact_tel'
                className='form-label'>Тел
            </label>
            <input
                name='contact_tel'
                type='tel'
                id='contact_tel'
                autoComplete='tel'
                className='mb-6 form-input' />
            <label htmlFor='contact_message' className='form-label'>Повідомлення <span className='text-red-500'>*</span></label>
            <textarea
                required={true}
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
                    onChange={handleCheckboxChange}
                />
                <label
                    htmlFor='contact_ok'
                    className="max-md:text-base font-normal text-dark dark:text-darkmode-light"
                >Погоджуюсь з умовами використання</label>
            </div>

            <SubmitButton
                disabled={!isChecked}
                pendingText="Надсилання ..."
                className='ml-auto btn btn-primary md:btn-lg font-medium'>
                Надіслати
            </SubmitButton>
        </Form>
    )
}
