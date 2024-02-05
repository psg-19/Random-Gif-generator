import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Spinner11 } from './Spinner11';




export const Random = () => {

    const[gif,setgif]=useState('')

    function clickHandler(event){
fetchData()
    }

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY
const [loading ,setloading]=useState(true)

async function fetchData(){
    setloading(true)
     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const {data}= await axios.get(url)



  const imgSource=data.data.images.downsized_large.url

  
  setgif(imgSource)
  console.log(gif)
  setloading(false)
//   console.log(x);


 }

useEffect(()=>{
    fetchData()
},[])

  return (
    <div className='w-1/2  bg-orange-300 rounded-lg
    border-black border flex flex-col items-center gap-y-5 mt-[15px]'>

    <h1 className='text-2xl underline uppercase font-bold'>A RANDOM GIF</h1>
   
   

{
    loading ===false ? (<div className='p-4 rounded-md'><img src={gif}  alt="" 
    />
    </div>):(<Spinner11/>)
} 
   
   {/* <div className='p-4 rounded-md'><img src={gif}  alt="" 
    />
    </div> */}

    <button onClick={clickHandler} className='w-10/12 text-lg py-2 rounded-lg
     bg-white mb-4'>GENERATE</button>


    </div>
  )
}
