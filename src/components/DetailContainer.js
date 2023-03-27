import React, {useEffect, useState} from 'react';
import classes from "../styles/DetailContainer.module.css"
import pokedexData from '../data/pokedex.json' 

const DetailContainer = (props) => {
    const [pokemonDetail, setPokemonDetail] = useState(pokedexData[0]);

    useEffect(() => {
        setPokemonDetail(pokedexData[props.currentPokemonId - 1])
    });

    return (
        <div className={classes.container}>
            <div className={classes.detailHeader}>
                <img src={`./assets/thumbnails/${props.getFileName(pokemonDetail.id)}.png`} alt={pokemonDetail.name.english} />
                <div className={classes.detail_number}>{`No.${pokemonDetail.id}`}</div>
                <div className={classes.detail_name}>{pokemonDetail.name.english}</div>
            </div>
            <div className={classes.mainImage}>
                <img src={`./assets/thumbnails/${props.getFileName(pokemonDetail.id)}.png`} alt={pokemonDetail.name.english} />
            </div>
            <div className={classes.detail}>
                <table>
                    <tbody>
                        <tr>
                            <th>Type</th>
                            <td>{pokemonDetail.type.join(', ')}</td>
                        </tr>
                        <tr>
                            <th>HP</th>
                            <td>{pokemonDetail.base.HP}</td>
                        </tr>
                        <tr>
                            <th>Attack</th>
                            <td>{pokemonDetail.base.Attack}</td>
                        </tr>
                        <tr>
                            <th>Defense</th>
                            <td>{pokemonDetail.base.Defense}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DetailContainer;