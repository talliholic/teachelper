import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/data")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  return (
    <div className="App">
      <h1>Data</h1>
      {data.data}
    </div>
  );
}

export default App;
