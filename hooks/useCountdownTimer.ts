import { useState, useEffect, useCallback } from 'react';

interface CountdownTimerHook {
  seconds?: number;
  isRunning: boolean;
  start: (duration: number) => void;
  pause: () => void;
  resume: () => void;
  reset: () => void;
  timeLeft: string;
}

const useCountdownTimer = (initialDuration: number = 0): CountdownTimerHook => {
  const [seconds, setSeconds] = useState(initialDuration);
  const [isRunning, setIsRunning] = useState(false);

  const tick = useCallback(() => {
    setSeconds((prevSeconds) => {
      if (prevSeconds <= 1) {
        setIsRunning(false);
        return 0;
      }
      return prevSeconds - 1;
    });
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isRunning) {
      intervalId = setInterval(tick, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning, tick]);

  const start = useCallback((duration: number) => {
    setSeconds(duration);
    setIsRunning(true);
  }, []);

  const pause = useCallback(() => {
    setIsRunning(false);
  }, []);

  const resume = useCallback(() => {
    if (seconds > 0) {
      setIsRunning(true);
    }
  }, [seconds]);

  const reset = useCallback(() => {
    setIsRunning(false);
    setSeconds(initialDuration);
  }, [initialDuration]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
  };

  return { timeLeft: formatTime(seconds), isRunning, start, pause, resume, reset };
};

export default useCountdownTimer;