import { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onclickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히 가세요!");
  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onclickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록색
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파란색
      </button>
      <button style={{ color: "orange" }} onClick={() => setColor("orange")}>
        주황색
      </button>
      <button style={{ color: "yellow" }} onClick={() => setColor("yellow")}>
        노랑색
      </button>
      <button style={{ color: "purple" }} onClick={() => setColor("purple")}>
        보라색
      </button>
      <button style={{ color: "white" }} onClick={() => setColor("white")}>
        하얀색
      </button>
      <button style={{ color: "black" }} onClick={() => setColor("black")}>
        검은색
      </button>
    </div>
  );
};

export default Say;
