import React from 'react';
import '../App.css'

const Song = ({ song }) => {
    return (
      <div className='main div'>
        <img  src={song.albumCover} alt={`${song.title} album cover`} className='AlbumImage'/>
        <div>
            <div className='SongInfo'>
            <div className='SongTitle'>
          <h2>{song.title}</h2>
          </div>
          <div className='SongArtist'>
          <h3>{song.artist}</h3>
          </div>
          </div>
          <audio controls>
            <source src={song.audioFile} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    );
  };
export default Song;
