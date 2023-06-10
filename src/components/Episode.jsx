/* eslint-disable react/prop-types */
const Episode = ({ episodeTitle, title, image, releaseDate, duration = 0 }) => {
	return (
		<div className="relative select-none w-96 h-60">
			
			<div id="information" className="absolute z-10 bottom-5 px-4 flex justify-between w-full">
				<div className="relative flex flex-col gap-2">
				<h2 className="text-gray-300 z-10">{episodeTitle}</h2>
				<h1 className="text-white z-10">{title}</h1>
				</div>
				<div className="relative flex flex-col right-0 gap-2">
				{releaseDate !== false && <h2 className="text-gray-300 z-10">{releaseDate}</h2>}
				{duration !== 0 && <h1 className="text-white">{duration} minutes</h1>}
				</div>
			</div>

			<div className="relative w-96 h-60">
				<div className="absolute rounded-lg dark-overlay"></div>
				<img src={image} alt={`Episode ${episodeTitle}`} className="w-full h-full object-cover rounded-lg" />
			</div>
		</div>
	);
};

export default Episode;