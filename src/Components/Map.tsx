import React from "react";
import Script from "next/script";
import { MapProps } from "@/types/propsTypes";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { mapState } from "@/atom";
import { locationState } from "../atom/index";

const Map = ({ lat, lng, zoom }: MapProps) => {
    const setMap = useSetRecoilState(mapState);
    const location = useRecoilValue(locationState);
    const loadKakaoMap = () => {
        // kakao map
        window.kakao.maps.load(() => {
            const mapContainer = document.getElementById("map");
            const mapOption = {
                center: new window.kakao.maps.LatLng(lat ?? location.lat, lng ?? location.lng),
                level: zoom ?? location.zoom,
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
            <div id='map' className='map_screen'></div>
        </>
    );
};

export default Map;
