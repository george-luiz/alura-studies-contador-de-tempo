import Botao from "../Botao";
import Relogio  from "./Relogio";
import style from "./Cronometro.module.scss";
import Itarefa from "../../types/tarefa";
import { useState } from "react";
import { tempoParaSegundos } from "../../comoon/utils/date";

interface Props {
    selecionado: Itarefa | undefined,
}

export function Cronometro({ selecionado }: Props) {
    const [tempo, setTempo] = useState<number>();
    if(selecionado?.tempo) { // condição para selecionado não seja false ou  undefinid
        setTempo(tempoParaSegundos(selecionado.tempo));
    }

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            tempo: {tempo}
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao>
                Começar
            </Botao>
        </div>
    );
}