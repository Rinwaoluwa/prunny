import { useState } from 'react';

export const useOtp = () => {
  const generateRandomNumber = () => {
    let randomNumber = '';
    for (let i = 0; i < 4; i++) {
      randomNumber += Math.floor(Math.random() * 10);
    }
    return randomNumber;
  };

  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());

  // Resend function to regenerate the number
  const resend = () => {
    setRandomNumber(generateRandomNumber());
  };

  return { otp: randomNumber, resend };
};
