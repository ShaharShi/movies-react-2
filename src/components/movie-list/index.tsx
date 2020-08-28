import React, { Component } from "react"
import Movie, { IMovie } from "../movie/";


interface IProps {
    movies: Array<IMovie>
    noDataMessage?: string;
    appTheme: string;
    showPage: string
}

export default class MovieList extends Component < IProps > {

    render() {
        if (this.props.showPage.toLowerCase() !== 'movies') return null;
        if (!this.props.movies.length) return <h1> {this.props.noDataMessage || "No Data Found"}</h1>
        return (
        <div className={`row justify-content-between`} style={{backgroundColor: `${this.props.appTheme}`}}>
            {this.props.movies.map((movie, ind) => { return <Movie key={movie.id + ind} {...movie} /> })}
        </div>
        )
    }
}