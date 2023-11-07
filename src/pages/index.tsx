import CurrentLocationButton from "@/Components/CurrentLocationButton";
import Map from "@/Components/Map";
import Markers from "@/Components/Markers";
import stores from "@/data/seoul_store_data.json";
import { useState } from "react";

const Home = () => {
	const [map, setMap] = useState(null);
	const storeDatas = stores.DATA;
	return (
		<>
			<Map setMap={setMap} />
			<Markers storeDatas={storeDatas} map={map} />
			<CurrentLocationButton />
		</>
	);
};

export default Home;
