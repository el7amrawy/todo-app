import ListElem from "./ListElem";

const Active = ({ list, setList }) => {
  /** ============ elems ============ **/

  const activeListElems = list.map((elem) => {
    if (elem.status === "active")
      return <ListElem elem={elem} key={elem.id} setList={setList} />;
  });

  return (
    <div className="form-control mt-10 min-w-[360px]">{activeListElems}</div>
  );
};

export default Active;
