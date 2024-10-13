import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import HeaderLayout from "./layouts/header-layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HeaderLayout />}>
          <Route index path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
