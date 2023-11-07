import CurrentLocationButton from "@/Components/CurrentLocationButton";
import Map from "@/Components/Map";
import Markers from "@/Components/Markers";
import StoreBox from "@/Components/StoreBox";

import { useState } from "react";
import { StoreType } from "@/types/dataTypes";

const Home = ({ stores }: { stores: StoreType[] }) => {
	const [map, setMap] = useState(null);
	const [currentStore, setCurrentStore] = useState(null);
	// const storeDatas = stores.DATA;
	console.log(currentStore);
	return (
		<>
			<Map setMap={setMap} />
			<Markers stores={stores} map={map} setCurrentStore={setCurrentStore} />
			<StoreBox store={currentStore} setStore={setCurrentStore} />
			<CurrentLocationButton />
		</>
	);
};

export default Home;

export const getStaticProps = async () => {
	const stores = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/stores`).then((res) => res.json());

	return {
		props: { stores },
		revalidate: 60 * 60,
	};
};
