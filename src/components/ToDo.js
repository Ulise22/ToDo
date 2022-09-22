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
        auxList.splice(auxList.indexOf(auxItem), 1);
        setList(auxList);
    }


    return(
        <div className="row">

            <h1 className="text-center mt-2">To Do App!</h1>

            <form className="col-12 input-group mt-2" onSubmit={handleSubmit}>
                <input type="text" placeholder="Tap to Write a Task!" value={item} onChange={handleChange} className="form-control" />
                <button type="submit" className="btn btn-success">Submit</button>
            </form>

            <div className="col-12 d-flex flex-column ">
                {
                    list.map((itemList) => {
                        return (
                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mx-auto" key={itemList.id} >
                                <TodoItem  itemList={itemList} changeValue={changeValue} deleteItem={deleteItem} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ToDo;