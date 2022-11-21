import style from "../Lista.module.scss";
import Itarefa from "../../../types/tarefa";

interface Props extends Itarefa {
    selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}

function Item({ tarefa, tempo, selecionado, completado, id, selecionaTarefa }: Props) {
    console.log("item atual: ", { tarefa, tempo, selecionado, completado, id });

    return (
        <li className={style.item} onClick={() => selecionaTarefa({
            tarefa,
            tempo,
            selecionado,
            completado,
            id,
        })}>
            <h3>
                {tarefa}
            </h3>
            <span>
                {tempo}
            </span>
        </li>
    )
}

export default Item;