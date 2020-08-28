import React from 'react';
import styles from './style.module.css';
import { Film, PieChartFill } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/esm/Button';

interface IProps {
    setPageToShow: Function
}

export default function Navbar(props: IProps) {


    return (
        <div className={`bg-light ${styles.navBar}`}>
            <Button variant={'dark'} className={styles.navBar_button} onClick={() => { props.setPageToShow('movies') }}><Film/> Movies</Button>
            <Button variant={'info'} className={styles.navBar_button} onClick={() => { props.setPageToShow('statistics') }}><PieChartFill/> Statistics</Button>
        </div>
    )
}