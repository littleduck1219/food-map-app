import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import config from "../../tailwind.config";

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className='layout'>
			<Navbar />
			{children}
		</div>
	);
};

export default Layout;
