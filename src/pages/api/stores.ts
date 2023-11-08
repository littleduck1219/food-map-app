import { StoreType } from "@/types/dataTypes";
import type { NextApiRequest, NextApiResponse } from "next";

export const handler = async (req: NextApiRequest, res: NextApiResponse<StoreType[]>) => {
	const stores = (await import("../../data/seoul_store_data.json"))["DATA"] as StoreType[];

	res.status(200).json(stores);
};
