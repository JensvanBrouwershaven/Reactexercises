import nevereverAudio from '../assets/Music/Destroy Lonely - NEVEREVER (Official Audio).mp3';
import duckworthAudio from '../assets/Music/DUCKWORTH..mp3';
import kidsSeeGhostsAudio from '../assets/Music/Kids See Ghosts.mp3';

import nsUltraCover from '../assets/AlbumCover/NS-Ultra.png';
import damnCover from '../assets/AlbumCover/DAMN.jpg';
import kidsSeeGhostsCover from '../assets/AlbumCover/Kids-See-Ghosts.jpg';

const SongData = [
  {
    id: 1,
    title: 'NEVEREVER',
    artist: 'Destroy Lonely',
    audioFile: nevereverAudio,
    albumCover: nsUltraCover
  },
  {
    id: 2,
    title: 'DUCKWORTH.',
    artist: 'Kendrick Lamar',
    audioFile: duckworthAudio,
    albumCover: damnCover
  },
  {
    id: 3,
    title: 'Kids See Ghosts',
    artist: 'Kids See Ghosts, Kanye West, Kid Cudi',
    audioFile: kidsSeeGhostsAudio,
    albumCover: kidsSeeGhostsCover
  },
];

export default SongData;
