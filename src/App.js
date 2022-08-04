import Header from './components/Header/Header';
import { Routes, Route, Navigate } from 'react-router-dom';

import './scss/index.scss';

import HomePage from './pages/HomePage/HomePage';
import ListPage from './pages/ListPage/ListPage';
import ContactPage from './pages/ContactPage/ContactPage';
import AccountPage from './pages/AccountPage/AccountPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import SingerPage from './pages/SingerPage/SingerPage';
import { useContext } from 'react';
import { AuthToken } from './AuthToken/AuthToken';

function App() {
	let { user } = useContext(AuthToken);
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="" element={<HomePage />} />
				<Route path="/list" element={<ListPage />} />
				<Route
					path="/contact"
					element={!user ? <Navigate to="/login" /> : <ContactPage />}
				/>
				<Route
					path="/account"
					element={!user ? <Navigate to="/login" /> : <AccountPage />}
				/>
				<Route
					path="/login"
					element={user ? <Navigate to="/account" /> : <LoginPage />}
				/>
				<Route
					path="/register"
					element={
						user ? <Navigate to="/account" /> : <RegisterPage />
					}
				/>
				<Route path="/book/:id" element={<SingerPage />} />
				<Route path="*" element={<HomePage />} />
			</Routes>
		</div>
	);
}

export default App;
