import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Tabs from "./components/Tabs";
import Active from "./components/Active";
import Completed from "./components/Completed";
import { nanoid } from "nanoid";
import ListElem from "./components/ListElem";

const App = () => {
  /** ============ states ============ **/

  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );

  const [todo, setTodo] = useState("");
  const [tab, setTab] = useState("all");

  /** ============ effects ============ **/

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(list));
  }, [list]);

  /** ============ handlers ============ **/

  const clickHandler = (ev) => {
    ev.preventDefault();
    if (todo.length)
      setList((oldList) => [
        ...oldList,
        { id: nanoid(), text: todo, status: "active" },
      ]);
    setTodo("");
  };

  /** ============ elems ============ **/

  const listElems = list.map((elem) => (
    <ListElem elem={elem} setList={setList} key={elem.id} />
  ));
  // console.log(list);
  return (
    <>
      <NavBar />
      <main className="flex items-center flex-col py-14">
        <Tabs setTab={setTab} />
        <div className="form-control mt-10">
          <label className="input-group">
            <input
              type="text"
              placeholder="add details"
              className="input input-bordered w-[300px]"
              value={todo}
              onChange={(ev) => setTodo(ev.target.value)}
            />
            <span className=" cursor-pointer" onClick={clickHandler}>
              Add
            </span>
          </label>
        </div>
        {tab === "active" ? (
          <Active list={list} setList={setList} />
        ) : tab === "completed" ? (
          <Completed list={list} setList={setList} />
        ) : (
          <div className="form-control mt-10 min-w-[360px]">{listElems}</div>
        )}
      </main>
    </>
  );
};

export default App;
