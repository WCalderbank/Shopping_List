import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./List.css";

const List = ({ things, deleteThing, editThing }) => {
  return (
    <div className="shopping-list">
      {things.map((thing) => {
        const { id, title } = thing;
        return (
          <article key={id} className="shopping-thing">
            <p className="title">{title}</p>
            <div className="btn-container">
              <button
                type="button"
                className="edit-btn"
                onClick={() => editThing(id)}
              >
                <FaEdit />
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={() => deleteThing(id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
