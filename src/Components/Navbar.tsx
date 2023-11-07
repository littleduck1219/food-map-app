import { useState } from "react";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

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

	return (
		<>
			<div className='navbar'>
				<Link className='navbar__logo' href='/'>
					{"Foodies"}
				</Link>
				<div className='navbar__list'>
					<Link href='/stores'>
						<span className='navbar__list--item'>
							<SplitText text='맛집 목록' />
						</span>
					</Link>
					<Link href='/stores'>
						<span className='navbar__list--item'>
							<SplitText text='맛집 등록' />
						</span>
					</Link>
					<Link href='/stores'>
						<span className='navbar__list--item'>
							<SplitText text='찜한 가게' />
						</span>
					</Link>
					<Link href='/stores'>
						<span className='navbar__list--item'>
							<SplitText text='로그인' />
						</span>
					</Link>
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
						<Link href='/users/login' className='navbar__list--item--mobile'>
							로그인
						</Link>
					</div>
				</div>
			)}
		</>
	);
}
