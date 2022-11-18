import React from "react";
import Item from "./item";
import style from "./Lista.module.scss";

const tarefas = [
    {
        tarefa: "React",
        tempo: "02:00:00",
    },
    {
        tarefa: "Javascript",
        tempo: "01:30:00",
    },
    {
        tarefa: "Typescript",
        tempo: "00:30:00",
    },
];

function Lista() {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item) => {
                    return <Item key={item.tarefa} tarefa={item.tarefa} tempo={item.tempo} />
                })}
            </ul>
        </aside>
    );
}

export default Lista;