//components
import { useState } from "react";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Programs from "./components/Programs/Program";
import Testimonials from "./components/Testimonials/Testimonials";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

function App() {
  const [playVideo, setPlayVideo] = useState(false)
	return (
		<div className="App">
      <Navbar/>
      <Hero/>
      <div className="container">
        <Programs/>
        <About setPlayVideo= {setPlayVideo}/>
        <Campus/>
        <Testimonials/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playVideo={playVideo} setPlayVideo= {setPlayVideo}/>
		</div>
	);
}

export default App;
