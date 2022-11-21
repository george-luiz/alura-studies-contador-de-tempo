import React from "react";
import style from "./Botao.module.scss";

interface Iprop {
    children?: React.ReactNode,
    type?: "button" | "submit" | "reset" | undefined, onClick?: () => void,
}

function Botao({ onClick, type, children }: Iprop) {
    return (
        <button onClick={onClick} type={type} className={style.botao}>
            {/*pegando a props atraves do this */}
            {children}
        </button>
    );
}

export default Botao;