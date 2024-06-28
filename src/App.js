import { Component, Suspense } from "react";
import ThePublicLayout from "./container/ThePublicLayout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import TheLayoutSecond from "./container/TheLayoutSecond";
import { AdminInternal, AppInternal } from "./routes";
import TheLayoutAdmin from "./container/TheLayoutAdmin";
const Index = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route exact path="/" element={<ThePublicLayout />} />
        <Route path="/" element={<TheLayoutSecond />}>
          {AppInternal.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              element={<route.component />}
            />
          ))}
        </Route>
        <Route path="/" element={<TheLayoutAdmin />}>
          {AdminInternal.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              element={<route.component />}
            />
          ))}
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
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
