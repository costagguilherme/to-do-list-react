import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/Lista';
import style from './app.module.scss'
import Cronometro from '../components/Cronometro';
import { ITarefa } from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAntigas => tarefasAntigas.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id
    })))
  }

  function finalizaTarefa() {
    if (selecionado) {
      setSelecionado(undefined)
      setTarefas(tarefasAntigas =>
        tarefasAntigas.map(tarefa => {
          if (tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selecionado: false,
              completado: true
            };
          }
          return tarefa;
        })
      );
    }
  }


  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Cronometro selecionado={selecionado} finalizarTarefa={finalizaTarefa} />
    </div>
  );
}

export default App;
