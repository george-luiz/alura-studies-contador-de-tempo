import React from "react";

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
        <aside>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item) => {
                    return <li key={item.tarefa}>
                        <h3>
                            {item.tarefa}
                        </h3>
                        <span>
                            {item.tempo}
                        </span>
                    </li>
                })}
            </ul>
        </aside>
    );
}

export default Lista;