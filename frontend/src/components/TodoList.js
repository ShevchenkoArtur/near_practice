import React, {useEffect, useState} from 'react';
import Todo from "./Todo";
import PropTypes from "prop-types";

const TodoList = ({contract}) => {
    const LIMIT_PER_PAGE = 5;
    const [todos, setTodos] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        let offset;
        if (page <= 1) {
            setPage(1);
            offset = 0;
        } else {
            offset = (page - 1) * LIMIT_PER_PAGE;
        }

        (async () => {
           const res = await contract.getTodos({offset, limit: LIMIT_PER_PAGE});
            setTodos(res)
        })()
    }, [page, contract]);

    return (
        <div>
            <h3>Current page {page}</h3>
            <button onClick={() => setPage(prev => prev - 1)}>&lt;</button>
            <button onClick={() => setPage(prev => prev + 1)}>&gt;</button>
            <ul>
                {
                    todos.map(todo =>  <li key={todo.id}><Todo contract={contract} todo={todo}/></li>)
                }
            </ul>
        </div>
    );
};

TodoList.propTypes = {
    contract: PropTypes.shape({
        getTodos: PropTypes.func.isRequired
    }).isRequired
}

export default TodoList;