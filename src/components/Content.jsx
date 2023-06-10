/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect } from 'react'
import Introduction from './Introduction'
import Videos from './Videos'
import Details from './Details'
import Footer from './Footer'

const Content = () => {
	const contentRef = useRef(null);
	let current = 0;
	let target = 0;
	const ease = 0.05;

	function lerp (start, end, t) {
		return start * (1 - t) + end * t;
	}

	function setTransform(element, change){
		element.style.transform = change;
	}

	function smoothScroll(){
		current = lerp(current, target, ease);
		current = parseFloat(current.toFixed(2));
		target = window.scrollY;

		setTransform(contentRef.current, `translateY(${-current}px)`)
		requestAnimationFrame(smoothScroll);
	}

	useEffect(() => {
		const contentHeight = contentRef.current.getBoundingClientRect().height 
		document.body.style.height = `${contentHeight}px`
		smoothScroll();
	},[])

	return (
		<div id="content" ref = {contentRef} className="fixed will-change-transform w-screen h-max flex flex-col gap-5 px-16 text-white">
			<Introduction />
			<Videos />
			<Details />
			<Footer />
		</div>
	);
};

export default Content;
