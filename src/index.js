import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvide } from './AuthToken/AuthToken';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<AuthProvide>
			<App />
		</AuthProvide>
	</BrowserRouter>
);
