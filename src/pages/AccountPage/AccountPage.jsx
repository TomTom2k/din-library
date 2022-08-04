import React, { useContext, useState } from 'react';
import { AuthToken } from '../../AuthToken/AuthToken';
import Avatar from '../../assets/images/avatar.png';

import Info from './components/Info/Info';
import MyBook from './components/MyBook/MyBook';
import FormRegis from './components/FormRegis/FormRegis';
import History from './components/History/History';
import MySetting from './components/MySetting/MySetting';

let components = {
	body1: <Info />,
	body2: <MyBook />,
	body3: <FormRegis />,
	body4: <History />,
	body5: <MySetting />,
};

const AccountPage = () => {
	let { user, logout, isAuthor } = useContext(AuthToken);
	let [body, setBody] = useState('body1');

	return (
		<div className="account">
			<div className="account__aside">
				<div className="aside__info">
					<div className="aside__info__avatar">
						<img src={Avatar} alt="" />
					</div>
					<div className="aside__info__name">{user}</div>
				</div>
				<ul className="aside__nav">
					<li
						className="aside__nav__item"
						onClick={() => setBody('body1')}
					>
						Thông tin
					</li>
					{isAuthor ? (
						<li
							className="aside__nav__item"
							onClick={() => setBody('body2')}
						>
							Sách của tôi
						</li>
					) : (
						<li
							className="aside__nav__item"
							onClick={() => setBody('body3')}
						>
							Đăng ký thành tác giả
						</li>
					)}
					<li
						className="aside__nav__item"
						onClick={() => setBody('body4')}
					>
						Lịch sử
					</li>
					<li
						className="aside__nav__item"
						onClick={() => setBody('body5')}
					>
						Cài đặt hệ thống
					</li>
				</ul>
				<button className="aside__logout" onClick={logout}>
					Đăng xuất
				</button>
			</div>
			<div className="account__body">{components[body]}</div>
		</div>
	);
};

export default AccountPage;
