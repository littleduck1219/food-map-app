import { useState } from "react";
import Map from "@/components/Map";
import Markers from "@/components/Markers";
import StoreBox from "@/components/StoreBox";
import { StoreType } from "@/types/dataTypes";
import axios from "axios";

const Home = ({ stores }: { stores: StoreType[] }) => {
	const [map, setMap] = useState(null);
	const [currentStore, setCurrentStore] = useState<StoreType | null>(null);

	return (
		<>
			<Map setMap={setMap} />
			<Markers stores={stores} map={map} setCurrentStore={setCurrentStore} />
			<StoreBox store={currentStore} setStore={setCurrentStore} />
		</>
	);
};

export default Home;

export async function getStaticProps() {
	const response = await axios(`${process.env.NEXT_PUBLIC_API_URL}/api/stores`);
	return {
		props: { stores: response.data.data },
		revalidate: 60 * 60,
	};
}
