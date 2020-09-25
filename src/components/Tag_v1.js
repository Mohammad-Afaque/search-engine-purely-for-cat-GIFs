import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { loadProgressBar } from 'axios-progress-bar'


const API_KEY =  process.env.REACT_APP_API_KEY;

const Random = ()=>{
    const [tag,setTag] = useState("dog")
    const [gif,setGif] = useState("")
    const fetchGif = async(tag)=>{
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
        const {data}= await axios.get(url);
        const imageSrc = data.data.images.downsized_large.url    
        setGif(imageSrc)
    }

    //COMPONENT DID MOUNT ... first render
    useEffect(()=>{
        fetchGif("")
    },[])

    const handleClick =()=>{
        fetchGif(tag)
        loadProgressBar()
    }
    return(
    <div>
        <h1 className="container">Random {tag} Gif</h1>
        <img width="500" src={gif} alt="Gif failed to upload"/>
        <input value={tag} onChange={(e) =>{setTag(e.target.value)}}/><br/>
        <button  onClick={handleClick}>click to change </button>
    </div>
    )
}
export default Random;