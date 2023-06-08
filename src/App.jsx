/* eslint-disable react/prop-types */
import { useState } from 'react';
import './App.css';

import bgImage from './assets/AmericanManhunt.jpg';
import titleImage from './assets/MainTitle.png';
import Episode1 from './assets/Eps1.png';
import Episode2 from './assets/AmericanManhunt.jpg';
import Episode3 from './assets/Eps3.png';

const Navbar = () => {
	return (
		<div id="navbar" className='fixed text-white pt-5'>
			<div className='flex w-screen gap-40'>
				<div id = "left" className="max-w-2xl w-full"> </div>
				<div id = "right" className="">
					<ul className='flex gap-10'>
						<li>Series</li>
						<li>Movies</li>
						<li>Genre</li>
						<li>Year</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

const HeroContent = () => {
  const briefDescription =
    'Uncover the gripping truth of American Manhunt: The Boston Marathon Bombing, a Netflix documentary that reveals the intense investigation and manhunt for justice after the tragic 2013 event.';
  const information = [2023, '1 Season', 'Documentaries', '16+'];

  return (
    <div id="hero-content" className="text-white max-w-2xl h-screen flex flex-col pt-36 px-24 gap-10">
      <img src={titleImage} alt="main-title" className="select-none" draggable="false" />
      <h1 className="gotham text-xl">{briefDescription}</h1>
      <ul>
        {information.map((item, index) => (
          <li key={index} className="inline-block mr-4 text-gray-300">
            {item}
          </li>
        ))}
      </ul>
      <div className="w-36 h-10">
        <button className="bg-red-600 border-red-600 w-full h-full rounded-lg">Watch Now</button>
      </div>
    </div>
  );
};

const Episode = ({ episodeNumber, title, image }) => (
  <div className="relative w-60 h-96 flex-shrink-0">
    <div id="Information" className="absolute flex flex-col bottom-5 left-4 gap-2">
      <h2 className="text-gray-300 z-10">{`Episode ${episodeNumber}`}</h2>
      <h1 className="text-white z-10">{title}</h1>
    </div>
    <img src={image} alt={`Episode ${episodeNumber}`} className="w-full h-full object-cover rounded-xl" />
    <div className="dark-overlay rounded-xl"></div>
  </div>
);

const Episodes = () => (
  <div id="episodes" className="text-white flex flex-row flex-nowrap overflow-x-hidden items-center gap-8">
    <Episode episodeNumber={1} title="White Hat, Black Hat" image={Episode1} />
    <Episode episodeNumber={2} title="The American Dreams" image={Episode2} />
    <Episode episodeNumber={3} title="You Can't Interview A Corpse" image={Episode3} />
  </div>

);

const Content = () => (
  <div id="content" className="absolute w-full h-screen flex gap-40">
    <HeroContent />
    <Episodes />
  </div>
);

const BackgroundImage = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  return (
    <div id="bg-image" className="absolute w-full h-screen z-[-1]">
      {isOverlayVisible && <div id="overlay" className="fixed bg-black opacity-50 w-full h-full"></div>}
      <img src={bgImage} className="object-cover w-full h-full" alt="background" onLoad={() => setIsOverlayVisible(true)} />
    </div>
  );
};

function App() {
  return (
    <>
			<Navbar/>
      <Content />
      <BackgroundImage />
    </>
  );
}

export default App;
