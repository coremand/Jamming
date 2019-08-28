import React, {Component} from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults : [{
          name : "Song Name",
          artist : "Artist Name",
          album : "Artist Album",
          id : 1
        
        }],
      playlistName : "My Playlist",
        playlistTracks : [{
          name : "Song Name",
          artist : "Artist Name",
          album : "Artist Album",
          id : 4
        }]
    }

    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }



  render(){
    return (
      <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults = {this.state.searchResults} onAdd = {this.addTrack}/>
            <PlayList playlistName={this.state.PlaylistName}  playlistTracks = {this.state.PlaylistTracks}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
