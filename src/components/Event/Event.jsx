import React, { createRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { UilStar } from '@iconscout/react-unicons';

const Event = ({ color1, color2, nameBook }) => {
	let [book, setBook] = useState([]);
	let star = [];
	let event = createRef();

	useEffect(() => {
		fetch(`https://library-website-api.herokuapp.com/api/book/${nameBook}/`)
			.then((res) => res.json())
			.then((data) => setBook(data));
	}, []);
	useEffect(() => {
		for (let i = 0; i < 5; i++) {
			if (i < Math.floor(book.rate))
				star.push(
					'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"></path></svg>'
				);
			else if (
				i >= Math.floor(book.rate) - 1 &&
				i <= Math.ceil(book.rate) - 1
			) {
				star.push(
					'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z M15.8,13.6c-0.2,0.2-0.3,0.6-0.3,0.9l0.7,4.2l-3.8-2c-0.1-0.1-0.3-0.1-0.5-0.1V5.7l1.9,3.8c0.1,0.3,0.4,0.5,0.8,0.5l4.2,0.6L15.8,13.6z"></path></svg>'
				);
			} else {
				star.push(
					'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68a1,1,0,0,0,.4,1,1,1,0,0,0,1.05.07L12,18.76l5.1,2.68a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.89l.72,4.19-3.76-2a1,1,0,0,0-.94,0l-3.76,2,.72-4.19a1,1,0,0,0-.29-.89l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"></path></svg>'
				);
			}
		}
		let item = event.current;
		let rate = item.querySelector('.event__info__rating__rate');
		rate.innerHTML = star.join('');
	}, [book]);

	return (
		<Link
			to={`/book/${nameBook}`}
			id={nameBook}
			className="event"
			ref={event}
			style={{
				backgroundImage: `linear-gradient(135deg, ${color1}, ${color2})`,
			}}
		>
			<div className="event__image">
				<img src={book.image} alt="" />
			</div>
			<div className="event__info">
				<p className="event__info__title">{book.title}</p>
				<div className="event__info__rating">
					<p className="event__info__rating__rate"></p>
					<span>{book.rate}</span>
				</div>

				<p className="event__info__describe">{book.describe}</p>
			</div>
		</Link>
	);
};

export default Event;
