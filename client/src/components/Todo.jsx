import { useEffect, useState } from "react";

import { toggleTodo, updateTodo } from "../redux/actions";
import { deleteTodo } from "../redux/actions";

import { useDispatch } from "react-redux";
import { LuUnderline } from "react-icons/lu";

const Todo = ({ todo }) => {
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(todo?.title);
    const [description, setdescription] = useState(todo?.description);
    const [status, setStatus] = useState(todo?.status);
    const dispatch = useDispatch();
     
    
    const onFormSubmit = (e) => {
        e.preventDefault();
        setEditing(prevState => !prevState);
        const id=todo._id;
        dispatch(updateTodo({id,text,description,status}));
    }
  

    
    const onchangeupdate=async (e)=>
    {
        setStatus(prevStatus => e.target.value);
        const id=todo._id;
        await dispatch(updateTodo({id,text,description,status:e.target.value}));

        window.location.reload();
    }

    return (
        <li
            className="task"
            onClick={() => dispatch(toggleTodo(todo._id))}
            style={{
                textDecoration: todo?.done ? 'line-through' : '',
                color: todo?.done ? '#bdc3c7' : '#34495e'
            }}
            data-testid="todo-test"
        >
            <span className="todo-text">
            <label htmlFor="status">Status: </label>
            <select name="status" id="status" value={status} onChange={onchangeupdate}>
            <option value="TODO">Todo</option>
            <option value="In progress">In Progress</option>
            <option value="done">Done</option>
            </select>
            <br></br>
            <span className="todo-title"><span className="title_desc">Title:</span> {todo?.title}</span><br></br>
            <span className="todo-title"><span className="title_desc">Description:</span> {todo?.description}</span>
            </span>
            

            <form
                style={{ display: editing ? 'inline' : 'none' }}
                onSubmit={onFormSubmit}
            >
                <input
                    type="text"
                    value={text}
                    className="edit-todo"
                    onChange={(e) => setText(e.target.value)}
                />
                <input
                    type="text"
                    value={description}
                    className="edit-todo"
                    onChange={(e) => setdescription(e.target.value)}
                /><br></br>
                <button onClick={onchangeupdate} style={{marginTop:10 ,width:100,height:30,fontWeight:"bold"}}>Edit</button>
            </form>

            <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}>
                <i className="fas fa-trash" />
            </span>
            <span className="icon" onClick={() => setEditing(prevState => !prevState)}>
                <i className="fas fa-pen" />
            </span>
        </li>
    )
}

export default Todo;





