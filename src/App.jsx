import Layout from "./components/Layout";
import Home from "./pages/Home";
import Settings from "./pages/settings";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/library" element={<Library />} />
        <Route path="/stats" element={<Stats />} /> */}
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  );
}

export default App;