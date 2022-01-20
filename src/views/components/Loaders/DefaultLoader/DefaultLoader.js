//Packages
import React from "react";
import { Dots } from "react-activity";
import "react-activity/dist/Dots.css";
import { usePromiseTracker } from "react-promise-tracker";

const DefaultLoader = () => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    <>
      {promiseInProgress && (
        <div
          className="flex justify-center items-center fixed w-full h-full bg-gray-200 bg-opacity-75"
          style={{ zIndex: 100 }}
        >
          <Dots />
        </div>
      )}
    </>
  );
};

export default DefaultLoader;
