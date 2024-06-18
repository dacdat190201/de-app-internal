import TheFooter from "./components/TheFooter";
import TheHeader from "./components/TheHeader";
import HomePage from "./pages/homepage/HomePage";
import "./scss/style.scss";
function App() {
  return (
    <div className="c-wrapper">
      <TheHeader />
      <HomePage />
      <TheFooter />
    </div>
  );
}

export default App;
