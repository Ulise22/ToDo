import React, {useState} from "react";
import TodoTask from "./TodoTask";

const ToDo = () => {
    const [task, setTask] = useState("");
    const [list, setList] = useState([]);

    const handleChange = (e) => {
        e.preventDefault();

        setTask(e.target.value);
    } 

    const handleSubmit = (e) => {
        e.preventDefault();

        const listTask = {
            id: crypto.randomUUID(),
            title: task
        }

        const auxList = list;
        auxList.push(listTask);
        setList(auxList);
        setTask("");
    }

    const changeValue = (id, newValue) => {
        const auxList = list;
        const auxTask = auxList.find( (auxTask) => auxTask.id === id);
        auxTask.title = newValue;
        setList(auxList);
    }

    const deleteTask = (id) => {
        const auxList = list;
        const auxTask = list.find((e) => e.id === id);
        const cleanList = auxList.filter((e) => e !== auxTask);
        setList(cleanList);
    }


    return(
        <div className="row">

            <h1 className="text-center mt-2">To Do App!</h1>

            <form className="col-12 input-group mt-2" onSubmit={handleSubmit}>
                <input type="text" placeholder="Tap to Write a Task!" value={task} onChange={handleChange} className="form-control" />
                <button type="submit" className="btn btn-success">Submit</button>
            </form>

            <div className="col-12 d-flex flex-column ">
                {
                    list.map((taskList) => {
                        return (
                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mx-auto" key={taskList.id} >
                                <TodoTask  taskList={taskList} changeValue={changeValue} deleteTask={deleteTask} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ToDo;