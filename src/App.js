import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import Routing from "./Routing";
import { auth } from "./firebase";
import { db } from "./firebase";
// import { UserCreate, UserEdit, UserList } from "./users";
// import { Roll } from "./roll";
import jsonServerProvider from "ra-data-json-server";
import { Admin, Resource } from "react-admin";
// import { PostList, PostEdit, PostCreate } from "./posts";

// const dataProvider = jsonServerProvider("http://localhost:3000");

function App() {
  console.log(auth);
  console.log("db", db);
  return (
    <Router>
      <Header />
      <Routing />
      <Footer />
    </Router>
  );
}

export default App;
