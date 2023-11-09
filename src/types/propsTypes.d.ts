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

// map
export interface MapProps {
	setMap: Dispatch<SetStateAction<any>>;
}

export interface MarkerProps {
	map: any;
	stores: StoreType[];
	setCurrentStore: Dispatch<SetStateAction<any>>;
}

// store box
export interface StoreBoxProps {
	store: StoreType | null;
	setStore: (store: StoreType | null) => void;
}

export = {};
