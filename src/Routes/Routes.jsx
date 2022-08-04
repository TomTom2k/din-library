import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthToken } from '../AuthToken/AuthToken';

const Routes = () => {
	let { user } = useContext(AuthToken);
	return (
		<div className="routes">
			<Link to="">Trang chủ</Link>
			<Link to="/list">Danh sách</Link>
			<Link to="/contact">Liên hệ</Link>
			{!user ? (
				<Link to="/login">Đăng nhập</Link>
			) : (
				<Link to="/account">Tài khoản</Link>
			)}
		</div>
	);
};

export default Routes;
