import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/fontawesome-4.7/css/font-awesome.min.css";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import PageNotFound from "./component/pages/PageNotFound";
import Navbar from "./component/layout/Navbar";
import AddUser from "./component/users/AddUser";
import ViewUser from "./component/users/ViewUser";
import EditUser from "./component/users/EditUser";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/user/add" element={<AddUser />}></Route>
          <Route path="/user/edit/:id" element={<EditUser />}></Route>
          <Route path="/user/view/:id" element={<ViewUser />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </Router>
  );
}

export default App;
