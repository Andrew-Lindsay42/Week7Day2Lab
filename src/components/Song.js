import React from "react";



const Song = ({song}) => {
    return (
        <li className="song">
            <a href={song.url}>{song.name}</a>
        </li>
    );
}

export default Song;