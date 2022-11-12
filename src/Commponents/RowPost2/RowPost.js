import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import './Rowpost.css';
import axios from '../../axios'
import {API_KEY , imageURL} from '../../constance/constance'

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');
  useEffect(() => {
    axios.get(props.url).then((res)=>{
      console.log(res.data.results);
      setMovies(res.data.results)
    }).catch(err=>{
      throw err;
    })
  }, [])

  const opts= {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
  },
  };
  const handleMovie =(id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US1`).then((res)=>{
      if(res.data.results.length!==0){
      setUrlId(res.data.results[0]);
      }
    })
  }
  return (
    <div className="row">
      <h1>{props.title}</h1>
      <div className="posters">
        {movies.map((obj)=>
         <img onClick={()=>handleMovie(obj.id)} src={`${imageURL+ obj.backdrop_path}`} alt="" className={props.isSamll ? "smallPosters" : "poster" }/>
        )}
      </div>
      { urlId &&  <Youtube opts={opts} videoId={ urlId.key }/>}
    </div>
  )
}

export default RowPost

