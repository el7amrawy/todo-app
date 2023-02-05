import ListElem from "./ListElem";

const Active = ({ list, setList, tab }) => {
  /** ============ elems ============ **/

  const activeListElems = list.map((elem) => {
    if (elem.status === "active")
      return <ListElem elem={elem} key={elem.id} setList={setList} tab={tab} />;
  });

  return (
    <div className="form-control mt-10 min-w-[360px] px-3">
      {activeListElems}
    </div>
  );
};

export default Active;
