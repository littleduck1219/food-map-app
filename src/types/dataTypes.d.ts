export interface StoreType {
	id: number;
	phone?: string | null;
	address?: string | null;
	lat?: string | null;
	lng?: string | null;
	name?: string | null;
	category?: string | null;
	storeType?: string | null;
	foodCertifyName?: string | null;
	data?: any;
}

export interface StoreApiResponse {
	data: StoreType[];
	totalPage?: number | undefined;
	totalCount?: number;
	page?: number;
}

export interface StoreCategories {
	[key: string]: string;
	korean: string;
	japanese: string;
	china: string;
	asian: string;
	bakery: string;
	blowfish: string;
	cafe: string;
	india: string;
	snack: string;
	bar: string;
	soup: string;
	western: string;
	default: string;
}
