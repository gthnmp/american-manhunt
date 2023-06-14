/* eslint-disable react/prop-types */
const VideoCard = ({ episodeTitle, title, image }) => {
	return (
		<div className="relative select-none w-auto h-auto aspect-video md:w-96 md:h-60">
		
			<div className="relative w-auto h-auto aspect-video md:w-96 md:h-60">
				<div className="absolute rounded-lg dark-overlay"></div>
				<img src={image} alt={`Episode ${episodeTitle}`} className="w-full h-full object-cover rounded-lg" />
			</div>
			
			<div id="information" className="md:absolute w-full md:bottom-5 md:px-4 mt-2 flex flex-col-reverse md:flex-col justify-between">
				<h2 className="text-gray-300 z-10">{episodeTitle}</h2>
				<h1 className="text-white z-10">{title}</h1>
			</div>
		</div>
	);
};

export default VideoCard;