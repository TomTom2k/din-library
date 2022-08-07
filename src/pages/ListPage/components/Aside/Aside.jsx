import React, { useContext, useEffect, useState } from 'react';
import { TypeBook } from '../../ListPage';

const Aside = () => {
	let [tags, setTags] = useState([]);
	let { setType } = useContext(TypeBook);

	useEffect(() => {
		fetch('/api/tags/')
			.then((res) => res.json())
			.then((data) => setTags(data));
	}, []);

	return (
		<div className="aside">
			<ul className="aside__list">
				<li
					key="0"
					className="aside__list__item"
					onClick={() => setType(0)}
				>
					<p>Tất cả</p>
				</li>
				{tags.map((tag) => (
					<li
						key={tag.id}
						className="aside__list__item"
						onClick={() => setType(tag.id)}
					>
						<p>{tag.title}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Aside;
