import style from "./TodoList.module.css";

export const TodoList = ({todos, onDelete, toggleTodo}) => {
    return(
        <ul>
            {todos.map(t => (
                <li key={t.id} className={style.element}>
                    <p>{t.text}</p>
                    <input type="checkbox" checked={t.completed} onChange={() => toggleTodo(t.id)}/>
                    <button onClick={() => onDelete(t.id)}>X</button>
                </li>
            ))}
        </ul>
    )
}