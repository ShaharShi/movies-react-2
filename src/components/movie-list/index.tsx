import React from "react"
import Movie, { IMovie } from "../movie/";


interface IProps {
    movies: Array<IMovie>
    noDataMessage?: string;
    appTheme: string
}

export default function MovieList(props: IProps) {
    const { movies, noDataMessage = "No Data" , appTheme} = props

    if (!movies.length) return <h1> {noDataMessage}</h1>
    return <div className={`row justify-content-between`} style={{backgroundColor: `${appTheme}`}}>
        {movies.map((movie, ind) => { return <Movie key={movie.id + ind} {...movie} /> })}
    </div>
}  