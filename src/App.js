import "./App.css";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div>
      <MyNavbar navTitle="Ezi Bookstore" />
      <MyFooter/>
    </div>
  );
}

export default App;
