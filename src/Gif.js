import React from "react";
import { connect } from "react-redux";

const Gif = (props) => {
    const { gif } = props
    return(
        <div>
            <h4>{gif.title}</h4>
            <img src={gif.images.original.url} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
      gifs: state.gifs,
      loading: state.loading,
      error: state.error
    }
  }

export default connect(mapStateToProps)(Gif);