import React from "react";

const LoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-4 rounded-lg p-4 h-53 gap-8 border border-[#EAECED] ">
      <div className="bg-[#F3F5F9]">Loading...</div>
      <div className="bg-[#F3F5F9]">Loading...</div>
      <div className="bg-[#F3F5F9]">Loading...</div>
      <div className="bg-[#F3F5F9]">Loading...</div>
      <div className="bg-[#F3F5F9]">Loading...</div>
    </div>
  );
};

export default LoadingSkeleton;
