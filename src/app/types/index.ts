export interface IImage {
    id: number;
    documentId: string;
    url: string;
    alternativeText: string | null;
    width?: number;
    height?: number;
}

export interface ILink {
    id: number;
    url: string;
    text: string;
}
