import "./App.css";
import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./components/SliderData";
function App() {
  return (
    <div
      className="App"
      style={{ backgroundImage: `url("https://i.imgur.com/YnaArEw.jpg")` }}
    >
      <header className="App-header">
        <p className="title">
          {" "}
          You may ask why should Barbara go on a date with me.
          <span> Use the arrow keys to right or left to know more about.</span>
        </p>
        <ImageSlider slides={SliderData} />;
      </header>
    </div>
  );
}

export default App;
