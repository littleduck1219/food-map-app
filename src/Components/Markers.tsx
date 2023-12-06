import React, { useCallback, useEffect, useState } from "react";
import { MarkerProps } from "@/types/propsTypes";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { currentStoreState, locationState, mapState } from "@/atom";

// 지도 중심으로부터의 최대 거리 설정 (1km)
const MAX_DISTANCE = 500; // 1km

const Markers = ({ stores }: MarkerProps) => {
    const map = useRecoilValue(mapState);
    const setCurrentStore = useSetRecoilState(currentStoreState);
    const [location, setLocation] = useRecoilState(locationState);

    const [markers, setMarkers] = useState<any[]>([]);

    // 두 지점 사이의 거리를 계산하는 함수 (Haversine 공식)
    const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
        const R = 6371e3; // 지구의 반지름 (미터)
        const rad = Math.PI / 180;
        const deltaLat = (lat2 - lat1) * rad;
        const deltaLon = (lon2 - lon1) * rad;

        const a =
            Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
            Math.cos(lat1 * rad) * Math.cos(lat2 * rad) * Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return R * c; // 거리 (미터 단위)
    };

    const loadKakaoMarkers = useCallback(() => {
        // 기존 마커 제거
        markers.forEach((marker) => marker.setMap(null));
        setMarkers([]);

        if (!map || !stores || typeof window === "undefined" || !Array.isArray(stores)) return;

        const newMarkers: any[] = [];
        const mapCenter = map.getCenter();

        stores.forEach((store) => {
            if (store.lat == null || store.lng == null) return;

            const storeLat = parseFloat(store.lat);
            const storeLng = parseFloat(store.lng);
            const distance = calculateDistance(mapCenter.getLat(), mapCenter.getLng(), storeLat, storeLng);

            if (distance <= MAX_DISTANCE) {
                // 마커 생성 및 표시 로직
                const imageSrc = store.category ? `/images/marker/${store.category}.png` : `/images/marker/default.png`;
                const imageSize = new window.kakao.maps.Size(64, 69);
                const imageOption = { offset: new window.kakao.maps.Point(27, 69) };
                const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
                const markerPosition = new window.kakao.maps.LatLng(store.lat, store.lng);
                const marker = new window.kakao.maps.Marker({
                    position: markerPosition,
                    image: markerImage,
                });

                marker.setMap(map);

                // 인포윈도우 생성
                const content = `<div class="infowindow">${store.name}</div>`;
                var customOverlay = new window.kakao.maps.CustomOverlay({
                    position: markerPosition,
                    content,
                    xAnchor: 0.6,
                    yAnchor: 0.91,
                });

                // 마우스오버 이벤트 등록
                window.kakao.maps.event.addListener(marker, "mouseover", () => {
                    customOverlay.setMap(map);
                });

                // 마우스아웃 이벤트 등록
                window.kakao.maps.event.addListener(marker, "mouseout", () => {
                    customOverlay.setMap(null);
                });

                // 클릭 이벤트 등록
                window.kakao.maps.event.addListener(marker, "click", () => {
                    setCurrentStore(store);
                    setLocation({ ...location, lat: store.lat, lng: store.lng });
                });

                newMarkers.push(marker);
            }
        });

        setMarkers(newMarkers);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [map, stores]);

    // 지도 이동 시 마커 재로드
    useEffect(() => {
        if (!map) return;

        const handleCenterChanged = () => {
            loadKakaoMarkers();
        };

        window.kakao.maps.event.addListener(map, "center_changed", handleCenterChanged);

        return () => {
            window.kakao.maps.event.removeListener(map, "center_changed", handleCenterChanged);
        };
    }, [map, loadKakaoMarkers]);

    // 지도가 이동될 때마다 마커를 다시 로드
    useEffect(() => {
        if (!map) return;

        const handleCenterChanged = () => {
            // 마커 로드 함수 호출
            loadKakaoMarkers();
        };

        // 지도 중심 좌표가 변경될 때 이벤트 리스너 등록
        window.kakao.maps.event.addListener(map, "center_changed", handleCenterChanged);

        return () => {
            // 컴포넌트 언마운트 시 이벤트 리스너 제거
            window.kakao.maps.event.removeListener(map, "center_changed", handleCenterChanged);
        };
    }, [map, loadKakaoMarkers]);

    useEffect(() => {
        loadKakaoMarkers();
    }, [loadKakaoMarkers, map]);

    return <></>;
};

export default Markers;
