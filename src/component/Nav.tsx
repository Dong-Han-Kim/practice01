import { useEffect, useRef, useState } from 'react';
import './style/Nav.css';

export default function Nav() {
	const btnRef = useRef<HTMLDivElement | null>(null);
	const navRef = useRef<HTMLDivElement | null>(null);
	const [show, setShow] = useState(false);

	function btnHandler() {
		setShow((prevShow) => {
			const nextShow = !prevShow;
			btnRef.current?.classList.toggle('on', nextShow);
			navRef.current?.classList.toggle('on', nextShow);

			return nextShow;
		});
	}

	useEffect(() => {
		document.body.style.overflow = show ? 'hidden' : 'unset';
	}, [show]);

	return (
		<nav ref={navRef}>
			<div className="logo">
				<a href="/">muscat</a>
			</div>
			<div className="nav_content">
				<ul className="nav_ul">
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Blog</a>
					</li>
					<li>
						<a href="#">Product</a>
					</li>
					<li className="movement">Movement</li>
				</ul>
				<ul className="nav_sns">
					<li className="facebook">
						<img src="./facebook.png" alt="페이스북" />
					</li>
					<li className="kakao">
						<img src="./kakao.png" alt="카카오톡" />
					</li>
					<li className="insta">
						<img src="./insta.png" alt="인스타그램" />
					</li>
				</ul>
			</div>
			<div className="btn_menu" ref={btnRef} onClick={btnHandler}>
				<img src="/menu.png" alt="" />
			</div>
		</nav>
	);
}
