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
  const [tab, setTab] = useState(localStorage.getItem("tab") || "all");
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  /** ============ effects ============ **/

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(list));
  }, [list]);

  // useEffect(() => {
  //   const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  //   if (darkThemeMq.matches) {
  //     document.documentElement.setAttribute("data-theme", "dark");
  //   } else {
  //     document.documentElement.setAttribute("data-theme", "winter");
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "winter");
    } else {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      if (darkThemeMq.matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("tab", tab);
  }, [tab]);

  /** ============ handlers ============ **/

  const clickHandler = (ev) => {
    ev.preventDefault();
    if (todo.length)
      setList((oldList) => [
         { id: nanoid(), text: todo, status: "active" },
         ...oldList,
      ]);
    setTodo("");
  };

  /** ============ elems ============ **/

  const listElems = list.map((elem) => (
    <ListElem elem={elem} setList={setList} key={elem.id} tab={tab} />
  ));

  return (
    <>
      <NavBar theme={theme} setTheme={setTheme} />
      <main className="flex items-center justify-center flex-col py-14">
        <Tabs setTab={setTab} tab={tab} />
        {tab === "all" || tab === "active" ? (
          <div className="form-control mt-10">
            <label className="input-group">
              <input
                type="text"
                placeholder="add details"
                className="input input-bordered min-w-[280px] max-w-[60vw]"
                value={todo}
                onChange={(ev) => setTodo(ev.target.value)}
              />
              <span className=" cursor-pointer" onClick={clickHandler}>
                Add
              </span>
            </label>
          </div>
        ) : null}
        {tab === "active" ? (
          <Active list={list} setList={setList} tab={tab} />
        ) : tab === "completed" ? (
          <Completed list={list} setList={setList} tab={tab} />
        ) : (
          <div className="form-control mt-10 min-w-[360px] px-3">
            {listElems}
          </div>
        )}
      </main>
    </>
  );
};

export default App;
