import { StoreApiResponse, StoreType } from "@/types/dataTypes";
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const handler = async (req: NextApiRequest, res: NextApiResponse<StoreApiResponse | StoreType | StoreType[]>) => {
	// next api
	// const stores = (await import("../../data/seoul_store_data.json"))["DATA"] as StoreType[];

	// prisma
	const { page = "" }: { page?: string } = req.query; // 기본 페이지 정의
	const prisma = new PrismaClient();

	if (page) {
		const count = await prisma.store.count();
		const skipPage = parseInt(page) - 1;
		const stores = await prisma.store.findMany({
			orderBy: { id: "asc" }, // id 기준 정렬
			take: 20, // 갯수 제한
			skip: skipPage * 10,
		});

		res.status(200).json({
			page: parseInt(page),
			data: stores,
			totalCount: count,
			totalPage: Math.ceil(count / 10),
		});
	} else {
		const { id }: { id?: string } = req.query;

		const stores = await prisma.store.findMany({
			orderBy: { id: "asc" },
			where: {
				id: id ? parseInt(id) : {},
			},
		});
		return res.status(200).json(id ? stores[0] : stores);
	}
};

export default handler;
