import React from 'react';
import '../scss/index.scss'
import Poster from './Poster';
import Form from './Form';

const Movies = ({movies, searchMovieTitle, sortMovies, handleClick, isSorted, didSearch}) => {
    const moviePosters = movies.map(movie => {
        return (
            <Poster 
                title={movie.title}
                rating={movie.average_rating.toFixed(1)}
                posterImage={movie.poster_path}
                id={movie.id}
                key={movie.id}
            />
        )
    })
    
    return (
        <React.Fragment>
            <Form 
                searchMovieTitle={searchMovieTitle} 
                sortMovies={sortMovies} 
                handleClick={handleClick} 
                isSorted={isSorted} 
                didSearch={didSearch}
            />
            <section className='movie-grid'>
                {moviePosters}
            </section>
        </React.Fragment>
    )
}

export default Movies;