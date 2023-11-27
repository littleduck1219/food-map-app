import { useQuery } from "react-query";
import { useRouter } from "next/router";
import React, { useState } from "react";
import axios from "axios";
import { StoreType } from "@/types/dataTypes";
import Loader from "@/Components/Loader";
import Map from "@/Components/Map";

const StorePage = () => {
	const router = useRouter();
	const { id } = router.query;

	const [map, setMap] = useState();

	const fetchStore = async () => {
		const { data } = await axios(`/api/stores?id=${id}`);
		return data as StoreType;
	};

	const {
		data: store,
		isFetching,
		isSuccess,
		isError,
	} = useQuery(`store-${id}`, fetchStore, {
		enabled: !!id,
		refetchOnWindowFocus: false,
	});

	if (isFetching) {
		return <Loader className='mt-20' />;
	}

	if (isError) {
		return (
			<div className='w-full h-screen mx-auto pt-[10%] text-red-500 text-center font-semibold '>
				다시 시도해주세요
			</div>
		);
	}

	return (
		<>
			<div className='max-w-5xl mx-auto'>
				<div className='px-4 sm:px-0'>
					<h3 className='text-base font-semibold leading-7 text-gray-900'>{store?.name}</h3>
					<p className='mt-1 max-w-2xl text-sm leading-6 text-gray-500'>{store?.storeType}</p>
				</div>
				<div className='mt-6 border-t border-gray-100'>
					<dl className='divide-y divide-gray-100'>
						<div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
							<dt className='text-sm font-medium leading-6 text-gray-900'>주소</dt>
							<dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
								{store?.address}
							</dd>
						</div>
						<div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
							<dt className='text-sm font-medium leading-6 text-gray-900'>전화번호</dt>
							<dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
								{store?.phone ? store?.phone : "제공없음"}
							</dd>
						</div>
						<div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
							<dt className='text-sm font-medium leading-6 text-gray-900'>카테고리</dt>
							<dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
								{store?.category}
							</dd>
						</div>
						<div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
							<dt className='text-sm font-medium leading-6 text-gray-900'>식품인증</dt>
							<dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
								{store?.foodCertifyName}
							</dd>
						</div>
					</dl>
				</div>
			</div>
			{isSuccess && (
				<div className='overflow-hidden w-full mb-20 max-w-5xl mx-auto max-h-[600px]'>
					<Map setMap={setMap} lat={store?.lat} lng={store?.lng} zoom={1} />
				</div>
			)}
		</>
	);
};

export default StorePage;
