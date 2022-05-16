import "./App.css";
import React, { useState } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [change, setChange] = useState(false);
  const [changeID, setChangeID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      displayAlert(true, "wrong", "Nothing To Submit");
    } else if (name && change) {
      // deal with edit
    } else {
      displayAlert(true, "correct", "Added To List!");
      const newObject = { id: new Date().getTime().toString(), title: name };
      setList([...list, newObject]);
      setName("");
    }
  };

  const displayAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    displayAlert(true, "wrong", "List Cleared");
    setList([]);
  };

  const deleteThing = (id) => {
    displayAlert(true, "wrong", "Removed From List");
    setList(list.filter((thing) => thing.id !== id));
  };

  const editThing = (id) => {
    const targetThing = list.find((thing) => thing.id === id);
    setChange(true);
    setChangeID(id);
  };

  return (
    <section className="section-main">
      <form className="shopping-form" onSubmit={handleSubmit}>
        {alert.show && (
          <Alert {...alert} hideAlert={displayAlert} list={list} />
        )}
        <h3>Shopping List</h3>
        <div className="form-option">
          <input
            type="text"
            className="shopping"
            placeholder="Example... Bread"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {change ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="shopping-container">
          <List things={list} deleteThing={deleteThing} />
          <button className="clear-btn" onClick={clearList}>
            Clear List
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
