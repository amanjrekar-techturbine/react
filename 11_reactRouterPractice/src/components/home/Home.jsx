import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Home() {

    const githubData = useLoaderData();
  return (
    <div><h1>This is Home Page. Hitest Followers : {githubData.followers}</h1></div>
  )
}

export default Home

export const githubDataLoader = async () => {
    const response = await fetch("https://api.github.com/users/hiteshchoudhary");
    return await response.json();
}