import React, { useState } from 'react';
import useGif from '../hooks/useGif';
import Spinner from './Spinner';

const Tag = () => {
  const [tag, setTag] = useState('');
  const {gif, loading, fetchData} = useGif(tag);
   
  function changeHandler(event) {
    setTag(event.target.value);
  }
    
  return (
    <div className='w-full max-w-2xl bg-white/90 backdrop-blur-sm rounded-2xl border border-white/20 flex flex-col items-center gap-y-6 p-6 shadow-xl'>
      <h1 className='text-2xl md:text-3xl font-bold text-gray-800'>
        Random {tag ? tag : 'Tag'} GIF
      </h1>  

      <div className='w-full aspect-video rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center'>
        {loading ? (
          <Spinner/>
        ) : (
          <img 
            src={gif} 
            alt={`Random ${tag ? tag : 'tag'} GIF`}
            className='w-full h-full object-contain rounded-xl'
          />
        )}
      </div>

      <input 
        className='w-full max-w-md text-lg py-3 px-6 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
        onChange={changeHandler}
        value={tag}
        placeholder="Enter a tag..."
      />

      <button 
        onClick={() => fetchData(tag)} 
        className='w-full max-w-md bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-lg py-3 px-6 rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg'
      >
        Generate GIF
      </button>
    </div>
  );
};

export default Tag;
