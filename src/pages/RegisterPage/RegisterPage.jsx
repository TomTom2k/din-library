import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthToken } from '../../AuthToken/AuthToken';
import Input from '../../components/Input/Input';

const RegisterPage = () => {
	let { register } = useContext(AuthToken);
	return (
		<div className="wrapper">
			<form action="" className="register" onSubmit={register}>
				<div className="register__title">
					<p>Đăng ký</p>
				</div>
				<Input
					id="username"
					label="Username"
					type="text"
					placeholder="VD: thanhtin, abcxyx,..."
				/>
				<Input
					id="email"
					label="Email"
					type="email"
					placeholder="VD: abcxyz@gmail.com"
				/>
				<Input id="password" label="Mật khẩu" type="password" />
				<button>Đăng ký</button>
				<div className="register__route-regis">
					<p>
						Nếu đã có tài khoản,
						<Link to="/login">Đăng nhập</Link>
						ngay
					</p>
				</div>
			</form>
		</div>
	);
};

export default RegisterPage;
