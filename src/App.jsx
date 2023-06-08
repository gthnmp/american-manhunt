/* eslint-disable react/prop-types */
import { useState } from 'react';
import Logo from './assets/Logo.png';
import bgImage from './assets/AmericanManhunt.jpg';
import titleImage from './assets/MainTitle.png';
import Episode1 from './assets/Eps1.png';
import Episode2 from './assets/AmericanManhunt.jpg';
import Episode3 from './assets/Eps3.png';

const HeroContent = () => {
  const briefDescription =
    'Uncover the gripping truth of American Manhunt: The Boston Marathon Bombing, a Netflix documentary that reveals the intense investigation and manhunt for justice after the tragic 2013 event.';
  const information = [2023, '1 Season', 'Documentaries', '16+'];

  return (
    <div id="hero-content" className="relative text-white max-w-2xl h-screen flex flex-col justify-center px-24 gap-10">
      <div className="absolute top-10 w-24 flex gap-6">
        <img src={Logo} alt="" />
      </div>
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
    <div id="navbar" className="w-full fixed max-w-2xl text-white top-10">
      <ul className="flex gap-10">
        <li>
          <a>Movies</a>
        </li>
        <li>
          <a>Series</a>
        </li>
        <li>
          <a>Genre</a>
        </li>
        <li>
          <a>Year</a>
        </li>
        <li>
          <div className="absolute right-28 hover:cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <style>{`svg{fill:#ffffff}`}</style>
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </div>
        </li>
      </ul>
    </div>
    <Episode episodeNumber={1} title="White Hat, Black Hat" image={Episode1} />
    <Episode episodeNumber={2} title="The American Dreams" image={Episode2} />
    <Episode episodeNumber={3} title="You Can't Interview A Corpse" image={Episode3} />
  </div>
);

const LeftSide = () => <HeroContent />;

const RightSide = () => <Episodes />;

const Content = () => (
  <div id="content" className="absolute w-full h-screen flex justify-center gap-20">
    <LeftSide />
    <RightSide />
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
    <div className="flex justify-center">
      <Content />
      <BackgroundImage />
    </div>
  );
}

export default App;
