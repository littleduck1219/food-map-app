import React, { useState } from "react";
import { MdOutlineMyLocation } from "react-icons/md";

const CurrentLocationButton = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const handleCurrentPosition = () => {
		setLoading(true);

		// getLocation 동작
		const options = {
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: Infinity, // 위치 캐싱
		};

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position: any) => {
					const currentPosition = new window.kakao.maps.LatLng(
						position.coords.latitude,
						position.coords.longitude
					);
				},
				() => {},
				options
			);
		}
	};
	return (
		<button
			type='button'
			onClick={handleCurrentPosition}
			className='fixed z-10 p-2 shadow right-5 bottom-20 bg-white rounded-md hover:shadow-lg focus:shadow-lg hover:bg-blue-200
    '>
			<MdOutlineMyLocation className='w-5 h-5' />
		</button>
	);
};

export default CurrentLocationButton;
