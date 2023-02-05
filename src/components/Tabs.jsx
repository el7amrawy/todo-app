import { useEffect } from "react";

const Tabs = ({ setTab, tab }) => {
  /** ============ funcs ============ **/

  const activeTab = (status) => {
    const tabElems = document.querySelectorAll("div.tabs a.tab");
    tabElems.forEach((elem) => {
      if (elem.innerText.toLocaleLowerCase() === status) {
        elem.classList.add("tab-active");
      } else {
        elem.classList.remove("tab-active");
      }
    });
  };

  /** ============ effects ============ **/

  useEffect(() => {
    activeTab(tab);
  }, []);

  /** ============ handlers ============ **/

  const clickHandler = (ev) => {
    const status = ev.target.innerText.toLocaleLowerCase();
    activeTab(status);
    setTab(status);
  };

  return (
    <div className="tabs">
      <a className="tab tab-lg tab-bordered" onClick={clickHandler}>
        All
      </a>
      <a className="tab tab-lg tab-bordered" onClick={clickHandler}>
        Active
      </a>
      <a className="tab tab-lg tab-bordered" onClick={clickHandler}>
        Completed
      </a>
    </div>
  );
};

export default Tabs;
