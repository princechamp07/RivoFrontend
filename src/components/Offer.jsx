import React, { useState, useEffect } from 'react';

const Offer = () => {
  // Set the event date (6 days from now as an example)
  const eventDate = new Date();
  eventDate.setDate(eventDate.getDate() + 6);

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = eventDate - now; // Time difference between now and eventDate

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      // If the time runs out, show zeros
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear interval on component unmount to avoid memory leaks
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="my-4 mx-10 justify-center text-green-950 md:mt-28 md:mx-40">
      <div className="font-bold text-4xl">Exclusive offer</div>
      <div className="mt-4 pr-10 text-xl">
        Unlock the ultimate style upgrade with our exclusive offer. Enjoy savings of up to 40% off on our latest New Arrivals.
      </div>
      <div className="flex font-bold s mt-4">
        <div className="bg-white px-5 py-4">
          <div>{String(timeLeft.days).padStart(2, '0')}</div>
          <div>days</div>
        </div>
        <div className="bg-white px-5 py-4">
          <div>{String(timeLeft.hours).padStart(2, '0')}</div>
          <div>Hours</div>
        </div>
        <div className="bg-white px-5 py-4">
          <div>{String(timeLeft.minutes).padStart(2, '0')}</div>
          <div>Min</div>
        </div>
        <div className="bg-white px-5 py-4">
          <div>{String(timeLeft.seconds).padStart(2, '0')}</div>
          <div>Sec</div>
        </div>
      </div>
      <div className="flex justify-center md:justify-start">
        <div className="py-4 bg-green-800 text-white font-bold w-44 my-8 flex justify-center rounded">
          Buy Now
        </div>
      </div>
    </div>
  );
};

export default Offer;
