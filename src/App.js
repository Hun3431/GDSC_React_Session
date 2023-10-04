import { useState } from "react";

const App = () => {
  const [log, setLog] = useState([]);

  return (
    <div>
      <DiceLogComponent log={log} />
      <DiceComponent log={log} setLog={setLog} />
    </div>
  );
};

const DiceLogComponent = (props) => {
  return (
    <div>
      Log:
      {props.log.map((value, index) => {
        return <span>{value} </span>;
      })}
    </div>
  );
};

const DiceComponent = (props) => {
  return (
    <div>
      <h1>주사위 컴포넌트</h1>
      <button
        onClick={() => {
          const num = Math.floor(Math.random() * 6 + 1);
          alert(num);

          const newLog = [...props.log];
          newLog.push(num);
          props.setLog(newLog);
        }}
      >
        클릭!
      </button>
    </div>
  );
};

export default App;
