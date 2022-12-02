import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Button text="Text Inventory" className="btn-margin-4" id="btn1" />
      <Header
        logo="CAR | "
        link1="first link, "
        link2="second link, "
        link3="third link, "
        link4="fourth link, "
        className="sHeader "
        id="sHeader"
      />
      <Header
        logo="CARSTRO | "
        link1="first link, "
        link2="second link, "
        link3="third link, "
        link4="fourth link, "
        className="mlHeader"
        id="mlHeader"
      />
    </div>
  );
}

export default App;
