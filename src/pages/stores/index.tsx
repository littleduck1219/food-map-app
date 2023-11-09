import { StoreType } from "@/types/dataTypes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";

const StoreListPage = () => {
	const {
		data: stores,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ["stores"],
		queryFn: async () => {
			const { data } = await axios("/api/stores");
			return data as StoreType[];
		},
	});

	if (isLoading) {
		return <span>Loading...</span>;
	}

	if (isError) {
		return <span>다시 시도해주세요</span>;
	}

	return (
		<div className='px-4 md:max-w-4xl mx-auto py-8'>
			<ul role='list' className='divide-y divide-gray-100'>
				{stores?.map((store, index) => (
					<li className='flex justify-between gap-x-6 py-5' key={index}>
						<div className='flex gap-x-4'>
							<Image
								src={
									store?.category
										? `/images/storebox/${store?.category}.png`
										: "/images/storebox/default.png"
								}
								width={48}
								height={48}
								alt='이미지'
							/>

							<div>
								<div className='text-sm font-semibold leading-6 text-gray-900'>{store?.name}</div>
								<div className='mt-1 text-sx truncate font-semibold leading-5 text-gray-500'>
									{store?.name}
								</div>
							</div>
						</div>
						<div className='hidden sm:flex sm:flex-col sm:items-end'>
							<div className='text-sm font-semibold leading-6 text-gray-900'>{store?.address}</div>
							<div className='mt-1 text-xs truncate font-semibold leading-5 text-gray-500'>
								{store?.phone || "제공번호 없음"} | {store?.foodCertifyName} | {store?.category}
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default StoreListPage;

// export async function getServerSideProps() {
// 	const stores = await axios(`${process.env.NEXT_PUBLIC_API_URL}/api/stores`);

// 	return {
// 		props: { stores: stores.data },
// 	};
// }
