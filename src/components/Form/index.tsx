import React, { useState } from 'react';
import Button from '../Button';
import style from './Form.module.scss';
import { ITarefa } from '../../types/tarefa';
import { v4 as uuidvd } from 'uuid';

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Form( {setTarefas} : Props) {

    const [ tarefa, setTarefa] = useState("");
    const [ tempo, setTempo] = useState("00:00");

    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        setTarefas(tarefasAntigas => [
            ...tarefasAntigas, { tarefa, tempo, selecionado: false, completado: false, id: uuidvd() }
        ])
        setTarefa("")
        setTempo("00:00")
    }

    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input
                    type="text"
                    name="tarefa"
                    value={tarefa}
                    id="tarefa" placeholder="O que você quer estudar"
                    onChange={evento => setTarefa(evento.target.value)}
                    required
                />
            </div>

            <div className={style.inputContainer}>

                <label htmlFor="tempo">
                    Tempo
                </label>
                <input
                    type="time"
                    step="1"
                    name="tempo"
                    value={tempo}
                    onChange={evento => setTempo(evento.target.value)}
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>
            <Button texto="Adicionar" type="submit" />
        </form>
    )
}

export default Form;