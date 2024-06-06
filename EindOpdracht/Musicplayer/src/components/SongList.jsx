import React from 'react';
import Song from './Song';
import SongData from '../Data/SongData';

const SongList = () => {
  return (
    <div>
      {SongData.map((song) => (
        <Song key={song.id} song={song} />
      ))}
    </div>
  );
};

export default SongList;
