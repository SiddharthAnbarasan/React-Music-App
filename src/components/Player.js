import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlay, faAngleLeft, faAngleRight, faPause} from "@fortawesome/free-solid-svg-icons";

const Player = ({audioRef,currentSong,isPlaying,setIsPlaying, songInfo, setSongInfo, songs, setCurrentSong, setSongs}) =>{

    const activeLibraryHandler = (nextPrev) => {
        const newList = songs.map(item => {
            if(item.id === nextPrev.id) {            
                return (
                    {
                        ...item, active: true
                    }
                )
            } else{
                return (
                    {
                        ...item, active: false
                    }
                )
            }
    })
    setSongs(newList);
    }

    const playSongHandler = () => {        
        if(isPlaying){
            audioRef.current.pause();
             setIsPlaying(!isPlaying);
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    }  
    const getTime = (time) => {
        return (
            Math.floor(time/60) + ":" + ("0" + Math.floor(time%60)).slice(-2)
        )
    }
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value})
    }
    const skipTrackHandler = async (direction) => {
        let currentIndex = songs.findIndex(song => song.id === currentSong.id);
        if(direction === 'skip-forward') {
            await setCurrentSong(songs[(currentIndex+1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex+1) % songs.length])
        } else {
            if((currentIndex - 1)% songs.length === -1){
            setCurrentSong(songs[songs.length - 1]);
            activeLibraryHandler(songs[songs.length - 1])
            isPlaying && audioRef.current.play()
            return;
        }
        setCurrentSong(songs[(currentIndex-1) % songs.length]);
        activeLibraryHandler(songs[(currentIndex-1) % songs.length])
        }
        isPlaying && audioRef.current.play()
    }
    //Add the styles
    const trackAnim = {
        transform: `translateX(${songInfo.animationPercentage}%)`
    }
    return(
        <div className="player">
            <div className="time__control">
                <p>{getTime(songInfo.currentTime)}</p>
                <div style={{background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`}} className="track">
                <input type="range"
                    min={0}
                    max={songInfo.duration || 0}
                    value={songInfo.currentTime}
                    onChange={dragHandler} />
                    <div style={trackAnim} className="animate__track"></div>
                </div>
                <p>{songInfo.duration ? getTime(songInfo.duration): "0:0"}</p>
            </div>
            <div className="player__control">
                <FontAwesomeIcon className="next" size="2x" icon={faAngleLeft} onClick={() => skipTrackHandler('skip-back')}/>
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={ isPlaying ? faPause : faPlay } />
                <FontAwesomeIcon className="prev" size="2x" icon={faAngleRight} onClick={() => skipTrackHandler('skip-forward')}/>
            </div>            
        </div>
    )
}

export default Player;