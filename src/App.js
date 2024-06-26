import { Component, Suspense } from "react";
import ThePublicLayout from "./container/ThePublicLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppIntertal } from "./routes";
const Index = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route exact path="/" element={<ThePublicLayout />} />
        {AppIntertal.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </Suspense>
  );
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    );
  }
}

export default App;
