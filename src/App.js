import "./App.css";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import LatestRelease from "./components/LatestRelease";

function App() {
  return (
    <div>
      <MyNavbar navTitle="Ezi Bookstore" />
     
      <Welcome subtitle="Welcome to the Ezi BooK Store" bookSection="Romance Book Section"/>
      <LatestRelease/>
      <MyFooter/>
    </div>
  );
}

export default App;
