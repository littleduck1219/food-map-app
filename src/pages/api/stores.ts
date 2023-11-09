import { StoreType } from "@/types/dataTypes";
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const handler = async (req: NextApiRequest, res: NextApiResponse<StoreType[]>) => {
	// next api
	// const stores = (await import("../../data/seoul_store_data.json"))["DATA"] as StoreType[];

	// prisma
	const prisma = new PrismaClient();
	const stores = await prisma.store.findMany();

	res.status(200).json(stores);
};

export default handler;
