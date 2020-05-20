import React from "react";

export default function SearchMovie() {
    return(
        <form className="form">
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query" placeholder="Titanic" />
            <button className="button" type="submit">Search</button>
        </form>
    )
}
