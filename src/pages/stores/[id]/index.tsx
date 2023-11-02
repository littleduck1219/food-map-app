import { useRouter } from "next/router";
import React from "react";

const StorePage = () => {
	const router = useRouter();
	const { id } = router.query;
	return <div>StorePage {id}</div>;
};

export default StorePage;
