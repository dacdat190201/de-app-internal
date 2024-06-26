import { Component, Suspense } from "react";
import ThePublicLayout from "./container/ThePublicLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppIntertal } from "./routes";
import TheLayoutSecond from "./container/TheLayoutSecond";
const Index = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route exact path="/" element={<ThePublicLayout />} />
        <Route path="/" element={<TheLayoutSecond />}>
          {AppIntertal.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Route>
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
