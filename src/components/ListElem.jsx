import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const ListElem = ({ elem, setList, tab }) => {
  const [checked, setChecked] = useState(elem.status === "completed");

  const changeHandler = () => {
    setList((oldList) => {
      // return oldList.map((oldElem) => {
      //   if (elem.id === oldElem.id) {
      //     oldElem.status = checked ? "active" : "completed";
      //   }

      //   return oldElem;
      // });
      let n, el;
      const list = [...oldList];
      for (let i = 0; i < oldList.length; i++) {
        if (oldList[i].id === elem.id) {
          oldList[i].status = checked ? "active" : "completed";
          n = i;
          el = oldList[i];
        }
      }
      list.splice(n, 1);
      list.unshift(el);
      // console.log(list);
      return list;
    });
    setChecked(!checked);
  };

  const clickHandler = () => {
    setList((oldList) => oldList.filter((oldElem) => elem.id !== oldElem.id));
  };

  return (
    <label className="label cursor-pointer" key={elem.id}>
      <div className="flex items-center">
        <input
          type="checkbox"
          className={"checkbox checkbox-md mr-4"}
          checked={checked}
          onChange={changeHandler}
        />
        <span className="label-text text-lg">
          {checked ? <del>{elem.text}</del> : elem.text}
        </span>
      </div>
      {checked && tab === "completed" ? (
        <FontAwesomeIcon
          icon={faTrashCan}
          className=" text-red-500 text-xl"
          onClick={clickHandler}
        />
      ) : null}
    </label>
  );
};

export default ListElem;
