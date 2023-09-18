import { Routes, Route } from "react-router-dom";
import "./App.css";
import YouTubeApp from "./YouTube";
import YouTubeVideo from "./YouTube/YoutubeVideo";
function App() {
  return (
    <Routes>
      <Route path="/" element={<YouTubeApp />} />
      <Route exact path="/watch" element={<YouTubeVideo />} />
      {/* <Route exact path="/read" element={<EmployeeDataTable />} />
      <Route path="/employee/:id" element={<EditEmployee />} /> */}
    </Routes>
  );
}

export default App;
