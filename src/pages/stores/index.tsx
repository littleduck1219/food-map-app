import { StoreType } from "@/types/dataTypes";
import Image from "next/image";

const StoreListPage = ({ stores }: { stores: StoreType[] }) => {
	return (
		<div className='px-4 md:max-w-4xl mx-auto py-8'>
			<ul role='list' className='divide-y divide-gray-100'>
				{stores?.map((store, index) => (
					<li className='flex justify-between gap-x-6 py-5' key={index}>
						<div className='flex gap-x-4'>
							<Image
								src={
									store?.bizcnd_code_nm
										? `/images/storebox/${store?.bizcnd_code_nm}.png`
										: "/images/storebox/default.png"
								}
								width={48}
								height={48}
								alt='이미지'
							/>

							<div>
								<div className='text-sm font-semibold leading-6 text-gray-900'>{store?.upso_nm}</div>
								<div className='mt-1 text-sx truncate font-semibold leading-5 text-gray-500'>
									{store?.upso_nm}
								</div>
							</div>
						</div>
						<div className='hidden sm:flex sm:flex-col sm:items-end'>
							<div className='text-sm font-semibold leading-6 text-gray-900'>{store?.rdn_code_nm}</div>
							<div className='mt-1 text-xs truncate font-semibold leading-5 text-gray-500'>
								{store?.tel_no || "제공번호 없음"} | {store?.crtfc_gbn_nm} | {store?.bizcnd_code_nm}
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default StoreListPage;

export const getServerSideProps = async () => {
	const stores = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/stores`).then((res) => res.json());

	return {
		props: { stores },
	};
};
