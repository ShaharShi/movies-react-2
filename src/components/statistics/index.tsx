import React from 'react';
import styles from './style.module.css'
import Rank from '../rank';

interface IProps {
    data: Array<Object>
    starRateNumber: number
    showPage: string
}

export default function Statistics(props: IProps) {
    const { data, starRateNumber, showPage } = props;

    const numberOfStars: Array < any > = new Array(starRateNumber).fill(true, 0)
    const releaseYear: string | number  = commonReleaseYear(data)
    const mostRated: string  = highestRank(data)
    const newestMovie: string  = oldestOrNewestMovie(data, true)
    const oldestMovie: string  = oldestOrNewestMovie(data, false)

    if(showPage.toLowerCase() !== 'statistics') return null;
    return (
        <div className={`bg-light ${styles.statisticsWrap}`}>
            <div className={`${styles.statisticsInner}`}>
                <div className={styles.statisticsItem}>
                    <h5>Number of Movies</h5>
                    <span className={styles.statisticsValue}>{data.length}</span>
                </div>
                <div className={styles.statisticsItem}>
                    <h5>The Most Common Release Year</h5>
                    <span className={styles.statisticsValue}>{releaseYear}</span>
                </div>
                <div className={styles.statisticsItem}>
                    <h5>The Most Rated Movie</h5>
                    <span className={styles.statisticsValue}>{mostRated}</span>
                </div>
                <div className={styles.statisticsItem}>
                    <h5>The Newest Movie</h5>
                    <span className={styles.statisticsValue}>{newestMovie}</span>
                </div>
                <div className={styles.statisticsItem}>
                    <h5>The Oldest Movie</h5>
                    <span className={styles.statisticsValue}>{oldestMovie}</span>
                </div>
            </div>
            <div className={`${styles.statisticsInner}`}>
                { numberOfStars.map((_, i: number) => {
                    return (
                    <div key={i} className={styles.statisticsItem}>
                        <h5><Rank stars={i + 1} paintStarOption={false}/></h5>
                        <span className={styles.statisticsValue}>{findMoviesRate(data, (i + 1))}</span>
                    </div>
                )})}
            </div>
        </div>
    )

    function commonReleaseYear(data: Array< Object >) {
        if(!data.length) return 'No Data';
        const countYears: any = data.reduce((acc: any, { Year }: any) => {
            acc[Year] = (acc[Year] || 0) + 1;
            return acc;
        }, {})
        //@ts-ignore
        const findMax: any = Math.max(...Object.values(countYears))
        return Object.keys(countYears).filter(year => countYears[year] === findMax).join()
    }
    
    function highestRank(data: Array < any >) {
        if(!data.length) return 'No Data';
        const ranks: any = data.map((movie: any) => { return movie.rank })
        const mostRatedMovie = data.filter((movie) => movie.rank === Math.max(...ranks)).map(ratedMovie => { return ratedMovie.Title})
        return mostRatedMovie[Math.floor(Math.random() * mostRatedMovie.length)]
    }
    
    function oldestOrNewestMovie(data: Array < any >, newest: boolean) {
        if(!data.length) return 'No Data';
        const arrOfYears: any = data.map(movie => { return Number(movie.Year) })
        const result = data.filter(movie => {
             return newest ? Number(movie.Year) === Math.max(...arrOfYears) : Number(movie.Year) === Math.min(...arrOfYears);
        })
        const randomNumber: number = Math.floor(Math.random() * result.length)
        return `${result[randomNumber].Title} - ${result[randomNumber].Year}`;
    }
    function findMoviesRate(data: any, i: number) {
        const numOfMovies: any = data.filter((movie: any) => movie.rank === i)
        return !numOfMovies.length ? 'No Data' : `${numOfMovies.length} Movies`;
    }

}