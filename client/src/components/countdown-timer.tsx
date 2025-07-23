import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateCountdown = () => {
      const weddingDate = new Date('September 18, 2025 16:00:00').getTime();
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-6 md:mb-8">
      <h3 className="font-script text-lg sm:text-xl md:text-2xl text-deep-forest mb-4 px-2">
        Only {timeLeft.days} days until we say 'I do'!
      </h3>
      <div className="grid grid-cols-2 sm:flex sm:justify-center gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="countdown-item rounded-2xl p-3 sm:p-4 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-deep-forest">{value}</div>
            <div className="text-xs sm:text-sm text-deep-forest capitalize">{unit}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
