import { useContext } from "react";
import Intro from "./components/intro/Intro";
import { ThemeContext } from "./context";
import Toggle from "./components/toggle/Toggle";


const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
    </div>
  );
};

export default App;
