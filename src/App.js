// import About from "./components/About";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/Textform";
import Alert from "./components/Alert";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [toggleText, setToggleText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      typ:type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      setToggleText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
      // setInterval(() => {
        //   document.title="Install TextUtils Now!"
        // }, 2000);
        // setInterval(() => {
          //   document.title="Offer!"
          // }, 1500);
        } else {
          setMode("dark");
          setToggleText("Enable Light Mode");
          document.body.style.backgroundColor = "#1c4264";
          showAlert("Dark Mode Enabled", "success")
    }
  };

  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar
          title="TextUtils"
          aboutText="About TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          toggleText={toggleText}
        />
        <Alert alert={alert}/>
        {/* <Routes>
          <Route
            path="/"
            element={ */}
              <TextForm heading="Enter the text here to analyze" mode={mode} showAlert={showAlert}/>
            {/* }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
