import "./App.css";
import ToggleLike from "./feature/AccountLike/LikeToggle";
import Comments from "./feature/comments/Comments";
import Counter from "./feature/counter/Counter";

function App() {
  return (
    <div className="App">
      <Counter />
      <Comments />
      <ToggleLike />
    </div>
  );
}

export default App;
