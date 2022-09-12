import React, {useState} from "react";

const TodoItem = (props) => {
    const [isEditing, setIsEditing] = useState(false);    

    const Item = () => {

        const handleDelete = () => {
            
            props.deleteItem(props.itemList.id);
        }

        return(
            <div>
                <h2>{props.itemList.title}</h2>
                <button onClick={() => setIsEditing(true)}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
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
            <form onSubmit={handleSubmit}>
                <input type="text"  onChange={handleChange} value={newValue} />
                <button type="submit">Save</button>
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