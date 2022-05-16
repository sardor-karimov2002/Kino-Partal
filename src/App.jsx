import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Home from "./Pages/Home/Home";
import Person from "./Pages/Person/Person";
import Popular from "./Pages/Popular/Popular";
import SingleMovie from "./Pages/SingleMovie/SingleMovie";
import UpComing from "./Pages/UpComing/UpComing";
import styledComponents from "styled-components";
import Search from "./Pages/Search/Search";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Popular" element={<Popular PopularContainer={PopularContainer}/>}/>
        <Route path="/up-coming" element={<UpComing PopularContainer={PopularContainer}/>}/>
        <Route path="/Popular/:id" element={<SingleMovie/>}/>
        <Route path="/Person/:id" element={<Person/>}/>
        <Route path="/Search/:searchQuery" element={<Search PopularContainer={PopularContainer}/>}/>
      </Routes>
    </div>
  );
}

export default App;

const PopularContainer = styledComponents.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 80px;
`
// styleni  shuyerdan turib  popularga beraman propis orqali
