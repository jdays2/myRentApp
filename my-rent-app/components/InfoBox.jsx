import Link from 'next/link';
import React from 'react';

export const InfoBox = ({
	title,
	buttonInfo,
	bgColor = 'bg-gray-100',
	txtColor = 'txt-gray-800',
	children,
}) => {
	return (
		<div className={`p-6 rounded-lg shadow-md ${bgColor}`}>
			<h2 className={`text-2xl font-bold ${txtColor}`}>{title}</h2>
			<p className={`mt-2 mb-4 ${txtColor}`}>{children}</p>
			{buttonInfo?.value && (
				<Link
					href={buttonInfo.link}
					className={`inline-block text-white rounded-lg px-4 py-2 hover:opacity-80 ${buttonInfo.bg}`}>
					{buttonInfo.value}
				</Link>
			)}
		</div>
	);
};
