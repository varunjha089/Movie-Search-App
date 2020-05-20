import React, {useState} from "react";
import MovieCard from "./MovieCard";

export default function SearchMovies(){

    // managing state
    const [query, setQuery] = useState('');

    //create the state for movies, and update that state appropriate
    const [movies, setMovies] = useState([]);

    // movie search function
    const searchMovies = async (e) => {
        e.preventDefault();

        const includeAdult = "false";
        const apiKey = "de445724929a46859c150adaab21e493";

        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=${includeAdult}`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query"
                       placeholder="i.e. Jurassic Park"
                       value={query}
                       onChange={(e) => setQuery(e.target.value)}
                />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </>
    )
}
