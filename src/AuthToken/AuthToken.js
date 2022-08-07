import jwt_decode from 'jwt-decode';
import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

let AuthToken = createContext();

const AuthProvide = ({ children }) => {
	let navigate = useNavigate();
	let [user, setUser] = useState(
		sessionStorage.getItem('token')
			? jwt_decode(JSON.parse(sessionStorage.getItem('token')).refresh)
					.name
			: null
	);
	let [isAuthor, setIsAuthor] = useState(
		sessionStorage.getItem('token')
			? jwt_decode(JSON.parse(sessionStorage.getItem('token')).refresh)
					.is_author
			: false
	);
	let [token, setToken] = useState(
		sessionStorage.getItem('token')
			? JSON.stringify(sessionStorage.getItem('token'))
			: null
	);
	let login = async (e) => {
		e.preventDefault();
		let res = await fetch(
			'https://library-website-api.herokuapp.com/user/token/',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					username: e.target.username.value,
					password: e.target.password.value,
				}),
			}
		);
		let data = await res.json();
		if (res.status === 200) {
			setUser(jwt_decode(data.refresh).name);
			if (data.refresh.is_author) {
				setIsAuthor(true);
			}
			setToken(data);
			sessionStorage.setItem('token', JSON.stringify(data));
			navigate(-1);
		} else {
			alert('Không tìm thấy người dùng này');
		}
	};
	let logout = (e) => {
		e.preventDefault();
		sessionStorage.removeItem('token');
		setUser(null);
		setToken(null);
		setIsAuthor(false);
	};
	let register = async (e) => {
		e.preventDefault();
		try {
			let res = await fetch(
				'https://library-website-api.herokuapp.com/user/register/',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						username: e.target.username.value,
						email: e.target.email.value,
						password: e.target.password.value,
					}),
				}
			);
			let data = await res.json();
			navigate('/login');
		} catch {
			alert('Đăng ký không thành công');
		}
	};
	let authData = {
		user: user,
		isAuthor: isAuthor,
		login: login,
		logout: logout,
		register: register,
	};

	return <AuthToken.Provider value={authData}>{children}</AuthToken.Provider>;
};

export { AuthProvide, AuthToken };
