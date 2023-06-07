import React, { useState } from "react";
import "./styles.css";
import Child from "./Child";
export default function App() {
  const [name, setName] = useState("Ranjeet");
  const ChangeName = (value) => {
    console.log(value);
    setName(value);
  };
  return (
    <div className="App">
      <Child valueOfprops={name} ChangeName={ChangeName} />
    </div>
  );
}
