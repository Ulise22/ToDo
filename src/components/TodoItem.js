import React, {useState} from "react";

const TodoItem = (props) => {
    const [isEditing, setIsEditing] = useState(false);    

    const Item = () => {

        const handleDelete = () => {
            
            props.deleteItem(props.itemList.id);
        }

        return(
            <div className="d-flex gap-3 mt-2 border-bottom py-3 px-2 justify-content-between">
                <h2>{props.itemList.title}</h2>
                <div className="d-flex gap-1 align-items-center">
                    <button onClick={() => setIsEditing(true)} className="btn btn-warning">Edit</button>
                    <button onClick={handleDelete} className="btn btn-danger">Delete</button>
                </div>
            </div>
        )
    }

    const EditedItem = () => {
        const [newValue, setNewValue] = useState(props.itemList.title);

        const handleSubmit = (e) => {
            e.preventDefault();
    
            props.changeValue(props.itemList.id, newValue);
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
            {isEditing ? <EditedItem /> : <Item />}
        </div>
    )
}

export default TodoItem;