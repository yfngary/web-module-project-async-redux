import React from "react";
import { connect } from "react-redux";
import Gif from "./Gif";

const GifList = props => {
    const { gifs } = props

    return (
        <div id='GifList'>
            {
                gifs.map(gif => {
                    return (<Gif gif={gif} key={gif.id}/>)
                })
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        gifs: state.gifs,
        loading: state.loading,
        error: state.error
    }
}

export default connect(mapStateToProps)(GifList);