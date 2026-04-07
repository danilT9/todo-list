export const InfoTodo = ({total, completed}) => {
    return (
        <ul style={{listStyle: "none", textAlign: "center"}}>
            <li>Всього: {total}</li>
            <li>Виконано: {completed}</li>
        </ul>
    )
}