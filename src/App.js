import './App.css';
import Task from './components/Task';
import Form from './components/Form';
import {useState} from 'react';



function App() {

  const [toDo, setToDo] = useState([
    {name: "Get MERN red belt.", completed: true},
    {name: "Wash clothes.", completed: false}
]);
  //=======Create new task==========
  const addTask = (newTask) => {
    const copyToDo = [...toDo]
    copyToDo.push(newTask);
    setToDo(copyToDo);
  }

  //======Change the Checkbox=========
  const updateTask = (idx) => {
    console.log(idx);

    const copyToDo = [...toDo];
    if(copyToDo[idx].completed === true) {
      copyToDo[idx].completed = false;
    } else {
      copyToDo[idx].completed = true;
    }
    setToDo(copyToDo);
  }
  //==========Delete toDo Task=============
  const deleteToDo = (idx) => {
    console.log(idx)
    const filteredToDo = toDo.filter( (task, i) => {
      if(i === idx) {
        return false;
      } else {
        return true;
      }
    });
    // const filteredToDo2 = toDo.filter((task, i) i === idx);
    setToDo(filteredToDo);
  }


  return (
    <div className="App">
      {JSON.stringify(toDo)}
      <Form addTask = {addTask} />
      <hr/>
      <Task toDo = {toDo} updateTask = {updateTask} deleteToDo = {deleteToDo}/>
    </div>
  );
}

export default App;
