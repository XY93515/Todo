import React from 'react';
import { useState } from "react";
import { useEffect } from 'react';
import { useDispatch,useSelector } from "react-redux";
import { searchTodo } from "../redux/actions";
import Todo from './Todo';
const SearchInput = () => {
    // const [values,setvalues]=useSearch();
    // console.log("ooo");
    const [values,setvalues]=useState("");
    const dispatch = useDispatch();
    const searchtodos= useSelector(state => state.searchtodos);
    
    useEffect(() => {
        console.log(searchtodos);
      }, [searchtodos]);

    const handleSubmit=(e)=>{ 
        e.preventDefault();
       dispatch(searchTodo({values}));
       setvalues("");
       //console.log(todos);
    }
  return (
    <div>
       <form className="d-flex" role="search"  onSubmit={handleSubmit}>
       <input className="form-control me-2" type="text" placeholder="Search" 
        onChange={(e)=>setvalues(e.target.value)} value={values}/>
       <button className="btn btn-outline-success" type="submit">Search</button>
       </form>
       <ul>
                {
                    searchtodos.map(todo => 
                (
                        <Todo 
                            key={todo._id}
                            todo={todo}
                        />
                    ))
                }
        </ul>
    </div>
  )
}



export default SearchInput
