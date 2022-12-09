import "./App.scss";
import Weather from "./components/Weather";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="d-flex align-items-center justify-content-center vertical-align-vh">
          <main className="box-app">
            <Weather defaultCity="Barcelona" />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
