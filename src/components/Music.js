import React from 'react';
import './Music.css';

const Music = (props) =>{


return(
<>
  <li>
  <img src={props.song["im:image"][2].label} className="albumCover"/>
  <p >Position : {props.position}</p>
  <p>Artist :{props.song['im:artist'].label} </p>
  <p>Song : {props.song['im:name'].label}</p>
  <a className ="song-play" href={props.song.link[1].attributes.href} target="_blank">Play</a>

  </li>
<hr/>
  </>
)


}
export default Music;
