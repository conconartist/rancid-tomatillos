import React from 'react';
import '../scss/index.scss';
import '../scss/MovieInfo.scss';

const MovieInfo = ({selectedMovie, handleClick}) => {
    
    return (
        <section className='selected-movie-display'>
            <button className="button-lobby" onClick={handleClick}>Back to Lobby</button>
            <div className='movie-info-container'>
              <img className='selected-movie-poster' src={selectedMovie.poster_path} alt={`Movie poster of ${selectedMovie.title}`} ></img>
              <div className='movie-info-container-inner'>
                <h2 className='selected-movie-title'>{selectedMovie.title}</h2>
                <p className='selected-movie-overview'>{selectedMovie.overview}</p>
                <p className='selected-movie-rating'>{selectedMovie.average_rating}</p>
                <p className='selected-movie-date'>{selectedMovie.release_date}</p>
                <p className='selected-movie-revenue'>{selectedMovie.revenue}</p>
                <p className='selected-movie-runtime'>{selectedMovie.runtime}</p>
                <p className='selected-movie-tagline'>{selectedMovie.tagline}</p>
                <p className='selected-movie-genres'>{selectedMovie.genres}</p>
              </div>
            </div>  
        </section>
    )
}
export default MovieInfo;