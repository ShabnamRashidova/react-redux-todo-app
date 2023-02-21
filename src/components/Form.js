import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAsync } from "../features/todoSlice";
import Loading from "./Loading";
import Error from "./Error";
const Form = () => {
  const [title, setTitle] = useState("");
  const addNewTodoLoading=useSelector(state=>state.todos.addNewTodoLoading);
  const addNewTodoError=useSelector(state=>state.todos.addNewTodoError);
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return;
    await dispatch(addTodoAsync({ title }));
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
      />
    {addNewTodoLoading&&<Loading/>}  
    {addNewTodoError&&<Error/>}  
    </form>
  );
};

export default Form;
