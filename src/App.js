import LeftSideBar from "./components/LeftSideBar"
import Content from "./components/Content"
import "./index.css"


function App() {
  return (
    <>
    <div className="wrapper">
    <LeftSideBar/>
    <Content/>
    </div>
    </>
  );
}

export default App;
