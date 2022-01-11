import React from "react";
import Song from "./Song";

const SongList = ({songs}) =>  {

    const Songs = songs.map((song) => {
        return(
            <Song song={song} key={song.id} />
        )
    })

    return(
        <div class="song-list" >
        <ul>
            {Songs}
        </ul>
        </div>
    )
};

export default SongList