import Image from "next/image";

export default function Banner() {
	return (
		<div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
			<Image
				src="/banner.webp"
				layout="fill"
				object="cover"
			/>
			<div className="absolute top-1/2 w-full text-center">
				<p className="text-sm lg:text-lg">Not sure where to go? Perfect</p>
				<button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">i'm flexible</button>
			</div>
		</div>
	);
}