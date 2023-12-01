import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Views/Home/Home";
import Form from "./Components/Form/Form";
import DeletedContacts from "./Views/Deleted Contacts/DeletedContacts";
import SearchContact from "./Components/SearchContact/SearchContact";
import Detail from "./Views/Detail/Detail";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-contact" element={<Form />} />
        <Route path="/deleted-contact" element={<DeletedContacts />} />
        <Route path="/search" element={<SearchContact />} />
        <Route path="/detail/:name" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
