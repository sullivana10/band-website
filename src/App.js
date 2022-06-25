import "./App.css";
import Header from "./components/header/Header";
import Toolbar from "./components/toolbar/Toolbar";
import AnnouncementBar from "./components/announcementBar/AnnouncementBar";
import Tour from "./components/tour/Tour";
import Album from "./components/album/Album";
import Cds from "./components/cds/Cds";
import Video1 from "./components/video1/Video1";
import Video2 from "./components/video2/Video2";
import Apparel from "./components/apparel/Apparel";
import News from "./components/news/News";
import Footer from "./components/footer/Footer";

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
      <Apparel />
      <Video2 />
      <News />
      <Footer />
    </div>
  );
}

export default App;
