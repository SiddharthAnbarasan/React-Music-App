import React from "react";
import LibrarySong from "./LibrarySong"

const Library = ({setCurrentSong, songs, audioRef, isPlaying, setSongs, libraryStatus}) =>{
    return(
        <div className={`library ${libraryStatus ? 'active__library' : ''}`}>
            <h2>Library</h2>
            <div className="library__songs">
                {
                    songs.map(song => {
                        return (
                            <LibrarySong setCurrentSong={setCurrentSong} song={song} key={song.id} audioRef={audioRef} isPlaying={isPlaying} songs={songs} setSongs={setSongs}/>
                        )
                    })
                }                
            </div>
        </div>
    )
}

export default Library;