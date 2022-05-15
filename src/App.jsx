import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Home from "./Pages/Home/Home";
import Person from "./Pages/Person/Person";
import Popular from "./Pages/Popular/Popular";
import SingleMovie from "./Pages/SingleMovie/SingleMovie";
import UpComing from "./Pages/UpComing/UpComing";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Popular" element={<Popular/>}/>
        <Route path="/up-coming" element={<UpComing/>}/>
        <Route path="/Popular/:id" element={<SingleMovie/>}/>
        <Route path="/Person/:id" element={<Person/>}/>
      </Routes>
    </div>
  );
}

export default App;
