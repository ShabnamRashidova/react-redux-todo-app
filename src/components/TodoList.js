import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleTodoAsync,
  deleteTodoAsync,
  selectTodos,
  selectActiveFilter,
  getTodoAsync,
} from "../features/todoSlice";
import Loading from "./Loading";
import Error from "./Error";
let filtered = [];
const TodoList = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectTodos);
  const isLoading = useSelector((state) => state.todos.isLoading);
  const error = useSelector((state) => state.todos.error);
  const activeFilter = useSelector(selectActiveFilter);
  useEffect(() => {
    dispatch(getTodoAsync());
  }, [dispatch]);
  filtered = items;
  if (activeFilter !== "all") {
    filtered = items.filter((item) =>
      activeFilter === "active"
        ? item.completed === false && item
        : item.completed === true && item
    );
  }
  const handleToggle = async (id, completed) => {
    await dispatch(toggleTodoAsync({ id, data: {completed} }));
  };
  const handleDelete=async(id)=>{
    await dispatch(deleteTodoAsync(id))
  }
  return (
    <ul className="todo-list">
      {isLoading && <Loading />}
      {error && <Error message={error} />}
      {filtered.map((item) => (
        <li className={item.completed ? "completed" : ""} key={item.id}>
          <div className="view">
            <input
              className="toggle"
              checked={item.completed}
              type="checkbox"
              onChange={() => handleToggle(item.id, !item.completed)}
            />
            <label>{item.title}</label>
            <button
              className="destroy"
              onClick={() => handleDelete(item.id)}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default TodoList;
