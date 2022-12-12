import "./App.scss";
import Weather from "./components/Weather";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="vertical-align-vh">
        <div className="container">
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
