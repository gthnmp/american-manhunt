/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import SmoothWrapper from './SmoothWrapper';

import Introduction from './Introduction'
import Videos from './Videos'
import Details from './Details'
import Footer from './Footer'

const Content = () => {
	return (
		<SmoothWrapper>
			<Introduction />
			<Videos />
			<Details />
			<Footer />
		</SmoothWrapper>
	);
};

export default Content;
