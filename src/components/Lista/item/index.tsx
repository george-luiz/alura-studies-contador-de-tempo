import style from "../Lista.module.scss";

function Item(props: { tarefa: string, tempo: string }) {
    return (
        <li className={style.item}>
            <h3>
                {props.tarefa}
            </h3>
            <span>
                {props.tempo}
            </span>
        </li>
    )
}

export default Item;