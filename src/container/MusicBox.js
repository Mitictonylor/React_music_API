import React, {Component} from 'react';
import './MusicBox.css';
import MusicList from '../components/MusicList.js';



class MusicBox extends Component{

  constructor(props){
    super(props)
    this.state = {
      music:[],
      selectedMusic: ""
    }
  }

  render(){
    return(
      <div className = "main-container">
      <MusicList/>
      </div>
    )
  }
}
export default MusicBox;
