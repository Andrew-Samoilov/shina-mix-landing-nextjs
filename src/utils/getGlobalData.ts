'use server'
import qs from "qs";
import { fetchData, getStrapiURL } from "./index";

export async function getGlobalData() {
    const url = new URL("/api/global", getStrapiURL());

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
