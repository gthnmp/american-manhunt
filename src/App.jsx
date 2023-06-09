/* eslint-disable react/prop-types */
import { useState } from 'react';

// import { gsap } from 'gsap';

import Logo from '/react.svg';
import titleImage from './assets/MainTitle.png';
import bgImage from './assets/Eps2.png';
import Episode1 from './assets/Eps1.png';
import Episode2 from './assets/Eps2.png';
import Episode3 from './assets/Eps3.png';
import Trailer1 from './assets/Trailer1.jpg'
import Trailer2 from './assets/Trailer2.jpg'
import Star from './assets/star.png';

const Episode = ({ episodeTitle, title, image, duration = 0 }) => (
	<div className="relative select-none">

		<div id="Information" className="absolute flex flex-col bottom-5 left-4 gap-2">
			<h2 className="text-gray-300 z-10">{`${episodeTitle}`}</h2>
			<h1 className="text-white z-10">{title}</h1>
		</div>
		
		<div id="duration" className='absolute bottom-5 right-4 z-10'>
			{duration != 0 && <h1 className='text-white'>{duration} m</h1>}
		</div>

		<div className='relative w-96 h-60'>
			<div className="absolute rounded-lg dark-overlay">
			</div>
			<img src={image} alt={`Episode ${episodeTitle}`} className="w-full h-full object-cover rounded-lg" />
		</div>
	</div>
);

const Navbar = () => (
	<header className='fixed py-8 px-16 w-screen z-50 flex items-center justify-between'>

		<div className='flex items-center gap-5'>
			<img src={Logo} alt="" />
			<h1 className='text-white text-xl gotham font-bold'>Jue Viole Grace</h1>
		</div>
		
		<ul className='text-white flex flex-row gap-16'>
			<li><a>Movies</a></li>
			<li><a>Series</a></li>
			<li><a>Genres</a></li>
			<li><a>Year</a></li>
		</ul>
	</header>
)

const Introduction = () => {
  const briefDescription =
    'Uncover the gripping truth of American Manhunt: The Boston Marathon Bombing, a Netflix documentary that reveals the intense investigation and manhunt for justice after the tragic 2013 event.';
  const information = [2023, '1 Season', 'Documentaries', '16+'];

  return (
    <div id="hero-content" className="text-white max-w-xl h-screen">

			<div id = "main-content" className='gap-10 h-screen flex flex-col justify-center'>
				<img src={titleImage} alt="main-title" className="select-none" draggable="false" />
				<h1 className="gotham text-xl text-gray-300">{briefDescription}</h1>
				<ul>
					{information.map((item, index) => (
						<li key={index} className="inline-block mr-4 text-gray-300">
							{item}
						</li>
					))}
				</ul>
				<div className='w-auto h-5 flex gap-3 items-center'>
					<img src={Star} alt="" className='w-5 h-5' />
					<h1>7.9 / 10</h1>
				</div>
			</div>
      
			<div className="absolute bottom-20 w-36 h-10">
        <button className="bg-red-600 border-red-600 w-full h-full rounded-lg">Watch Now</button>
      </div>
    </div>
  );
};

const Videos = () => (
	<div className='bg-neutral-950 w-full flex flex-col gap-10'>
		<div>
			<h1 className="text-4xl gotham font-bold">Videos</h1>
		</div>
		
		<div className='flex justify-center gap-10'>
			<Episode episodeTitle={"Trailer 1"} title={"American Manhunt: The Boston"} image={Trailer1}/>
			<Episode episodeTitle={"Trailer 2"} title={"American Manhunt: The Boston"} image={Trailer2}/>
		</div>
		
		<div className='max-w-xl flex flex-col gap-4'>	
			<h1 className='text-4xl gotham font-bold'>Episodes</h1>
			<p className='text-gray-400'>Archive footage, chilling reenactments and exclusive interviews shed new light on a tragedy — and two brothers — that suspended a city in terror.</p>
		</div>

		<div className='flex justify-center gap-10'>
			<div className='flex flex-col gap-5'>
				<Episode episodeTitle={"Episode 1"} title={"White Hat, Black Hat"} image={Episode1} duration={62}/>
				<p className='text-gray-400 text-sm'>In the hours after the blasts, investigators pore over evidence. One photo and a few seconds of footage lead to a breakthrough – and an agonizing choice.</p>
			</div>
			<div className='flex flex-col gap-5'>
				<Episode episodeTitle={"Episode 2"} title={"The American Dream"} image={Episode2} duration={53}/>
				<p className='text-gray-400 text-sm'>The brothers’ images are released to the public, setting off a violent chain of events. Meanwhile, clues from their past tell a complicated story.</p>
			</div>
			<div className='flex flex-col gap-5'>
				<Episode episodeTitle={"Episode 3"} title={"You Can't Interview A Corpse"} image={Episode3} duration={63}/>
				<p className='text-gray-400 text-sm'>Dzhokhar Tsarnaev is cornered into an intense standoff. As officials navigate remaining questions and suspicions, the city emerges – Boston Strong.</p>
			</div>
		</div>

		<div className='flex justify-center gap-10 text-2xl'>
			<button>{"<"}</button>
			<button>{">"}</button>
		</div>
		
	</div>
);

const Details = () => (
	<div>
		<div className='flex flex-col gap-4'>
			<h1 className='text-4xl gotham font-bold'>More Details</h1>
			<div>
				<h2 className='text-2xl gotham font-normal'>Watch Offline</h2>
				<p className='text-gray-400 text-base'>Available To Download</p>
			</div>
			<div>
				<h2 className='text-2xl gotham font-normal'>Genres</h2>
				<p className='text-gray-400 text-base'>Historical Documentaries, Crime TV Shows, Docuseries, US TV Shows, True Crime Documentaries</p>
			</div>
			<div>
				<h2 className='text-2xl gotham font-normal'>More</h2>
				<p className='text-gray-400 text-base'>Go behind the scenes and learn more on Tudum.com</p>
			</div>
		</div>
	</div>
)

const Footer = () => (
	<footer className='bg-neutral-950 text-gray-400 flex justify-center h-96 border-t-2 border-neutral-500 my-20 py-20'>
		<div className='flex flex-col gap-5 items-center'>
			<ul className='flex gap-10 font-light'>
				<li><a href="">Github</a></li>
				<li><a href="">Linkedin</a></li>
				<li><a href="">Twitter</a></li>
				<li><a href="">Youtube</a></li>
				<li><a href="">Instagram</a></li>
			</ul>
			<div className='flex flex-col items-center gap-4'>
				<p className='font-thin'>Made With Vite, React, and Tailwind</p>
				<h1 className='font-bold'>Jue Viole Grace</h1>
			</div>
		</div>
	</footer>
)

const Content = () => {
	return(
		<div id="content" className="absolute w-full h-screen flex flex-col gap-5 px-16 text-white">
			<Introduction />
			<Videos/>
			<Details/>
			<Footer/>
		</div>
	);
}
const BackgroundImage = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  return (
    <div id="bg-image" className="absolute w-full h-screen z-[-1]">
      {isOverlayVisible && <div id="overlay" className="fixed bg-neutral-950 opacity-40 w-full h-full"></div>}
      <img src={bgImage} className="object-cover w-full h-full" alt="background" onLoad={() => setIsOverlayVisible(true)} />
    </div>
  );
};

function App() {
  return (
    <div className="flex justify-center">
			<Navbar/>
      <Content />
      <BackgroundImage />
    </div>
  );
}

export default App;
