import { useState } from "react";
import DarkModeSlider from "./components/DarkModeSlider";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="dark:bg-black">
        <DarkModeSlider toggleDarkMode={setDarkMode} darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
