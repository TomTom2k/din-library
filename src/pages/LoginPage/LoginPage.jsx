import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthToken } from '../../AuthToken/AuthToken';
import Input from '../../components/Input/Input';

const LoginPage = () => {
	let { login } = useContext(AuthToken);
	return (
		<div className="wrapper">
			<form action="" className="login" onSubmit={login}>
				<div className="login__title">
					<p>Đăng nhập</p>
				</div>
				<Input
					id="username"
					label="Username"
					type="text"
					placeholder="VD: thanhtin, abcxyx,..."
				/>
				<Input id="password" label="Mật khẩu" type="password" />
				<button>Đăng nhập</button>
				<div className="login__route-regis">
					<p>
						Nếu chưa có tài khoản,
						<Link to="/register">Đăng ký</Link>
						ngay
					</p>
				</div>
			</form>
		</div>
	);
};

export default LoginPage;
