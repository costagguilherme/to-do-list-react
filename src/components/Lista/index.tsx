import style from './Lista.module.scss'
import Item from './Item';
import { ITarefa } from '../../types/tarefa';


interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function List({ tarefas, selecionaTarefa }: Props) {

    return (
        <aside className={style.listaTarefas}>
            <h2>
                Estudos do dia
            </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={item.id} 
                        id={item.id} 
                        tarefa={item.tarefa} 
                        tempo={item.tempo} 
                        completado={item.completado} 
                        selecionado={item.selecionado} 
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;