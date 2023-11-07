import CurrentLocationButton from "@/Components/CurrentLocationButton";
import Map from "@/Components/Map";
import Markers from "@/Components/Markers";
import StoreBox from "@/Components/StoreBox";
import stores from "@/data/seoul_store_data.json";
import { useState } from "react";

const Home = () => {
	const [map, setMap] = useState(null);
	const [currentStore, setCurrentStore] = useState(null);
	const storeDatas = stores.DATA;
	console.log(currentStore);
	return (
		<>
			<Map setMap={setMap} />
			<Markers storeDatas={storeDatas} map={map} setCurrentStore={setCurrentStore} />
			<StoreBox store={currentStore} setStore={setCurrentStore} />
			<CurrentLocationButton />
		</>
	);
};

export default Home;
