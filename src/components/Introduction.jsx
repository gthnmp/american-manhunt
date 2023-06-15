/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import titleImage from '../assets/MainTitle.png';
import Episode2 from '../assets/Eps2.png';
import Star from '../assets/star.png';

export default function Introduction () {
	const briefDescription = 'Uncover the gripping truth of American Manhunt: The Boston Marathon Bombing, a Netflix documentary that reveals the intense investigation and manhunt for justice after the tragic 2013 event.';
	const information = [2023, '1 Season', 'Documentaries', '16+'];

	return (
			<div id="introduction" className="relative w-full h-screen ">
				
				<div id="content" className="gap-10 h-screen w-full max-w-xl flex flex-col justify-center gotham tracking-wide">
						<img src={titleImage} alt="main-title" className="select-none" draggable="false" />
						<p className="text-sm lg:text-xl text-gray-200">{briefDescription}</p>
						<ul className='flex gap-4'>
							{information.map((item, index) => (
							<li key={index} className="inline-block text-sm lg:text-base text-gray-200">
									{item}
							</li>
							))}
						</ul>
						
						<div className="w-auto h-5 text-sm lg:text-base flex gap-2 items-center">
							<img src={Star} alt="" className="w-5 h-5" />
							<h1>8.2 / 10</h1>
						</div>
						
						<a className="bg-red-600 w-max h-max px-5 py-2 lg:px-6 lg:py-2 text-sm lg:text-base rounded-xl" target = "_blank" href = 'https://77.105.142.75/tvseries/american-manhunt-the-boston-marathon-bombing-2023/'>Watch Now</a>
				</div>

				<div id="bg-image" className="absolute top-0 left-0 z-[-1] w-full h-full">
						<div className="absolute w-full h-full bg-gradient-to-r from-neutral-950 via-transparent to-neutral-950"></div>
						<img src={Episode2} alt="" className="w-full h-full object-cover" />
				</div>
				
			</div>
	);
}
