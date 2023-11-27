import React from "react";

const Loader = ({ className = "" }) => {
	return (
		<div className={`flex gap-4 justify-center mt-10 ${className}`}>
			<div className='w-2 h-2 rounded-full animate-ping bg-gray-500' />
			<div className='w-2 h-2 rounded-full animate-ping bg-gray-500' />
			<div className='w-2 h-2 rounded-full animate-ping bg-gray-500' />
		</div>
	);
};

export default Loader;
