import React, { useRef, useEffect, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

// import required modules
import { FreeMode } from 'swiper';

import Event from '../../../../components/Event/Event';

const Banner = () => {
	let [events, setEvents] = useState([]);

	useEffect(() => {
		fetch('/api/events/')
			.then((res) => res.json())
			.then((data) => setEvents(data));
	}, []);
	return (
		<div className="banner">
			<Swiper
				slidesPerView={3}
				spaceBetween={40}
				grabCursor={true}
				freeMode={true}
				loop={true}
				modules={[FreeMode]}
				className="mySwiper"
			>
				{events.map((event, index) => (
					<SwiperSlide key={index}>
						<Event
							key={event.id}
							id={event.id}
							color1={event.color1}
							color2={event.color2}
							nameBook={event.book}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Banner;
