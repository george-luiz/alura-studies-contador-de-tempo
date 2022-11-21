import React from "react";
import style from "./Botao.module.scss";

interface Iprop {
    children: React.ReactNode,
    type?: "button" | "submit" | "reset" | undefined
}

class Botao extends React.Component<Iprop> {
    render() { 
        const { type = "button" } = this.props; // por não ser obrigatorio se não colocar nada no type, ficará como padrão o type "button"
        return(
            <button type={type} className={style.botao}>
                  {/*pegando a props atraves do this */}
                {this.props.children}
            </button>
        );
    }
}

export default Botao;