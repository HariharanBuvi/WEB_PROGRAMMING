import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button> &nbsp;
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
