import React, { useContext, useEffect, useState } from 'react';
import { TypeBook } from '../../ListPage';

import Event from '../../../../components/Event/Event';

const Books = () => {
	let [books, setBooks] = useState([]);
	let { type } = useContext(TypeBook);

	useEffect(() => {
		fetch(process.env.REACT_APP_API_URL + '/api/books/')
			.then((res) => res.json())
			.then((data) =>
				!type
					? setBooks(data)
					: setBooks(data.filter((book) => book.tags.includes(type)))
			);
	}, [type]);

	return (
		<div className="list-book">
			{books.map((book) => (
				<Event nameBook={book.id} color2="#4f48ec" color1="#08c5f9" />
			))}
		</div>
	);
};

export default Books;
