import "./App.css";
import Router from "./router/Router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Trending from "./components/trending/Trending";
function App() {
  return (
    <div className=" bg-black text-white">
      <Router />
      <Trending />
    </div>
  );
}

export default App;
