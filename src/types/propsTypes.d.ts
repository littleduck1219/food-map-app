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
	storeDatas: any[];
	setCurrentStore: Dispatch<SetStateAction<any>>;
}

// store box
export interface StoreBoxProps {
	store: any;
	setStore: Dispatch<SetStateAction<any>>;
}

export = {};
