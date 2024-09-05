import React from 'react';
import '@/assets/styles/global.css';
import Navbar from '@/components/Navbar';

export const metadata = {
	title: 'test title',
	description: 'Just a random description for testing',
};

function MainLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				<main>{children}</main>
			</body>
		</html>
	);
}

export default MainLayout;
