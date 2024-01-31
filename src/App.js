import { React } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './components/Navbars/Navbar1';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MostVisit from './pages/MostVisit';
import Turkey from './components/Turkey';
import Eygpt from "./components/Eygpt";
import Eimairates from './components/Eimairates';
import Comment from './components/Comment';
import AddComment from "./components/AddComment";
import CommentDetails from './components/CommentDetails';
import Readmore from './components/Readmore';
import EditComment from "./components/EditComment"

function App() {
  return (
    <Router>
      <>
        <Navbar1 />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/turkey" element={<Turkey />}></Route>
          <Route path="/eygpt" element={<Eygpt />}></Route>
          <Route path="/eimairates" element={<Eimairates />}></Route>
          <Route path="/comment" element={<Comment />}></Route>
          <Route path="/addcomment" element={<AddComment />}></Route>
          <Route path="/comments/:id" element={<Readmore />}></Route>
          <Route path="/edit/:id" element={<EditComment />}></Route>

          /edit/
        </Routes>
        <MostVisit />
        <Footer />
      </ >
    </Router >
  );
}

export default App;
