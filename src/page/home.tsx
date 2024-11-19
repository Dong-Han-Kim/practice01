import './style/home.css';
import { imgMenu, textSlide } from '../assets/data.ts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useRef } from 'react';

export default function Home() {
	const ulRef = useRef<HTMLUListElement | null>(null);
	const liRef = useRef<HTMLLIElement[]>([]);
	console.log(liRef);

	useEffect(() => {
		if (!ulRef.current) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					liRef.current.forEach((li) => {
						li.classList.add('visible');
					});
				} else {
					liRef.current.forEach((li) => {
						li.classList.remove('visible');
					});
				}
			},
			{ threshold: 0.1 }
		);
		if (ulRef.current) {
			observer.observe(ulRef.current);
		}

		return () => {
			if (ulRef.current) {
				observer.unobserve(ulRef.current);
			}
		};
	}, []);

	return (
		<>
			<section id="section0">
				<div className="top_img">
					<img src="./mountain.jpg" alt="설산" />
				</div>
				<div className="top_txt">
					<p>
						"Place a snippet of the best testimonial you've <br />
						receuved from your client."
					</p>
					<p>Lorem ipsum</p>
				</div>
			</section>
			<section id="section1">
				<div className="img_menu">
					<ul ref={ulRef}>
						{imgMenu.map((el, index) => {
							return (
								<li
									key={el.id}
									ref={(el) => {
										if (el) {
											liRef.current[index] = el;
										}
									}}>
									<a href="#">
										<img src={el.src} alt="" />
										<div className="text_wrap">
											<p>{el.name}</p>
											<div className="go_project">
												View Project <span className="arrow">&rsaquo;</span>
											</div>
										</div>
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</section>
			<section id="section2">
				<Swiper
					modules={[Pagination]}
					spaceBetween={50}
					slidesPerView={'auto'}
					pagination={{ clickable: true }}
					centeredSlides={true}>
					{textSlide.map((el) => {
						return (
							<SwiperSlide key={el.id}>
								<div className="slide_item">
									<h1>{el.title}</h1>
									<div className="slide_text">{el.text}</div>
									<div className="slide_subtext">
										<div className="text1">{el.subtext1}</div>
										<div className="text2">{el.subtext2}</div>
									</div>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</section>
		</>
	);
}
