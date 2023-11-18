import { ActiveNavProps } from "@/types/propsTypes";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ActiveNavLink = ({ href, children }: ActiveNavProps) => {
	const SplitText = ({ text }: any) => {
		return (
			<span aria-label={text} role='heading' className='split-text'>
				{text.split("").map((char: string, index: number) => (
					<span
						key={index}
						className='char'
						data-char={char}
						style={{ "--char-index": index } as React.CSSProperties}>
						{char}
					</span>
				))}
			</span>
		);
	};

	const router = useRouter();
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		setIsActive(router.pathname === href);
	}, [router.pathname, href]);

	const className = isActive ? "navbar__list--item Active__nav" : "navbar__list--item";

	return (
		<Link href={href}>
			<span className={className}>
				<SplitText text={children} />
			</span>
		</Link>
	);
};

export default ActiveNavLink;
