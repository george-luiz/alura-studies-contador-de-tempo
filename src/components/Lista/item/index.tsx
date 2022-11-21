import style from "./Item.module.scss";
import Itarefa from "../../../types/tarefa";

interface Props extends Itarefa {
    selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}

function Item({ tarefa, tempo, selecionado, completado, id, selecionaTarefa }: Props) {

    return (
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ""}`} onClick={() => selecionaTarefa({
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