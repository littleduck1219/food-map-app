import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import { LayoutProps } from "@/types/propsTypes";

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className='layout'>
			<Navbar />
			{children}
		</div>
	);
};

export default Layout;
