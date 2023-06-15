import { useState, useEffect } from "react";

export default function Preloader(){
  const [loadingNumber, setLoadingNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingNumber((prevNumber) => {
        const randomIncrement = Math.floor(Math.random() * 10) + 1; 
        const nextNumber = prevNumber + randomIncrement;
        return nextNumber <= 100 ? nextNumber : 100;
      });
    }, 100); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="load" className={`fixed flex justify-center items-center md:justify-end md:items-end h-screen w-screen p-20`}>
			<div id = "line" className='gotham font-extrabold text-4xl md:text-9xl text-red-600 overflow-hidden'>
				<h1 id = "word" className={`
					 transition-tranform duration-3000 ease-in-out 
					${loadingNumber === 100 ? '-translate-y-96' : 'translate-y-0'}`}>
						{loadingNumber}
				</h1>
			</div>
    </div>
  );
}