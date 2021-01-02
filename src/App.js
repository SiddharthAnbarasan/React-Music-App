import React, {useState, useRef} from 'react';
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
//styles
import "./styles/app.scss";
//Import Util
import data from './data';

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);  
  const [songInfo, setSongInfo] = useState({
      currentTime: 0,
      duration: 0,
      animationPercentage: 0
  })  
  const [libraryStatus, setLibraryStatus] = useState(false)
  const timeUpdateHandler = (e) => {

    setSongInfo({
      ...songInfo, 
      currentTime: e.target.currentTime, 
      duration: e.target.duration,
      animationPercentage: Math.round((Math.round(e.target.currentTime) / Math.round(e.target.duration))*100)
    }
      );
}  
const songEndHandler = async () => {
  let currentIndex = songs.findIndex(song => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex+1) % songs.length]);
    isPlaying && audioRef.current.play()
}
  //ref
  const audioRef = useRef(null);
  return (
    <div className={`App ${libraryStatus ? 'library__active':''}`}>
      <Nav setLibraryStatus={setLibraryStatus} libraryStatus={libraryStatus} />
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioRef={audioRef} setSongs={setSongs}  songInfo={songInfo} setSongInfo={setSongInfo} songs={songs} setCurrentSong={setCurrentSong}/>
      <Library setCurrentSong={setCurrentSong} songs={songs} audioRef={audioRef} isPlaying={isPlaying} setSongs={setSongs}  libraryStatus={libraryStatus} />
      <audio ref={audioRef} src={currentSong.audio} onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} onEnded={songEndHandler}/>
    </div>
  );
}

export default App;
