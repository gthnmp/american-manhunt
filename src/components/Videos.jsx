import VideoCard from './VideoCard'

import Episode1 from '../assets/Eps1.png';
import Episode2 from '../assets/Eps2.png';
import Episode3 from '../assets/Eps3.png';
import Trailer1 from '../assets/Trailer1.jpg';
import Trailer2 from '../assets/Trailer2.jpg';

const Videos = () => {
     return (
       <div className="w-full flex flex-col gap-10">

         <div className="max-w-xl flex flex-col gap-4">
           <h1 className="text-4xl gotham font-bold">Episodes</h1>
           <p className="text-gray-400">
             Archive footage, chilling reenactments and exclusive interviews shed new light on a tragedy — and two brothers — that suspended a city in terror.
           </p>
         </div>

         <div className="flex flex-col md:flex-row justify-center gap-10 w-full md:px-16">

           <div className="flex flex-col gap-5">
             <VideoCard episodeTitle="Episode 1" title="White Hat, Black Hat" image={Episode1} />
             <p className="text-gray-400 text-sm">
               In the hours after the blasts, investigators pore over evidence. One photo and a few seconds of footage lead to a breakthrough – and an agonizing choice.
             </p>
           </div>
          
           <div className="flex flex-col gap-5">
             <VideoCard episodeTitle="Episode 2" title="The American Dream" image={Episode2} />
             <p className="text-gray-400 text-sm">
               The brothers’ images are released to the public, setting off a violent chain of events. Meanwhile, clues from their past tell a complicated story.
             </p>
           </div>
          
           <div className="flex flex-col gap-5">
             <VideoCard episodeTitle="Episode 3" title="You Can't Interview A Corpse" image={Episode3} />
             <p className="text-gray-400 text-sm">
               Dzhokhar Tsarnaev is cornered into an intense standoff. As officials navigate remaining questions and suspicions, the city emerges – Boston Strong.
             </p>
           </div>
         
         </div>

         <div>
           <h1 className="text-4xl gotham font-bold">Preview</h1>
         </div>
         <div className="flex flex-col md:flex-row justify-center gap-10">
           <VideoCard episodeTitle="Trailer 1" title="American Manhunt: The Boston" image={Trailer1} />
           <VideoCard episodeTitle="Trailer 2" title="American Manhunt: The Boston" image={Trailer2} />
         </div>
       </div>
     );
   };

   export default Videos