/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

import { 
	SmoothWrapper,
	Preloader,
	Introduction,
	Videos,
	Details,
	Footer, 
} from './components';

export default function App(){
	const [ isLoading, setIsLoading ] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false)
		},3000)
	},[])
	return (
		<>
			<Preloader /> 
			<SmoothWrapper className={`text-white transition-opacity ease-in-out duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
				<Introduction />
				<Videos />
				<Details />
				<Footer />
			</SmoothWrapper>
		</>
	);
}

