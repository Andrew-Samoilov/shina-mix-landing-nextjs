interface IImage {
    id: number;
    documentId: string;
    url: string;
    alternativeText: string | null;
    width?: number;
    height?: number;
}

interface ILink {
    id: number;
    url: string;
    text: string;
}

export interface HeroSectionProps {
    id: number;
    // documentId: string;
    __component: string;
    heading: string;
    subHeading: string;
    image: IImage;
    link: ILink;
}

interface SertProps {
    id: number;
    text: string;
    image: IImage;
}

export interface SertSectionProps {
    id: number;
    __component: string;
    title: string;
    sert: SertProps[];
}

interface FeatureProps {
    id: number;
    number: string;
    header: string;
    subHeader: string;
}

export interface FeatureSectionProps {
    id: number;
    __component: string;
    title: string;
    description: string;
    feature: FeatureProps[];
}

interface BenefitProps {
    id: number;
    title: string;
}

export interface BenefitSectionProps {
    id: number;
    __component: string;
    title: string;
    description: string;
    benefit: BenefitProps[];
}

export interface PriceSectionProps {
    id: number;
    __component: string;
    title: string;
    description: string;
}

interface BrandProps {
    id: number;
    name: string;
    image: IImage;
}

export interface BrandSectionProps {
    id: number;
    __component: string;
    title: string;
    brand: BrandProps[];
}

interface Address {
    id: number;
    destination: string;
    destinationTitle: string;
}

interface ContactProps {
    id: number;
    name?: string;
    icon?: {
        url: string;
    };
    link: ILink[];
}

export interface ContactSectionProps {
    id: number;
    __component: string;
    title: string;
    description: string;
    contact: ContactProps[];
    address: Address[];
}
