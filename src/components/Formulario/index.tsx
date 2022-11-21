import React, { useState } from "react";
import Itarefa from "../../types/tarefa";
import Botao from "../Botao";
import style from "./Formulario.module.scss";
import { v4 as uuidv4 } from "uuid";

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>

}

function Formulario({ setTarefas }: Props) {
    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00");


    function adicionarTarefa(event: React.FormEvent<HTMLFormElement>) { // tipagem do event
        event.preventDefault();
        setTarefas((tarefasAntigas) =>
            [
                ...tarefasAntigas,
                {
                    tarefa,
                    tempo,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        );
        setTarefa("");
        setTempo("00:00");
    }

    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                {/* htmlFor: irá linkar com o input pelo id */}
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input
                    type="text"
                    name="tarefa" id="tarefa"
                    value={tarefa}
                    onChange={(event) => {
                        setTarefa(event.target.value)
                    }}
                    placeholder="O que você quer estudar"
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input
                    type="time"
                    step={1}
                    name="tempo"
                    id="tempo"
                    value={tempo}
                    onChange={(event) => setTempo(event.target.value)}
                    min="00:00:00"
                    max="01:30:00" required
                />
            </div>
            <Botao type="submit">
                Adicionar
            </Botao>

        </form>
    );
} 

export default Formulario;