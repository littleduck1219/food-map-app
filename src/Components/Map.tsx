import React from "react";
import Script from "next/script";
import { MapProps } from "@/types/propsTypes";

const Map = ({ setMap }: MapProps) => {
	const DEFAULT_LAT = 37.497625203;
	const DEFAULT_LON = 127.03088379;
	const loadKakaoMap = () => {
		// kakao map
		window.kakao.maps.load(() => {
			const mapContainer = document.getElementById("map");
			const mapOption = {
				center: new window.kakao.maps.LatLng(DEFAULT_LAT, DEFAULT_LON),
				level: 3,
			};
			const map = new window.kakao.maps.Map(mapContainer, mapOption);

			setMap(map);
		});
	};
	return (
		<>
			<Script
				strategy='afterInteractive'
				type='text/javascript'
				src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKO_MAP_CLIENT}&autoload=false`}
				onReady={loadKakaoMap}
			/>
			<div id='map' className='w-full h-screen'></div>
		</>
	);
};

export default Map;
