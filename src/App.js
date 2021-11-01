import "./App.css";
import {useState} from "react";
import {useEffect} from "react";

function App() {
  const [count, increment] = useState(1);

  const update = () => {
    increment((count) => count += 1);
    console.log(count);
  }

const titleChange = useEffect(() => {
      document.title = "Count (" + count + ")";
    })

  return (
    <div className="App">
        <button onClick={update} OncChange={titleChange}>Count ({count})</button>
    </div>
  );
}

export default App;
