'use server'

export async function fetchData(url: string) {
    const headers = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    };

    try {
        const response = await fetch(url, headers);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}
