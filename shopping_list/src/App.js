import "./App.css";
import React, { useState } from "react";
import List from "./Components/List";
import Alert from "./Components/Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [change, setChange] = useState(false);
  const [changeID, setChangeID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
  };
  return (
    <section className="section-main">
      <form className="shopping-form" onSubmit={handleSubmit}>
        {alert.show && <Alert />}
      </form>
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
      <div className="shopping-container">
        <List />
        <button className="clear-btn">Clear List</button>
      </div>
    </section>
  );
}

export default App;
