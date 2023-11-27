import React from "react";
import Script from "next/script";
import { MapProps } from "@/types/propsTypes";

const DEFAULT_LAT = 37.497625203;
const DEFAULT_LON = 127.03088379;
const DEFAULT_ZOOM = 3;

const Map = ({ setMap, lat, lng, zoom }: MapProps) => {
	const loadKakaoMap = () => {
		// kakao map
		window.kakao.maps.load(() => {
			const mapContainer = document.getElementById("map");
			const mapOption = {
				center: new window.kakao.maps.LatLng(lat ?? DEFAULT_LAT, lng ?? DEFAULT_LON),
				level: zoom ?? DEFAULT_ZOOM,
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
