import React from "react";

export default function Child({ valueOfprops, ChangeName }) {
  return (
    <div>
      <h1>{valueOfprops} </h1>
      <button onClick={() => ChangeName("WelCome React Developer")}>
        Change Name
      </button>
    </div>
  );
}
