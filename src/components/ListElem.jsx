import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const ListElem = ({ elem, setList }) => {
  const [checked, setChecked] = useState(elem.status === "completed");

  const changeHandler = (ev) => {
    setList((oldList) => {
      return oldList.map((oldElem) => {
        if (elem.id === oldElem.id) {
          oldElem.status = checked ? "active" : "completed";
        }

        return oldElem;
      });
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
      {checked ? (
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
