import React, { useEffect, useState } from 'react';
import Book from '../../../../components/Book/Book';

const BodyHome = () => {
	let [books, setBooks] = useState([]);
	useEffect(() => {
		fetch(process.env.REACT_APP_API_URL + '/api/books/')
			.then((res) => res.json())
			.then((data) => setBooks(data));
	});
	return (
		<div className="body-home">
			<div className="body-home__title">Sách nổi bật</div>
			<div className="wrapper">
				{books.map((book, index) => {
					if (index < 12)
						return (
							<Book
								key={index}
								id={book.id}
								title={book.title}
								image={book.image}
								rate={book.rate}
								describe={book.describe}
							/>
						);
				})}
			</div>
		</div>
	);
};

export default BodyHome;
