import { StoreBoxProps } from "@/types/propsTypes";
import Image from "next/image";
import React from "react";

const StoreBox = ({ store, setStore }: StoreBoxProps) => {
	return (
		<div className='fixed transition ease-in-out delay-150 inset-x-0 mx-auto bottom-20 rounded-lg shadow-lg max-w-sm md:max-w-xl z-10 w-full bg-white'>
			{store && (
				<div>
					<Image
						src={
							store?.bizcnd_code_nm
								? `/images/markers/${store?.bizcnd_code_nm}.png`
								: `/images/markers/default.png`
						}
						alt='selected marker'
						width={40}
						height={40}
					/>
					<div>
						<div className='font-semibold'>{store?.upso_nm}</div>
						<div className='text-sm'>{store?.cob_code_nm}</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default StoreBox;
