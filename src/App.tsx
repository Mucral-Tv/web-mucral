import './styles/style.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Live from "./pages/Live";
import NoPage from "./pages/NoPage";
import Biographie from "./pages/Biographie";
import Configuration from "./pages/Configuration";
import Emissions from "./pages/Emissions";
import Events from './pages/Events';
import Games from './pages/Games';
import Event from './pages/Event';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Live />} />
          <Route path="biographie" element={<Biographie />} />
          <Route path="configuration" element={<Configuration />} />
          <Route path="emissions" element={<Emissions />}/>
          <Route path="emissions/events" element={<Events />} />
          <Route path="/emissions/events/:eventID" element={<Event />} />
          <Route path="emissions/games" element={<Games />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
