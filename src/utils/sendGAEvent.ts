declare global {
    interface Window {
        dataLayer: Record<string, unknown>[];
        gtag?: (event: "event", action: string, params: Record<string, unknown>) => void;
    }
}

export const sendGAEvent = (eventName: string, eventParams: Record<string, unknown> = {}) => {
    if (typeof window !== "undefined") {
        // console.log(`📊 Відправка події в GA4: ${eventName}`, eventParams);

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: eventName,
            ...eventParams,
        });

        if (window.gtag) {
            // console.log("✅ Викликаємо `gtag()` з подією:", eventName);
            window.gtag("event", eventName, eventParams);
        } else {
            console.error("❌ `gtag()` не знайдено! GA4 може бути неправильно підключений.");
        }
    }
};
