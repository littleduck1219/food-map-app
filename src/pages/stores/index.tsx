const StoreListPage = () => {
	return (
		<div>
			<h1></h1>
		</div>
	);
};

export default StoreListPage;

export const getServerSideProps = async () => {
	const stores = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/stores`).then((res) => res.json());

	return;
};
