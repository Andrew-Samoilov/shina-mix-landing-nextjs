'use server'
import qs from "qs";
import { fetchData, getStrapiURL } from "./index";

export async function getHomePageData() {
    const url = new URL("/api/landing-page", getStrapiURL());

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