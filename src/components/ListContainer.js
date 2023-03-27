import React, {useEffect, useState} from 'react';
import classes from '../styles/ListContainer.module.css';
import pokedexData from '../data/pokedex.json' 
import ListComponent from './ListComponent';


const ListContainer = (props) => {
    const [pokedex, setPokedex] = useState([]); 

    useEffect(() => {
        setPokedex(pokedexData)
    },[]);

    const selectPokemon = (id) => {
        props.updateCurrentPokemon(id);
    }

    const filteredData = pokedex.filter(pokemon => {
        const nameChecker = pokemon.name.english.toLowerCase().includes(props.search.name.toLowerCase());
        const typeCheker = props.search.type === 'all' ? true : pokemon.type.includes(props.search.type);
        return nameChecker && typeCheker;
    });
    
    if (!pokedex) {
        return <div>Loading...</div>;
    }

    return (
        <div className={classes.container}>
            <ul className={classes.list}>
                {filteredData.map((data) => (
                    <ListComponent data={data} selectPokemon={selectPokemon} getFileName={props.getFileName} />
                ))}
            </ul>
        </div>
    );
}

export default ListContainer;