import classes from '../styles/ListComponent.module.css';


const ListComponent = (props) => {
    return (
        <li key={props.data.id} className={classes.list_child} onClick={() => props.selectPokemon(props.data.id)}>
            <img src={`./assets/thumbnails/${props.getFileName(props.data.id)}.png`} alt={props.data.name.english} />
            <div>{`No.${props.getFileName(props.data.id)}`}</div>
            <div>{props.data.name.english}</div>
        </li>
    );
}

export default ListComponent;