import './styles/style.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./views/Layout";
import Live from "./views/Live";
import NoPage from "./views/NoPage";
import Biographie from "./views/Biographie";
import Configuration from "./views/Configuration";
import Emissions from "./views/Emissions";
import Events from './views/Events';
import Games from './views/Games';
import Event from './views/Event';

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
