declare global {
    interface Window {
        dataLayer: Record<string, unknown>[];
    }
}

export const sendGAEvent = (eventName: string, eventParams = {}) => {
    if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: eventName,
            ...eventParams,
        });
        console.log(`📊 Відправлено подію в GA4: ${eventName}`, eventParams);
    }
};
