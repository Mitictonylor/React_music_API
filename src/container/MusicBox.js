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


componentDidMount(){
  const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=40/json'
  fetch(url).then(res =>res.json()).then(data =>this.setState({music: data.feed.entry}))
}


  render(){
    return(
      <div className = "main-container">
      <MusicList music={this.state.music}/>
      </div>
    )
  }
}
export default MusicBox;
