'use server'
import landingPageData from "../data/landingPageData.json";

export async function getHomePageData() {
    return {
        data: {
            blocks: landingPageData
        }
    };
}