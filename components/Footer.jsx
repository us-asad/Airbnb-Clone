import Link from "next/link";

const footerLinks = [
	{
		title: "About",
		links: [
			{
				name: "How Airbnb works",
				link: "/"
			},
			{
				name: "Newsroom",
				link: "/"
			},
			{
				name: "Investors",
				link: "/"
			},
			{
				name: "Airbnb Plus",
				link: "/"
			},
			{
				name: "Airbnb Luxe",
				link: "/"
			}
		]
	},
	{
		title: "COMMUNITY",
		links: [
			{
				name: "Accessibility",
				link: "/"
			},
			{
				name: "This is not a real site",
				link: "/"
			},
			{
				name: "Its a pretty awesome clone",
				link: "/"
			},
			{
				name: "Referrals accepted",
				link: "/"
			},
			{
				name: "Developer",
				link: "/"
			}
		]
	},
	{
		title: "HOST",
		links: [
			{
				name: "free products",
				link: "/"
			},
			{
				name: "Presents",
				link: "/"
			},
			{
				name: "Zero to Frontend Hero",
				link: "/"
			},
			{
				name: "Hundreds of projects",
				link: "/"
			},
			{
				name: "Join Now",
				link: "/"
			}
		]
	},
	{
		title: "SUPPORT",
		links: [
			{
				name: "Help Centre",
				link: "/"
			},
			{
				name: "Trust & Safety",
				link: "/"
			},
			{
				name: "Messagener",
				link: "/"
			},
			{
				name: "Easter Eggs",
				link: "/"
			},
			{
				name: "For the Win",
				link: "/"
			},
		]
	}
]

export default function Footer() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
			{footerLinks.map(({title, links}, index) => (
				<div key={index} className="space-y-4 text-xs text-gray-800">
					<h5 className="font-bold">{title}</h5>
					{links.map(({name, link}, index) => (
						<Link key={index} href={link}>
							<a className="block">{name}</a>
						</Link>
					))}
				</div>
			))}
		</div>
	);
}