import { SmallCard, MediumCard, LargeCard } from ".";

export default function Main({ cardsData, exploreData }) {
	return (
		<main className="max-w-7xl mx-auto px-8 sm:px-16">
			<section className="pt-6">
				<h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl-grid-cols-4">
					{exploreData?.map((item, index) => <SmallCard key={index} {...item} />)}
				</div>
			</section>
			<section>
				<h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
				<div className="flex space-x-3 overflow-scroll scrollbar-hide p-4 -ml-3">
					{cardsData?.map((item, index) => <MediumCard key={index} {...item} />)}
				</div>
			</section>
			<LargeCard
				img="/banner-2.webp"
				title="The Greatest Outdoors"
				description="Wishlists curated by Airbnb."
				buttonText="Get Inspired"
			/>
		</main>
	);
}
