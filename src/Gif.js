import React from "react";

const Gif = (Gif) => {
    return(
        <div>
            <h4>{Gif.username}</h4>
            <img src={Gif.url} />

        </div>
    )
}

export default Gif;