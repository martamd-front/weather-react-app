import "./App.scss";
import Search from "./components/Search";
import FiveDays from "./components/FiveDays";
import Footer from "./components/Footer";

function App() {
  let city = "Barcelona";
  return (
    <div className="App">
      <div className="container">
        <div className="d-flex align-items-center justify-content-center vertical-align-vh">
          <main className="box-app">
            <Search defaultCity="Barcelona" />
            <FiveDays />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
