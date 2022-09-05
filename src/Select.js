import { useState } from "react";
import Buttons from "./Buttons";
import NumberWithImage from "./NumberWithImage";

export default function Select({ value, selectOptions, handleChange }) {
  const { name, lists } = selectOptions || {};
  const [isClicked, setClick] = useState(false);

  return (
    <div
      className={`${isClicked ? "dropdown active" : "dropdown"}`}
      key={value}
    >
      <Buttons
        handleClick={() => setClick(!isClicked)}
        classNames={`${
          isClicked ? `select bubble active` : `select bubble ${name}`
        }`}
        value={value}
        name={name}
        isRequired
      />

      {isClicked && (
        <ul className="menu">
          {lists.map((list) => (
            <li
              key={list}
              value={list}
              className={`${list === value ? "active" : ""}`}
              onClick={() => {
                handleChange(name, list);
                setClick(!isClicked);
              }}
            >
              {name === "enneagram" ? <NumberWithImage list={list} /> : list}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
