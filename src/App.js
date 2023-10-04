const App = () => {
  return (
    <div>
      <MyComponent title="Component" />
      <MyComponent title="Props" />
      <MyComponent title="React" />
    </div>
  );
};

const MyComponent = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <div>부모 컴포넌트에서 넣어주는 속성에 따라 제목이 달라져요!!</div>
    </div>
  );
};

export default App;
