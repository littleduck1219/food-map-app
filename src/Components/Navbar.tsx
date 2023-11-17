import { useState } from "react";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import ActiveNavLink from "./ActiveNavLink";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className='navbar'>
				<Link className='navbar__logo' href='/' aria-level={2}>
					{"Foodies"}
				</Link>
				<div className='navbar__list'>
					<ActiveNavLink href='/stores'>맛집 목록</ActiveNavLink>
					<ActiveNavLink href='#'>맛집 등록</ActiveNavLink>
					<ActiveNavLink href='#'>찜한 가게</ActiveNavLink>
					<ActiveNavLink href='/api/auth/signin'>로그인</ActiveNavLink>
				</div>
				{/* mobile button */}
				<div role='presentation' className='navbar__button' onClick={() => setIsOpen((val) => !val)}>
					{isOpen ? <AiOutlineClose /> : <BiMenu />}
				</div>
			</div>
			{/* mobile navbar */}
			{isOpen && (
				<div className='navbar--mobile'>
					<div className='navbar__list--mobile'>
						<Link href='/stores' className='navbar__list--item--mobile'>
							맛집 목록
						</Link>
						<Link href='/stores/new' className='navbar__list--item--mobile'>
							맛집 등록
						</Link>
						<Link href='/users/likes' className='navbar__list--item--mobile'>
							찜한 가게
						</Link>
						<Link href='/api/auth/signin' className='navbar__list--item--mobile'>
							로그인
						</Link>
					</div>
				</div>
			)}
		</>
	);
}
