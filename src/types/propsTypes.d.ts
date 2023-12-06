import { StoreType } from "./dataTypes";

// Layout
export interface LayoutProps {
    children: ReactNode;
}

// Home
declare global {
    interface Window {
        kakao: any;
    }
}

//Nav
export interface ActiveNavProps {
    href: any;
    children: string;
}

// map
export interface MapProps {
    lat?: string | null;
    lng?: string | null;
    zoom?: number;
}

export interface MarkerProps {
    map?: any;
    store?: any;
    stores?: StoreType[];
    setCurrentStore?: Dispatch<SetStateAction<any>>;
}

// store box
export interface StoreBoxProps {
    store: StoreType | null;
    setStore: (store: StoreType | null) => void;
}

// Pagenation

export interface PagenationProps {
    total: number;
    page: string;
}

// filter
export interface SearchFilterProps {
    setQ: Dispatch<SetStateAction<string | null>>;
    setDistrict: Dispatch<SetStateAction<string | null>>;
}

export = {};
