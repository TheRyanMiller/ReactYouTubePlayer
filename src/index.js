import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCyjT-meHpG0YCS0glKmFoI3wTvk6Uujkc';

//Create a new component that produces some HTML
class App extends Component{
  constructor(props) {
    super(props);

    this.state = {videos: [], video: {}};
    let video;

    //default search
    YTSearch({key: API_KEY,term:'Solange'}, (videos)=>{ //fat arrow function... passing "videos" variable in as param (could be data, but videos simplifies for us)
      //ES2016 allows us to have an implied "videos" tag when variable is of same name
      video = videos[1];
      console.log(videos);
      //console.log(video);
      this.setState({videos}, {video});
    });
  }

  //Required render method on Component
  render(){
    return (
      <div>
        <VideoDetail video={this.state.videos[0]} />
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

//Tell REACT to take component of generated HMTL and put it onto the page (into the DOM)

ReactDOM.render(<App />,document.querySelector('.container'));
