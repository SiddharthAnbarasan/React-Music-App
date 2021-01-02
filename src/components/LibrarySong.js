import React from "react";
const LibrarySong = ({setCurrentSong, song, songs, audioRef, setSongs, isPlaying}) =>{
    const songSelectHandler = async () => {
        await setCurrentSong(song);
        //Add active        
        const newList = songs.map(item => {
                if(item.id === song.id) {            
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
        isPlaying && audioRef.current.play()
    }
    return(
        <div className={`library__song ${song.active ? 'selected' : ''}`} onClick={songSelectHandler}>
            <img src={song.cover} alt={song.name} />
            <div className="song__description">
            <h3>{song.name}</h3>
    <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;