import React from 'react';
import classes from "../styles/Topbar.module.css"
import pokedexData from '../data/types.json' 
import debounce from "lodash/debounce";

const Topbar = (props) => {

    const handleSearchByName = debounce((event) => {
        props.updateSearch("name", event.target.value)
    }, 300)

    const handleSearchByTarget = (event) => {
        props.updateSearch("type", event.target.value)
    }

    return (
        <div className={classes.container}>
            <div className={classes.title}>Pokedex</div>
            <div className={classes.nameInput}>
                <input type="text" onChange={handleSearchByName}/>
                <img src="./assets/searchIcon.svg" alt="search icon" />
            </div>
            <div className={classes.selectWrapper}>
                <select className={classes.select} onChange={handleSearchByTarget}>
                    <option key="all" value="all">All</option>
                    {pokedexData.map((type) => (
                        <option key={type.english}>{type.english}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Topbar;