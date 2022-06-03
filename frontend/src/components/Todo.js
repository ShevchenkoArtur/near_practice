import React, {useState} from 'react';
import PropTypes from "prop-types";

const Todo = ({contract, todo}) => {
    const [isDone, setIsDone] = useState(todo.done);

    const complete = async ({target}) => {
        setIsDone(target.checked);
        await contract.getByIdAndUpdate({id: todo.id, dto: {done: target.checked, text: todo.text}});
    }

    const handleDelete = async () => {
        await contract.del({id: todo.id});
    }

    return (
        <div>
            <input
                onChange={complete}
                type="checkbox"
                checked={isDone}
            />
            <span>{todo.text}</span>
            <button onClick={handleDelete}>delete</button>
        </div>
    );
};

Todo.propTypes = {
    contract: PropTypes.shape({
        getByIdAndUpdate: PropTypes.func.isRequired,
        del: PropTypes.func.isRequired
    }).isRequired,
    todo: PropTypes.shape({
        text: PropTypes.string,
        id: PropTypes.number.isRequired,
        done: PropTypes.bool.isRequired,
    }).isRequired
};

export default Todo;