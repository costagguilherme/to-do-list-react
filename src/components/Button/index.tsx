import React from 'react';
import style from './Button.module.scss'

interface Props {
    texto: string, 
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}

function Button ({texto, onClick, type}: Props) {
    return (
        <button onClick={onClick} type={type} className={style.botao}>
            {texto}
        </button>
    )
}

export default Button;