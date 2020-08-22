import React from "react"
import Movie, { IMovie } from "../movie/";
import css from "./style.module.css";


interface IProps {
    movies: Array<IMovie>
    noDataMessage?: string;
}

export default function MovieList(props: IProps) {
    const { movies, noDataMessage = "No Data" } = props
    if (!movies.length) return <h1> {noDataMessage}</h1>
    return <div className={`${css.bgMovies} row justify-content-between`}>
        {movies.map((movie, ind) => { return <Movie key={movie.id + ind} {...movie} /> })}
    </div>
}  