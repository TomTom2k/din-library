import React, { useState, createContext } from 'react';

import { UilAngleLeftB, UilAngleRightB } from '@iconscout/react-unicons';

import Aside from './components/Aside/Aside';
import Books from './components/Books/Books';

export let TypeBook = createContext();

const ListPage = () => {
	let [type, setType] = useState(0);
	let [aside, setAside] = useState(true);

	let typeData = {
		setType: setType,
		type: type,
	};

	return (
		<TypeBook.Provider value={typeData}>
			<div className="list-page">
				<aside className={aside ? 'active' : ''}>
					<div
						className="show-aside"
						onClick={() => setAside(!aside)}
					>
						{aside ? <UilAngleRightB /> : <UilAngleLeftB />}
					</div>
					<Aside />
				</aside>
				<main>
					<Books />
				</main>
			</div>
		</TypeBook.Provider>
	);
};

export default ListPage;
