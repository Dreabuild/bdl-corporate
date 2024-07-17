import { useEffect } from "react";
import Banner from "./components/Banner";
import DownloadApp from "./components/DownloadApp";
import Footer from "./components/Footer";
import HelpingCompanies from "./components/HelpingCompanies";
import HelpSection from "./components/HelpSection";
import InfoSection from "./components/InfoSection";
import JoinTeam from "./components/JoinTeam";
import Media from "./components/Media";
import Navbar from "./components/Navbar";
import PhotoGallery from "./components/PhotoGallery";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ disable: "mobile" });
  }, []);
  return (
    <div>
      <Navbar />
      <Banner />
      <HelpingCompanies />
      <InfoSection />
      <HelpSection />
      <PhotoGallery />
      <Media />
      <JoinTeam />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;
