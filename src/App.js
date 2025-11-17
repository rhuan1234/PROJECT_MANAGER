import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Company from "./components/pages/Company";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import NavBar from "./components/layout/NavBar";
import Projects from "./components/pages/Projects";
import Project from "./components/pages/Project";
function App() {
  return (
    <Router>
      <NavBar/>
      <Container customClass="min-heigth">
      <Routes>
        
          <Route path="/" element={<Home/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/company" element={<Company/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/newProject" element={<NewProject/>}></Route>
          <Route path="/Project/:id" element={<Project/>}></Route>      
      </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
