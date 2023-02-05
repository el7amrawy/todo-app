const Tabs = ({ setTab }) => {
  const clickHandler = (ev) => {
    const status = ev.target.innerText.toLocaleLowerCase();
    const tabElems = document.querySelectorAll("div.tabs a.tab");
    tabElems.forEach((elem) => {
      if (elem.innerText.toLocaleLowerCase() === status) {
        elem.classList.add("tab-active");
      } else {
        elem.classList.remove("tab-active");
      }
    });
    setTab(status);
  };

  return (
    <div className="tabs">
      <a className="tab tab-lg tab-bordered" onClick={clickHandler}>
        All
      </a>
      <a className="tab tab-lg tab-bordered tab-active" onClick={clickHandler}>
        Active
      </a>
      <a className="tab tab-lg tab-bordered" onClick={clickHandler}>
        Completed
      </a>
    </div>
  );
};

export default Tabs;
