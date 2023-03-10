import React from "react";
import TodoList from "./TodoList";
import ContentFooter from './ContentFooter'
const Content = () => {
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <TodoList/>
      <ContentFooter/>
    </section>
  );
};
export default Content;
