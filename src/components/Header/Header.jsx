import React from 'react';
import Routes from '../../Routes/Routes';

import { UilSearch } from '@iconscout/react-unicons';

const Header = () => {
	return (
		<div className="header">
			<div className="header__logo">BIN</div>
			<div className="header__search">
				<input id="search" type="text" />
				<label className="header__search__icon" htmlFor="search">
					<UilSearch />
				</label>
			</div>
			<div className="header__routes">
				<Routes />
			</div>
		</div>
	);
};

export default Header;
