import { useEffect, useRef } from "react";
import PropTypes from 'prop-types';

IdleStateDetector.propTypes = {
  delay: PropTypes.number,
  onIdle: PropTypes.func,
  onActive: PropTypes.func
}

export default function IdleStateDetector({delay, onIdle, onActive}) {
  const timeoutId = useRef();

  useEffect(() => {
    setup();

    return () => {
      cleanUp();
    };
  }, []);

  const setup = () => {
    document.addEventListener("mousemove", resetTimer, false);
    document.addEventListener("mousedown", resetTimer, false);
    document.addEventListener("keypress", resetTimer, false);
    document.addEventListener("DOMMouseScroll", resetTimer, false);
    document.addEventListener("mousewheel", resetTimer, false);
    document.addEventListener("touchmove", resetTimer, false);
    document.addEventListener("MSPointerMove", resetTimer, false);
    
    /* start the timer */
    
    startTimer();
  };

  const cleanUp = () => {
    document.removeEventListener("mousemove", resetTimer);
    document.removeEventListener("mousedown", resetTimer);
    document.removeEventListener("keypress", resetTimer);
    document.removeEventListener("DOMMouseScroll", resetTimer);
    document.removeEventListener("mousewheel", resetTimer);
    document.removeEventListener("touchmove", resetTimer);
    document.removeEventListener("MSPointerMove", resetTimer);

    // memory leak
    clearTimeout(timeoutId.current);
  };

  const startTimer = () => {
    // wait till delay time before calling goInactive
    timeoutId.current = setTimeout(goInactive, delay);
  };

  const resetTimer = () => {
    // reset the counter and make user go active
    clearTimeout(timeoutId.current);
    goActive();
  };

  const goInactive = () => {
    // eslint-disable-next-line no-unused-expressions
    onIdle && onIdle();

   /* optional if you want to start the idle detector again */
    resetTimer();
  };

  const goActive = () => {
    // do something
    
    // eslint-disable-next-line no-unused-expressions
    onActive && onActive();
    startTimer();
  };

  return null;
};