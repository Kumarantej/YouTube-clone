import { Routes, Route } from "react-router-dom";
import "./App.css";
import YouTubeApp from "./YouTube";
import YouTubeVideo from "./YouTube/YoutubeVideoView";
function App() {
  return (
    <Routes>
      <Route path="/" element={<YouTubeApp />} />
      <Route exact path="/watch" element={<YouTubeVideo />} />
    </Routes>
  );
}

export default App;
