import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import HeaderLayout from "./layouts/header-layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ShoeDetailsPage from "./pages/shoe-details-page";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<HeaderLayout />}>
            <Route index element={<HomePage />} />
            <Route path="shoe/:id" element={<ShoeDetailsPage />} />s
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
