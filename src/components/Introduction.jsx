/* eslint-disable no-unused-vars */
import titleImage from '../assets/MainTitle.png';
import Episode1 from '../assets/Eps1.png';
import Episode2 from '../assets/Eps2.png';
import Episode3 from '../assets/Eps3.png';

import Star from '../assets/star.png';

const Introduction = () => {
     const briefDescription = 'Uncover the gripping truth of American Manhunt: The Boston Marathon Bombing, a Netflix documentary that reveals the intense investigation and manhunt for justice after the tragic 2013 event.';
     const information = [2023, '1 Season', 'Documentaries', '16+'];

     return (
          <div id="hero-content" className="relative text-white w-full h-screen ">
               
               <div id="main-content" className="gap-10 h-screen flex flex-col justify-center max-w-xl">
                    <img src={titleImage} alt="main-title" className="select-none" draggable="false" />
                    <h1 className="gotham text-xl text-gray-300">{briefDescription}</h1>
                    <ul>
                    {information.map((item, index) => (
                    <li key={index} className="inline-block mr-4 text-gray-300">
                         {item}
                    </li>
                    ))}
                    </ul>
                    <div className="w-auto h-5 flex gap-3 items-center">
                    <img src={Star} alt="" className="w-5 h-5" />
                    <h1>8.2 / 10</h1>
                    </div>
                    <div className="absolute bottom-20 w-36 h-10">
                    <button className="bg-red-600 border-red-600 w-full h-full rounded-lg">Watch Now</button>
                    </div>
               </div>

               <div id="bg-image" className="absolute top-0 left-0 z-[-1] w-full h-full">
                    <div className="absolute w-full h-full bg-gradient-to-r from-neutral-950 via-transparent to-neutral-950"></div>
                    <img src={Episode2} alt="" className="w-full h-full object-cover" />
               </div>
               
          </div>
     );
};

export default Introduction;