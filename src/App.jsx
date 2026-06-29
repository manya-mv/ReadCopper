import Layout from "./components/Layout";
import Home from "./pages/Home";
import Settings from "./pages/settings";
import Stats from "./pages/stats";
import Highlights from "./pages/highlights";
import Shelves from "./pages/shelves";
import Notes from "./pages/notes";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/highlights" element={<Highlights />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/shelves" element={<Shelves />} />
        {/* <Route path="/library" element={<Library />} />
        <Route path="/library/currently-reading" element={<CurrentlyReading />} />
        <Route path="/library/want-to-read" element={<WantToRead />} />
        <Route path="/library/finished" element={<Finished />} />
        <Route path="/library/favorites" element={<Favorites />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
