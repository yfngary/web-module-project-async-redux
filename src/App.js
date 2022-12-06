import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import GifForm from './GifForm';
import GifList from './GifList';
import { useEffect } from 'react';
import { fetchStart } from './Actions';


function App(props) {
  const{ loading, gifs, error } = props;

  useEffect(() => {
    props.fetchStart();
    axios.get('https://api.giphy.com/v1/gifs/search?api_key=xvatkX9cTMEJaqKZnxUhwArSGLzVNYID&q=dogs')
      .then(res=> {
        
      })
  }, [])

  return (
    <div className="App">
      <h1>Random Gif Loader</h1>
      {
        (error !== '') && <h3>{error}</h3>
      }
      <GifForm />
      <div>
        {
          loading ? <h3>Loading Gifs</h3> : <GifList Gifs={Gifs} />
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    gifs: state.gifs,
    loading: state.loading,
    error: state.error
  }
}

const mapActionsToProps = () => {
  return {
    fetchStart: fetchStart
  }
}

export default connect(mapStateToProps, { fetchStart })(App);