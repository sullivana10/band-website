import "./App.css";
import Header from "./components/header/Header";
import Toolbar from "./components/toolbar/Toolbar";
import AnnouncementBar from "./components/announcementBar/AnnouncementBar";
import Tour from "./components/tour/Tour";
import Album from "./components/album/Album";
import Cds from "./components/cds/Cds";
import Video1 from "./components/video1/Video1";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Header />
      <AnnouncementBar />
      <Tour />
      <Album />
      <Cds />
      <Video1 />
    </div>
  );
}

export default App;
