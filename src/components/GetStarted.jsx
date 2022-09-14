import React from 'react';
import { arrowUp } from '../assets';
import styles from '../styles';

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] bg-blue-gradient rounded-full cursor-pointer p-[2px]`}
    >
      <div
        className={`${styles.flexCenter} bg-primary h-[100%] w-[100%] rounded-full flex-col`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-medium font-poppins leading-[23px] text-[18px] mr-2">
            <span className="text-gradient"> Get</span>
          </p>
          <img src={arrowUp} alt="arrow" className="h-[23px] w-[23px]" />
        </div>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-medium font-poppins leading-[23px] text-[18px]">
            <span className="text-gradient"> Started</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
