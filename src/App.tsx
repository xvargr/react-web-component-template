import { Routes, Route, useLocation } from "react-router-dom";
import Index from "./routes/Index";

function App() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  );
}

export default App;
