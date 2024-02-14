import "./App.css";
import Router from "./router/Router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TrendingSlider from "./components/common/slider/TrendingSlider";
function App() {
  return (
    <div className=" bg-black text-white">
      <Router />
      <TrendingSlider />
    </div>
  );
}

export default App;
