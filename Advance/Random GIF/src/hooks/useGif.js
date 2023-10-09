import { useState, useEffect } from "react"
import axios from 'axios'



const useGif = (tag) => {

   
    
    const [gif, setGif] = useState('car')
    const [loading, setLoading] = useState(false)

    async function fetchData(){
        setLoading(true);
        
    
        const {data} = await axios.get(tag 
            ? `https://api.giphy.com/v1/gifs/random?api_key=yTgAi1DEJ1fOeYgdeMCqrWP1Z2zMpn8c&tag=${tag}` 
            : `https://api.giphy.com/v1/gifs/random?api_key=yTgAi1DEJ1fOeYgdeMCqrWP1Z2zMpn8c&`
            )
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource)
        setLoading(false)
    }


    useEffect( () =>{
        fetchData();
    },[])

    return{
        gif,
        loading,
        fetchData
    }

}

export default useGif