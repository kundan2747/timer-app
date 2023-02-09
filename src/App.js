import Counter from "./components/counter";
import { useState } from "react";

function App() {
  const [app, setApp] = useState("timer");
  return (
    <div className="App">
      <div>
        <h1 style={{ textAlign: "center" }}>Timer App</h1>
      </div>
      <Counter setApp={setApp} app={app} />
    </div>
  );
}

export default App;
