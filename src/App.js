import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import Router from "./router/Router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BackToTop from "./components/common/BackToTop";
function App() {
  return (
    <div className=" bg-black text-white">
      <Router />
      {/* <TrendingSlider /> */}
    </div>
  );
}

export default App;
