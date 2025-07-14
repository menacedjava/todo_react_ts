import React, { useState } from 'react';

const App = () => {
    const [todos, setTodos] = useState<string[]>([]);
    const [task, setTask] = useState('');

    return (
        <div>
            <input value={task} onChange={e => setTask(e.target.value)} />
            <button onClick={() => setTodos([...todos, task])}>Add</button>
            <ul>
                {todos.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
        </div>
    );
}

export default App;
