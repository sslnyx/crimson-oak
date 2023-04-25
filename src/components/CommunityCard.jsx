import React from "react";
import "./community-card.css";
import rightArrow from "../assets/img/icons/arrow-right.svg";

const CommunityCard = ({ src, title, selling }) => {
  //   console.log(src);
  return (
    <div className="community-card basis-full md:basis-1/3 overflow-hidden px-1">
      <div className="relative">
        <img src={src} />

        <div className="community-card-content absolute bottom-0 bg-primary-dark bg-opacity-50 w-full text-white text-center h-full translate-y-[80%]">
          <div className="flex flex-col h-full">
            <div className="uppercase py-5">{title}</div>
            <div className="uppercase flex-1 flex items-center justify-center">
              {selling ? (
                <div className="flex">
                  <span className="mr-1">Now Selling</span>
                  <span>
                    <img className="object-none" src={rightArrow} />
                  </span>
                </div>
              ) : (
                <span>Coming Soon</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
