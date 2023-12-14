import "./App.css";

function App() {
  let name = "react-name";
  let className = "App-header";
  return (
    <div className="App">
      <div className={className}>
        {name}
        <Demo />
      </div>
    </div>
  );
}

function Demo() {
  return (
    <div className="App">
      <div className="App-header">demo</div>
    </div>
  );
}

export default App;
