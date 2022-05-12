import { toBeChecked } from '@testing-library/jest-dom/dist/matchers';
import {useState} from 'react';


const Form = (props) => {
    const [input, setInput] = useState("");

    const createTask = (e) => {
        e.preventDefault();
        console.log(input);
        const newTask = {name: input, completed: false};
        props.addTask(newTask);
        setInput("");
    }

    return(
        <form onSubmit={createTask}>
            <p>
                {JSON.stringify(input)}
            </p>
            <input onChange={(e) => setInput (e.target.value)} value={input} />
            <button>Add Task</button>
        </form>
    )

}
export default Form