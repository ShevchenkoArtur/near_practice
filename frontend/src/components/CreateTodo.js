import React, {useState} from 'react';

const CreateTodo = ({contract}) => {
    const [text, setText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const todo = await contract.create({text});
        setText('');
        setIsLoading(false);
    }

    return (
        <>
            <h2>Create Todo</h2>
            {
                isLoading ?
                    <h2>Loading...</h2>
                    :
                    <form onSubmit={handleSubmit}>
                        <input
                            onChange={({target}) => setText(target.value)}
                            value={text}
                            type="text"
                            placeholder='What to do...'
                        />
                        <button type='submit'>Submit</button>
                    </form>
            }
        </>
    );
};

export default CreateTodo;