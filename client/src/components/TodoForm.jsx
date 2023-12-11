import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/actions";
import SearchInput from "./SearchInput";
import "../Todos12.css";

const TodoForm = () => {
  const [text, setText] = useState("");
  const [description, setdescription] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewTodo({ text, description }));
    setText('');
    setdescription('');
  }

  const onInputChangetitle = (e) => {
    setText(e.target.value);
  }

  const onInputChangedesc = (e) => {
    setdescription(e.target.value);
  }

  return (
    <>
    <SearchInput/>
    <form className="form" onSubmit={onFormSubmit}>
      <input
        placeholder="Enter title for new todo..."
        className="input"
        onChange={onInputChangetitle}
        value={text}
      />
      <input
        placeholder="Enter description ..."
        className="input"
        onChange={onInputChangedesc}
        value={description}
      />
      <button type="submit" className="submit-button my-custom-button">
        Add
      </button>
    </form>
    </>
  );
}

export default TodoForm;
