/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
//fixed will-change-transform w-screen h-max flex flex-col gap-5 px-8 lg:px-16
import {useRef, useEffect} from 'react'

const SmoothWrapper = ({ className: additionalClassNames, ...props }) => {
  const contentRef = useRef(null);
  let current = 0;
  let target = 0;
  const defaultClassName =
    'fixed will-change-transform w-screen h-max flex flex-col gap-20 px-8 lg:px-16';
  const customizedClassName = `${defaultClassName} ${additionalClassNames}`;

  useEffect(() => {
    let ease = 0.09;

    function lerp(start, end, t) {
      return start * (1 - t) + end * t;
    }

    function setTransform(element, change) {
      element.style.transform = change;
    }

    function smoothScroll() {
      current = lerp(current, target, ease);
      current = parseFloat(current.toFixed(2));
      target = window.scrollY;

      setTransform(contentRef.current, `translateY(${-current}px)`);
      requestAnimationFrame(smoothScroll);
    }

    function updateBodyHeight() {
      const contentHeight = contentRef.current.getBoundingClientRect().height;
      const contentWidth = contentRef.current.getBoundingClientRect().width;
      document.body.style.height = `${contentHeight}px`;
      document.body.style.width = `${contentWidth}px`;
      ease = contentWidth > 768 ? 0.06 : 1;
    }

    function handleResize() {
      updateBodyHeight();
    }

    handleResize();
    smoothScroll();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    function handleLoad() {
      const scrollPosition = sessionStorage.getItem('scrollPosition');
      if (scrollPosition !== null) {
        // Reset scroll position
        window.scrollTo(0, scrollPosition);

        // Clear the stored scroll position
        sessionStorage.removeItem('scrollPosition');
      }
    }

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div ref={contentRef} className={customizedClassName} style={props.style}>
      {props.children}
    </div>
  );
};

export default SmoothWrapper;
