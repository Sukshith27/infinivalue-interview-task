import React, { useEffect, useState } from 'react';
import '../App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import Header from '../components/header';
import { Information } from './information';
import { Title } from './titleScreen';
import data from '../feed/sample.json'
import { Spacer } from '../components/spacer';
import { Link } from 'react-router-dom';



const Home = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [screen, setScreen] = useState('titles');
    const { entries } = data;
    const title = ['series', 'movie']

    useEffect(() => {
        fetch(entries)
            .then(response => response.json())
            .then(jsonResponse => {
                setMovies(jsonResponse.Search);
                setLoading(false);
            });
    }, []);

    return (
        <div className="App">
            {
                loading &&
                <Spinner />
            }
            <Header text="DEMO Streaming" />
            <div className="header-button">
                <button name="login" className="login-button">Log in</button>
                <Spacer />
                <button name="start_trail" className="start-trail-button">Start your free trail</button>
            </div>
            <p className="sub-header">Popular {screen}</p>
            {
                screen === 'movie' ?
                <Information data={entries.filter((x) => x.programType === 'movie')} />
                    :
                    screen === 'series' ?
                        <Information data={entries.filter((x) => x.programType === 'series')} redirect={screen} />
                        :
                        <Title data={title} screen={setScreen}/>
            }
        </div>
    );
};

export default Home;