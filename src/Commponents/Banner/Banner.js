import React,{useState, useEffect} from 'react'
 import './Banner.css';
 import axios from '../../axios'
 import { API_KEY , imageURL} from '../../constance/constance';


function Banner() {
  let [movie, setMovie] = useState()
  useEffect(() => {
  console.log("https://api.themoviedb.org/3/trending/all/week?api_key="+API_KEY+'&language=en-US',imageURL);
  axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
     console.log(response.data.results[0])
     setMovie(response.data.results[6])
  })
  }, [])
  
  return (
    <div 
    style={{  backgroundImage:`url(${movie ? imageURL + movie.backdrop_path : ""})` }}
    className='banner '>
        <div className="content">
            <h1 className="title">{movie ? movie.title : "titile" }</h1>
            <div className="banner_buttons">
              <button className="button btn">Play</button>
              <button className="button btn">My list</button>
            </div>
            <h1 className="description">{movie ? movie.overview : 'description'}</h1>
        </div>
        <div className="fade_bottom">
            
        </div>
 </div>
  )
}

export default Banner