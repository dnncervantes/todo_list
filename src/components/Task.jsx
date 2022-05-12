// import {useState} from 'react';

const Task = (props) => {


return(
    <div>
        {
            props.toDo.map((task, idx) => {
                return(
                    <div key={idx} style={{textDecoration: task.completed ? "line-through" : ""}}>
                        {task.name } 
                        <input type="checkbox" checked={task.completed} onChange={() => props.updateTask(idx)}/>
                        <button onClick={() => props.deleteToDo(idx)}>Delete</button>
                    </div>
                ) 
            })
        }
    </div>
);

}
export default Task;