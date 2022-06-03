import React from 'react';
import PropTypes from "prop-types";

const Todo = ({contract, todo}) => {
    return (
        <div>
            <p>{todo.text}</p>
        </div>
    );
};

Todo.propTypes = {
    contract: PropTypes.shape({}).isRequired,
    todo: PropTypes.shape({
        text: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        done: PropTypes.bool.isRequired,
    }).isRequired
};

export default Todo;