import Head from "next/head";

export default function InternationalServerError() {
	const handleReload = () => {
		if (typeof window !== "undefined") {
			location.reload();
		}
	}

	return (
		<div>
			<Head>
				<title>500 | International Server Error</title>
			</Head>
			<div className="h-screen space-y-3 flex flex-col justify-center items-center">
				<h2 className="text-3xl">500 International Server Error</h2>
				<p className="text-xl">
					Please &nbsp;
					<u
						onClick={handleReload}
						className="hover:text-red-400 transition duration-200 cursor-pointer"
					>reload</u>&nbsp;
					page
				</p>
			</div>
		</div>
	);
}