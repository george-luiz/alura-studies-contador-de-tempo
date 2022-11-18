import React from "react";
import style from "./Botao.module.scss";

interface Iprop {
    children: React.ReactNode
}

class Botao extends React.Component<Iprop> {
    render() {
        return(
            <button className={style.botao}>
                  {/*pegando a props atraves do this */}
                {this.props.children}
            </button>
        );
    }
}

export default Botao;