import Botao from "../Botao";
import Relogio  from "./Relogio";
import style from "./Cronometro.module.scss";
import Itarefa from "../../types/tarefa";
import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../comoon/utils/date";

interface Props {
    selecionado: Itarefa | undefined, finalizarTarefa: () => void
}

export function Cronometro({ selecionado, finalizarTarefa }: Props) {
    const [tempo, setTempo] = useState<number>();
    useEffect(() => {
        if(selecionado?.tempo) { // condição para selecionado não seja false ou  undefinid
            setTempo(tempoParaSegundos(selecionado.tempo));
        }
    }, [selecionado]);

    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if(contador > 0) {
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
            finalizarTarefa();
        }, 1000);
    }

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Botao onClick={() => regressiva(tempo)}>
                Começar
            </Botao>
        </div>
    );
}