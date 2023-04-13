import React from "react";

export default function CurrentBallance() {
  return (
    <div className="flex bg-orange-50   m-6 px-5 rounded-lg text-orange-500 font-semibold">
      <div className="my-5 ">
        <h1 className="text-2xl  mb-2">Current Balance </h1>
        <p className="text-2xl ">750$</p>
        <div className=" flex gap-4"></div>
      </div>
    </div>
  );
}
