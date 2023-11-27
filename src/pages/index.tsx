import { useState } from "react";
import Map from "@/Components/Map";
import Markers from "@/Components/Markers";
import StoreBox from "@/Components/StoreBox";
import { StoreType } from "@/types/dataTypes";
import axios from "axios";
import { useQuery } from "react-query";

const Home = () => {
	const [map, setMap] = useState(null);
	const [currentStore, setCurrentStore] = useState<StoreType | null>(null);

	const fetchStores = async () => {
		const response = await axios(`/api/stores`);
		return response.data;
	};

	const { data: stores, isLoading, error } = useQuery("stores", fetchStores);

	return (
		<>
			<Map setMap={setMap} />
			<Markers stores={stores} map={map} setCurrentStore={setCurrentStore} />
			<StoreBox store={currentStore} setStore={setCurrentStore} />
		</>
	);
};

export default Home;
