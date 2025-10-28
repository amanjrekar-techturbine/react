import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 bg-gray-700 text-white my-5">
      <h1 className="text-4xl text-center mb-5">
        Github Followers: {data?.followers}
      </h1>
      <img className="mx-auto" src={data?.avatar_url} alt="" />
    </div>
  );
}

export default Github;

export const githubDataLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return await response.json();
};
