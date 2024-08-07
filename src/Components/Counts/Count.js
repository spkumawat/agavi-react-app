import React, { useEffect, useRef, useState } from 'react';

const Count = ({ number, text }) => {
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(countRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setNumber(prevNumber => {
          if (prevNumber >= number) {
            clearInterval(interval);
            return number;
          }
          return prevNumber + Math.ceil(number / 100); // Adjust the step value as needed
        });
      }, 20); // Adjust the interval as needed
    }
  }, [isVisible]);

  const [displayNumber, setNumber] = useState(0);

  return (
    <div ref={countRef} className="col-sm-3 numb">
      <h3>{displayNumber}+</h3>
      <span>{text}</span>
    </div>
  );
};

export default Count;
