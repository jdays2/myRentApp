import React from 'react';
import '@/assets/styles/global.css';
import { Navbar } from '@/components/Navbar';

export const metadata = {
	title: 'test title',
	description: 'Just a random description for testing',
};

export default ({ children }) => {
	return (
		<html lang="eng">
			<body>
				<Navbar />
				<main>{children}</main>
			</body>
		</html>
	);
};
