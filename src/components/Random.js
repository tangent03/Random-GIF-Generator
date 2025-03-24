import React from 'react';
import useGif from '../hooks/useGif';
import Spinner from './Spinner';

const Random = () => {
  const {gif, loading, fetchData} = useGif();
  
  return (
    <div className='w-full max-w-2xl bg-white/90 backdrop-blur-sm rounded-2xl border border-white/20 flex flex-col items-center gap-y-6 p-6 shadow-xl'>
      <h1 className='text-2xl md:text-3xl font-bold text-gray-800'>Random GIF</h1>  

      <div className='w-full aspect-video rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center'>
        {loading ? (
          <Spinner/>
        ) : (
          <img 
            src={gif} 
            alt="Random GIF"
            className='w-full h-full object-contain rounded-xl'
          />
        )}
      </div>

      <button 
        onClick={() => fetchData()} 
        className='w-full max-w-md bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-lg py-3 px-6 rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg'
      >
        Generate New GIF
      </button>
    </div>
  )
}

export default Random
