import "./App.scss";
import Search from "./components/Search";
import InfoWeather from "./components/InfoWeather";
import FiveDays from "./components/FiveDays";
import Footer from "./components/Footer";

function App() {
  let city = "Barcelona";
  return (
    <div className="App">
      <div className="container">
        <div className="d-flex align-items-center justify-content-center vertical-align-vh">
          <main className="box-app">
            <Search />
            <InfoWeather city={city} />
            <FiveDays />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
