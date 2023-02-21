import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveFilter ,clearCompleted,selectTodos} from "../features/todoSlice";
const ContentFooter = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector((state) => state.todos.activeFilter);
   const items=useSelector(selectTodos);
   let uncompleted=items.filter(item=>!item.completed).length
  
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{uncompleted} item{uncompleted>1?'s':''} left</strong>
      </span>
      <ul className="filters">
        <li>
          <a
            href="#3"
            className={activeFilter === "all" ? "selected" : ""}
            onClick={() => dispatch(setActiveFilter("all"))}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#3"
            className={activeFilter === "active" ? "selected" : ""}
            onClick={() => dispatch(setActiveFilter("active"))}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#3"
            className={activeFilter === "completed" ? "selected" : ""}
            onClick={() => dispatch(setActiveFilter("completed"))}
          >
            Completed
          </a>
        </li>
      </ul>
      <button className="clear-completed" onClick={()=>dispatch(clearCompleted())}>Clear completed</button>
    </footer>
  );
};

export default ContentFooter;
