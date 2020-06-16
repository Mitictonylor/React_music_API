import React from 'react';
import Music from './Music.js';



const MusicList = (props) =>{

  const musicOptions = props.music.map((song, index) => {
    return <Music song = {song} position = {index + 1} key = {index}/>
  })

  return(
    <>
      <ul>
        {musicOptions}
      </ul>
    </>
  )
}
export default MusicList
