import "./App.css";
import { getCatsFetch } from "./reduxTool/catState";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const cats = useSelector((state) => state.cats.cats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsFetch()); // Correctly dispatch the action
  }, [dispatch]);

  console.log(cats);

  return (
    <div className="App">
      <h1>Cat Breeds</h1>
      <ul>
        {cats.map((cat, index) => (
          <li key={index}>{cat.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
