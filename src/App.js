import "./App.css";
import LinkContainer from "./components/linkContainer/linkContainer";
import nithish from "./nithish.png";

function App() {
  return (
    <div className="App">
      <div className="container center dpContainer">
        <img src={nithish} className="profilePic" alt="dp" />
      </div>
      <span>
        <b>@saiNithishMucherla</b>
      </span>
      <LinkContainer />
    </div>
  );
}

export default App;
