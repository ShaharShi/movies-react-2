import React, { useState, useEffect } from 'react';
import './App.css';
import CustomHeader from './components/header';
import { data } from "./data"
import MovieList from './components/movie-list';
import { IMovie } from './components/movie';
import Button from 'react-bootstrap/Button';
import Filter from './components/filter';
import MovieForm from './components/form';

const images: Array<any> = [
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGnMVTv0j0SVGZtdxSAh2aulvySNcgLHoqwg&usqp=CAU", height: 200, width: 300 },
    { src: "https://media.wired.com/photos/5c6750d23e8add2cdb91724f/125:94/w_2393,h_1800,c_limit/shark-551025353.jpg", height: 300, width: 500 },
    { src: "", height: 200, width: 300 }
]

// create function element
function App() {
    const initialMovies: Array<any> = data;
    const initialDeletedMovies: Array<any> = []
    const [movies, setMovies] = useState(initialMovies)
    const [deletedMovies, setDeletedMovies] = useState(initialDeletedMovies)
    const [showForm, setFormVisibility] = useState(false)

    function clearMovies() {
        setMovies([])
    }
    function formVisibility() {
        setFormVisibility(showForm === true ? false : true)
    }

    function revert() {
        const deletedMoviesCopy = [...deletedMovies];
        if (!deletedMoviesCopy.length) return;
        const getLastRevertMovie = deletedMoviesCopy[0];
        deletedMoviesCopy.splice(0, 1)
        setMovies([...movies, getLastRevertMovie])
        setDeletedMovies([...deletedMoviesCopy])
    }
    function addMovie(newMovieObject: Object) {
        setMovies([newMovieObject, ...movies])
    }

    function deleteMovie(moovieId: string): void {
        const moviesCopy = [...movies]
        const [index, m] = getMoviesData()
        moviesCopy.splice(index, 1);
        setMovies(moviesCopy)
        setDeletedMovies([...deletedMovies, m])
        function getMoviesData(): Array<any> {
            const index = movies.findIndex(m => m.imdbID === moovieId);
            const movie = movies.find(m => m.imdbID === moovieId);
            return [index, movie]

        }
    }

    function filterOperation(value: string) {
        if (!value) return setMovies(data);
        const filteredMovies = movies.filter(movie => movie.Title.toLowerCase().includes(value))
        setMovies(filteredMovies)
    }
    return <div className="container">

        <CustomHeader style={{ color: "green" }} text={"Movies"} />
        <div className="row">
            <div className={"col"}>
                <Filter filterOperation={filterOperation} />
            </div>
            <div className={"col text-right"}>
                <Button onClick={clearMovies} > Clear Movies</Button>
                <Button onClick={formVisibility} > Add movie</Button>
                <Button onClick={revert} > Revert</Button>
            </div>
        </div>
        <div className="row">
            <MovieForm showForm={showForm} newMovie={addMovie}></MovieForm>
        </div>
        <MovieList noDataMessage="No Data for you friend" movies={moviesAdapter(movies)} />
    </div>

    function moviesAdapter(movies: Array<any>): Array<IMovie> {
        return movies.map((movie: any) => {
            const { Title, Year, rank, Poster, imdbID, Type } = movie;
            return { deleteMovie, baseAdditionalInfoUrl: "http://imdb.com/title", title: Title, year: Year, poster: Poster, type: Type, id: imdbID, rate: rank }
        })
    }

}

export default App;
