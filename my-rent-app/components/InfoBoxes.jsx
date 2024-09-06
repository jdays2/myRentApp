import React from 'react';
import { InfoBox } from './InfoBox';
import { ADD, PROPERTIES } from '@/constants/router';

export const InfoBoxes = () => {
	return (
		<section>
			<div className="container-xl lg:container m-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
					<InfoBox
						title={'For Renters'}
						buttonInfo={{
							value: 'Browse Properties',
							link: `/${PROPERTIES}`,
							bg: 'bg-black',
						}}>
						Find your dream rental property. Bookmark properties and contact
						owners.
					</InfoBox>

					<InfoBox
						title={'For Renters'}
						bgColor="bg-blue-100"
						buttonInfo={{
							value: 'Add Property',
							link: `/${PROPERTIES}/${ADD}`,
							bg: 'bg-blue-500',
						}}>
						List your properties and reach potential tenants. Rent as an airbnb
						or long term.
					</InfoBox>
				</div>
			</div>
		</section>
	);
};
