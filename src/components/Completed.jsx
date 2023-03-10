import ListElem from "./ListElem";

const Completed = ({ list, setList, tab }) => {
  /** ============ elems ============ **/
  const completedList = list.filter((elem) => elem.status === "completed");
  const completedListElems = completedList.map((elem) => (
    <ListElem elem={elem} setList={setList} key={elem.id} tab={tab} />
  ));

  return (
    <div className="form-control mt-10 min-w-[360px] px-4">
      {completedListElems}
      {list.length && completedListElems.length ? (
        <div className=" mt-10 text-right">
          <button className="btn btn-error" onClick={() => setList([])}>
            delete all
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Completed;
