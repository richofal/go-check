import "./index.css";
import Logo from "./components/Logo";
import Form from "./components/Form";
import CheckList from "./components/CheckList";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="w-[100%] h-[100vh] grid custom-grid-rows ">
      <Logo />
      <Form />
      <CheckList />
      <Stats />
    </div>
  );
}

export default App;
