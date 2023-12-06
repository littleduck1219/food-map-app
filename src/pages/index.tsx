import { useState } from "react";
import Map from "@/Components/Map";
import Markers from "@/Components/Markers";
import StoreBox from "@/Components/StoreBox";
import { StoreType } from "@/types/dataTypes";
import axios from "axios";
import { useQuery } from "react-query";

const Home = () => {
    const fetchStores = async () => {
        const response = await axios(`/api/stores`);
        return response.data;
    };

    const { data: stores, isLoading, error } = useQuery("stores", fetchStores);

    return (
        <>
            <Map />
            <Markers stores={stores} />
            <StoreBox />
        </>
    );
};

export default Home;
