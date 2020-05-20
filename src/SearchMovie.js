import React, {useState} from "react";

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
                    <div className="card" key={movie.id}>
                        <img className="card--image" alt={movie.title + "Poster"}
                             src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                        />

                        <div className="card--content">
                            <h3 className="card--title">{movie.title}</h3>
                            <p><small>RELEASE DATE: {movie.release_date}</small></p>
                            <p><small>RATING: {movie.vote_average}</small></p>
                            <p className="card--desc">{movie.overview}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
