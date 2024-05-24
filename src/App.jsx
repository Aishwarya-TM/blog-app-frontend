import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GetAllBooksComponent from './components/GetAllBlogComponent/GetAllBlogComponent';
import AddNewBooksComponent from './components/AddNewBlogComponent/AddNewBlogComponent';
import EditBooksComponent from './components/EditBlogComponent/EditBlogComponent';
import DeleteBooksComponent from './components/DeleteBlogComponent/DeleteBlogComponent';

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Blog App</h1>
        <nav className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/add">Add Blog</Link>
          <Link to="/edit">Edit Blog</Link>
          <Link to="/delete">Delete Blog</Link>
        </nav>  
        <Routes>
          <Route exact path="/" element={<GetAllBooksComponent/>}></Route>
          <Route path="/add" element={<AddNewBooksComponent/>}></Route>
          <Route path="/edit" element={<EditBooksComponent/>}></Route>
          <Route path="/delete" element={<DeleteBooksComponent/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
