import axios from 'axios';
import { useEffect, useState } from 'react';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;



const useGif = (tag) => {
    
    const [gif,setGif] = useState('');
    const [loading,setLoading] = useState(false);

    const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
 
    async function fetchData(tagParam) {
        try {
            setLoading(true);
            const { data } = await axios.get(tagParam ? tagMemeUrl : randomMemeUrl);
            const imageSource = data.data.images.downsized_large.url;
            console.log(imageSource);
            setGif(imageSource);
        } catch (error) {
            console.error('Error fetching GIF:', error);
        } finally {
            setLoading(false);
        }
    }
 
    useEffect(() => {
        fetchData();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    
    return{gif,loading, fetchData};
     
   
}

export default useGif
