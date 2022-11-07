import React, {useState} from "react";

const TodoTask = (props) => {
    const [isEditing, setIsEditing] = useState(false);    

    const Task = () => {

        const handleDelete = () => props.deleteTask(props.taskList.id);

        const handleEdit = () => setIsEditing(true);

        return(
            <div className="d-flex gap-3 mt-2 border-bottom py-3 px-2 justify-content-between">
                <h2>{props.taskList.title}</h2>
                <div className="d-flex gap-1 align-tasks-center">
                    <button onClick={handleEdit} className="btn btn-warning">Edit</button>
                    <button onClick={handleDelete} className="btn btn-danger">Delete</button>
                </div>
            </div>
        )
    }

    const EditedTask = () => {
        const [newValue, setNewValue] = useState(props.taskList.title);

        const handleSubmit = (e) => {
            e.preventDefault();
    
            props.changeValue(props.taskList.id, newValue);
            setIsEditing(false);
        }
    
        const handleChange = (e) => {
            e.preventDefault();
    
            setNewValue(e.target.value);
        }

        return(
            <form onSubmit={handleSubmit} className="input-group mt-2">
                <input type="text"  onChange={handleChange} value={newValue} />
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        )
    }

    return(
        <div>
            {isEditing ? <EditedTask /> : <Task />}
        </div>
    )
}

export default TodoTask;