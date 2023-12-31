import './css/style.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Live from "./pages/Live";
import NoPage from "./pages/NoPage";
import Biographie from "./pages/Biographie";
import Configuration from "./pages/Configuration";
import Emissions from "./pages/Emissions";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Live />} />
          <Route path="biographie" element={<Biographie />} />
          <Route path="configuration" element={<Configuration />} />
          <Route path="emissions" element={<Emissions />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
