import './app.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./views/layout/Layout";
import Live from "./views/live/Live";
import NoPage from "./views/noPage/NoPage";
import Biographie from "./views/biographie/Biographie";
import Configuration from "./views/configuration/Configuration";
import Emissions from "./views/emissions/Emissions";
import Events from './views/events/Events';
import Games from './views/gaming/Games';
import Event from './views/event/Event';

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
