import "./greetings.css";
import React from "react";

function Greetings(props) {
  const { id, name } = props;

  return (
    <p id="greetings-toggle" className="greetings">
      Lorem quisquam est qui dolorem ipsum quia dolor sit amet.
    </p>
  );
}

export default Greetings;