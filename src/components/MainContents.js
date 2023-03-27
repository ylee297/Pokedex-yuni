import React, {useState, useEffect} from 'react';
import classes from "../styles/MainContents.module.css"
import DetailContainer from './DetailContainer';
import ListContainer from './ListContainer';


const MainContents = (props) => {
    const [currentPokemonId, setCurrentPokemonId] = useState(1); 

    const updateCurrentPokemon = (id) => {
        setCurrentPokemonId(id)
    }

    const getFileName = (id) => {
        let fileName = id + "";
        while(fileName.length < 3) {
            fileName = "0" + fileName;
        }
        return fileName
    }

    return (
        <div className={classes.container}>
            <DetailContainer currentPokemonId={currentPokemonId} getFileName={getFileName}></DetailContainer>
            <ListContainer 
                updateCurrentPokemon={updateCurrentPokemon} 
                getFileName={getFileName} 
                search={props.search}
            ></ListContainer>
        </div>
    );
}

export default MainContents;