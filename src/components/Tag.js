import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  const [tag,setTag]=useState("car");
   const{gif,loading,fetchData}=useGif(tag);
  return (
    <div className='w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random{tag}Gif</h1>
      
      {
        loading ? (<Spinner/>):(<img src={gif} width="450" alt="Random gif" />)
      }
      
      <img src={gif} width="450" alt="Random gif" />


      <input
      className='w-10/12  text-lg py-2 rounded-lg mb-[3px] text-center'
      onChange={(event)=>event.target.value}
      value={tag}
      />


      <button
        onClick={fetchData}
        className='w-10/12 bg-green-300 text-lg py-2 rounded-lg mb-[20px]'
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
