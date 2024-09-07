import { PropertyCard } from '@/components/PropertyCard';
import properties from '@/properties.json';

export const metadata = {
	title: 'properties',
};

function PropertiesPage() {
	return (
		<section className="px-4 py-6">
			<div className="container-xl lg:container m-auto px-4 py-6">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{properties.map((e) => {
						return (
							<PropertyCard
								data={e}
								key={e._id}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default PropertiesPage;
