import React from "react";
import SongList from "../components/SongList";

const TopSongBox = () => {
    const intialSongs = [
        {id: 1,
        name: "Masked Wolf: Astronaut in the Ocean",
        url: "https://www.youtube.com/watch?v=YRNyamyBOIQ"
        },
        {id:2,
        name: "Olivia Rodrigo - good 4 u",
        url: "https://www.youtube.com/watch?v=gNi_6U5Pm_o"
        },
        {id:3,
        name:"Ed Sheeran - Take Me Back To London",
        url:"https://www.youtube.com/watch?v=XJQy_R9CYR4"
        },
        {id:4,
        name:"SOMETIMES - GERRY CINNAMON",
        url:"https://www.youtube.com/watch?v=At3xXBEy4n4"
        }
    ]
    return(
        <>
        <h1>This is the Top Song List</h1>
        <SongList />
        </>
    )
}


export default TopSongBox;