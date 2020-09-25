import React,{useState,useEffect} from 'react'
import axios from 'axios'

const API_KEY =  process.env.REACT_APP_API_KEY;

const Random = ()=>{
    const [gif,setGif] = useState("")

    const fetchGif = async()=>{
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
        const {data}= await axios.get(url);
        const imageSrc = data.data.images.downsized_large.url    
        setGif(imageSrc)
    }

    //COMPONENT DID MOUNT ... first render
    useEffect(()=>{
        fetchGif()
    },[])

    const handleClick =()=>{
        fetchGif()
    }
    return(
    <div>
        <h1 className="container">Random Gif</h1>
        <img width="500" src={gif}/>
        <button  onClick={handleClick}>click to change </button>
    </div>
    )
}
export default Random;