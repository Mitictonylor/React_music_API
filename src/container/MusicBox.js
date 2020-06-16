import React, {Component} from 'react'
import './MusicBox.css'
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
      <p>AFAMMOKK</p>
      </div>
    )
  }
}
export default MusicBox;
