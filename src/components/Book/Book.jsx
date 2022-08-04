import React from 'react';
import { Link } from 'react-router-dom';

import { UisStar } from '@iconscout/react-unicons-solid';

const Book = ({ id, title, image, rate }) => {
	return (
		<Link to={`/book/${id}`} className="book-item">
			<div className="book-item__image">
				<img src={image} alt="" />
			</div>
			<div className="book-item__info">
				<div className="book-item__info__title">{title}</div>
				<div className="book-item__info__rate">
					{rate}
					<UisStar />
				</div>
			</div>
		</Link>
	);
};

export default Book;
