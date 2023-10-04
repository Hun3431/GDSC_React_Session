const App = () => {
  const log = [3, 5, 1, 4, 6];

  return (
    <div>
      <DiceLogComponent log={log} />
      <DiceComponent />
    </div>
  );
};

const DiceLogComponent = (props) => {
  return (
    <div>
      {props.log.map((value, index) => {
        return <span>{value} </span>;
      })}
    </div>
  );
};

const DiceComponent = () => {
  return (
    <div>
      <h1>주사위 컴포넌트</h1>
      <button
        onClick={() => {
          const num = Math.floor(Math.random() * 6 + 1);
          alert(num);
        }}
      >
        클릭!
      </button>
    </div>
  );
};

export default App;
