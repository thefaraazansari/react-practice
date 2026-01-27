import { useState } from "react";
import { useNavigate } from "react-router";
import LeftArrowIcon from "../assets/ArrowLeftIcon";
import sunset from "../assets/sunset.jpg";
import "../index.css";

function CardGradient() {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="flex flex-col p-8 gap-6">
      <div className="flex items-center gap-10">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex gap-1 items-center font-semibold text-indigo-700 border border-indigo-700 cursor-pointer hover:bg-indigo-700 hover:text-white rounded pr-3 pl-2 py-1 focus-visible:outline-none focus-visible:bg-indigo-700 focus-visible:text-white focus-visible:ring-2 focus-visible:ring-indigo-700 focus-visible:ring-offset-2"
        >
          <LeftArrowIcon />
          Back
        </button>
        <h1 className="text-6xl font-semibold text-indigo-700">Card</h1>
      </div>

      <div className="flex items-center justify-center gap-60 pt-20">
        <div className="w-[500px]">
          <svg viewBox="0 0 1230.94 414.57">
            <path
              d="M-293.58-104.62S-103.61-205.49-60-366.25c9.13-32.45,9-58.31,0-74-10.72-18.82-49.69-33.21-75.55,31.94-27.82,70.11-52.22,377.24-44.11,322.48s34-176.24,99.89-183.19c37.66-4,49.55,23.58,52.83,47.92a117.06,117.06,0,0,1-3,45.32c-7.17,27.28-20.47,97.67,33.51,96.86,66.93-1,131.91-53.89,159.55-84.49,31.1-36.17,31.1-70.64,19.27-90.25-16.74-29.92-69.47-33-92.79,16.73C62.78-179.86,98.7-93.8,159-81.63S302.7-99.55,393.3-269.92c29.86-58.16,52.85-114.71,46.14-150.08-7.44-39.21-59.74-54.5-92.87-8.7-47,65-61.78,266.62-34.74,308.53S416.62-58,481.52-130.31s133.2-188.56,146.54-256.23c14-71.15-56.94-94.64-88.4-47.32C500.53-375,467.58-229.49,503.3-127a73.73,73.73,0,0,0,23.43,33.67c25.49,20.23,55.1,16,77.46,6.32a111.25,111.25,0,0,0,30.44-19.87c37.73-34.23,29-36.71,64.58-127.53C724-284.3,785-298.63,821-259.13a71,71,0,0,1,13.69,22.56c17.68,46,6.81,80-6.81,107.89-12,24.62-34.56,42.72-61.45,47.91-23.06,4.45-48.37-.35-66.48-24.27a78.88,78.88,0,0,1-12.66-25.8c-14.75-51,4.14-88.76,11-101.41,6.18-11.39,37.26-69.61,103.42-42.24,55.71,23.05,100.66-23.31,100.66-23.31"
              transform="translate(311.08 476.02)"
              style={{
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeMiterlimit: 10,
                strokeWidth: 35,
                strokeDasharray: 5000,
                strokeDashoffset: 5000,
                animation: "draw linear 2.5s forwards",
              }}
            />
          </svg>
        </div>

        <div
          style={{ backgroundImage: `url(${sunset})` }}
          className="relative flex flex-col items-center justify-end h-[400px] w-[300px] rounded-4xl overflow-hidden bg-cover"
        >
          <button
            className="h-12 w-12 rounded-3xl cursor-pointer absolute z-10 top-4 right-2"
            onClick={() => setIsLiked((prev) => !prev)}
          >
            {isLiked ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 0 24 24"
                width="40px"
                fill="#ff0000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 0 24 24"
                width="40px"
                fill="#FFFFFF"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
              </svg>
            )}
          </button>
          <div className="flex flex-col justify-end items-center h-[70%] w-full p-3 gap-2 gradient-blur">
            <div className="flex flex-col justify-between h-full w-full pt-[80px] z-[1]">
              <p className="text-2xl font-semibold text-white">
                Santorini Sunset Loft
              </p>
              <p className="text-sm text-neutral-200">
                Experience a cliff top view of Santorini with iconic white
                walls, a pool and a rooftop terrace.
              </p>
              <button className="h-12 w-full rounded-3xl cursor-pointer bg-white text-neutral-800 font-medium relative z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardGradient;
