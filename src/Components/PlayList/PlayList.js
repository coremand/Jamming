import React, {Component} from 'react';
import './PlayList.css';
import TrackList from '../TrackList/TrackList'



class PlayList extends Component {
  
  render() {
    return (
      <div className="Playlist">
        <input onChange={this.handleNameChange} defaultValue={'New Playlist'} />
        <TrackList tracks={this.props.playlistTracks}
                   isRemoval={true}
                   onRemove={this.props.onRemove} />
        <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
      </div>
    );
  }
}
export default PlayList;