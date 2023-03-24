import React from 'react';
import classes from "../styles/MainContents.module.css"
import DetailContainer from './DetailContainer';
import ListContainer from './ListContainer';

const MainContents = () => {
    return (
        <div className={classes.container}>
            <DetailContainer></DetailContainer>
            <ListContainer></ListContainer>
        </div>
    );
}

export default MainContents;