import { useState } from "react";
import Map from "@/components/Map";
import Markers from "@/components/Markers";
import StoreBox from "@/components/StoreBox";
import { StoreType } from "@/types/dataTypes";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
	const [map, setMap] = useState(null);
	const [currentStore, setCurrentStore] = useState<StoreType | null>(null);

	const fetchStores = async () => {
		const response = await axios(`/api/stores`);
		return response.data.data;
	};

	const { data: stores, isLoading, error } = useQuery({ queryKey: ["stores"], queryFn: fetchStores });
	console.log(stores);
	return (
		<>
			<Map setMap={setMap} />
			<Markers stores={stores} map={map} setCurrentStore={setCurrentStore} />
			<StoreBox store={currentStore} setStore={setCurrentStore} />
		</>
	);
};

export default Home;
