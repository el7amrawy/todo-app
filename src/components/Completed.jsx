import ListElem from "./ListElem";

const Completed = ({ list, setList }) => {
  /** ============ elems ============ **/

  const completedListElems = list.map((elem) => {
    if (elem.status === "completed")
      return <ListElem elem={elem} setList={setList} key={elem.id} />;
  });

  return (
    <div className="form-control mt-10 min-w-[360px]">
      {completedListElems}
      {list.length ? (
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
