import React, {useState} from "react";
import TodoItem from "./TodoItem";

const ToDo = () => {
    const [item, setItem] = useState("");
    const [list, setList] = useState([]);

    const handleChange = (e) => {
        e.preventDefault();

        setItem(e.target.value);
    } 

    const handleSubmit = (e) => {
        e.preventDefault();

        const listItem = {
            id: crypto.randomUUID(),
            title: item
        }

        const auxList = list;
        auxList.push(listItem);
        setList(auxList);
        setItem("");
    }

    const changeValue = (id, newValue) => {
        const auxList = list;
        const auxItem = auxList.find( (auxItem) => auxItem.id === id);
        auxItem.title = newValue;
        setList(auxList);
    }

    const deleteItem = (id) => {
        const auxList = list;
        const auxItem = list.find((e) => e.id === id);
        const listSplice = auxList.splice(auxList.indexOf(auxItem), 1);
        console.log(listSplice);
        console.log(auxList);
        setList(auxList);
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={item} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>

            {
                list.map((itemList) => {
                    return <TodoItem key={itemList.id} itemList={itemList} changeValue={changeValue} deleteItem={deleteItem} />
                })
            }
        </div>
    )
}

export default ToDo;