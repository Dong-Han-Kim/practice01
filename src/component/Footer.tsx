import './style/Footer.css';
import { useState } from 'react';

export default function Footer() {
	const [search, setSearch] = useState('');

	return (
		<>
			<footer>
				<section id="ft_left">
					<div className="ft_logo">logo</div>
					<div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
					<div>Lorem ipsum dolor sit amet</div>
				</section>
				<section id="ft_center">
					<div className="ft_center_title">NEWSLETTER</div>
					<div>Lorem, ipsum dolor sit amet</div>
					<div className="ft_center_input">
						<input
							type="text"
							placeholder="Lorem ipsum"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
					</div>
				</section>
				<section id="ft_right">
					<ul>
						<li className="ft_right_title">QUICK LINKS</li>
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">Blog</a>
						</li>
						<li>
							<a href="#">Product</a>
						</li>
					</ul>
				</section>
				<section id="ft_bottom">
					<div>Lorem ipsum</div>
					<div>Lorem ipsum dolor sit amet consectetur</div>
					<div>Lorem ipsum</div>
				</section>
			</footer>
		</>
	);
}
