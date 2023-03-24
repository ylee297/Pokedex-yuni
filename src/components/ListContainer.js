import React, {useEffect, useState} from 'react';
import classes from '../styles/ListContainer.module.css';
import { getPokedex } from '../api/api';
import data from '../data/pokedex.json'

const ListContainer = () => {
    const [pokedex, setPokedex] = useState(); 

    useEffect(() => {
        setPokedex(data)
    }, []);

    
    if (!pokedex) {
        return <div>Loading...</div>;
    }

    return (
        <div className={classes.container}>
            <ul>
                {pokedex.map((data) => {
                    <li>{data.id}</li>
                })}
            </ul>
        </div>
    );
}

export default ListContainer;