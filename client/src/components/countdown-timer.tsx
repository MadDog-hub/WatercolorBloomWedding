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
    <div className="mb-8">
      <h3 className="font-script text-2xl text-deep-forest mb-4">
        Only {timeLeft.days} days until we say 'I do'!
      </h3>
      <div className="flex justify-center space-x-4 flex-wrap">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="countdown-item rounded-2xl p-4 text-center min-w-20">
            <div className="text-3xl font-bold text-deep-forest">{value}</div>
            <div className="text-sm text-deep-forest capitalize">{unit}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
