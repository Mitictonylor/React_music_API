import React from 'react';
import './Music.css';
import ReactAudioPlayer from 'react-audio-player'

const Music = (props) =>{


return(
<>
  <li className="flex-grid">
  <p className="position">Position : {props.position}</p>
  <img className="album-cover" src={props.song["im:image"][2].label} />
  <p className="artist">Artist :{props.song['im:artist'].label} </p>
  <p className="song">Song : {props.song['im:name'].label}</p>
  <ReactAudioPlayer className="player"
    src={props.song.link[1].attributes.href}
    autoPlay
    controls
  />
  </li>
<hr/>
  </>
)


}
export default Music;
