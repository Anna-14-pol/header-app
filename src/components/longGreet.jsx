import "./longGreet.css";
import React from "react";

function LongGreet(props) {
  const { id, name } = props;

  return (
    <p id={id} className="long-greetings">
      Lorem quisquam est qui dolorem ipsum quia dolor sit amet, consectetur
      adipiscing elit, quis nulla posuere consectetur at feugiat turpis, quis
      dui malesuada, scelerisque ligula eu, commodo mauris.
    </p>
  );
}

export default LongGreet;
