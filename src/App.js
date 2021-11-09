import "./App.css";
import { Search, Notes, Navbar } from "./components/index";

const App = (props) => {
  return (
    <>
      <Navbar />
      <Search />
      <Notes />
    </>
  );
};

export default App;
