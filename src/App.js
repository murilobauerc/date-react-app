import "./App.css";
import CountdownTimer from "./components/CountdownTimer";
import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./components/SliderData";
function App() {
  const FOURTEEN_DAYS_IN_MS = 14 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterTenDays = NOW_IN_MS + FOURTEEN_DAYS_IN_MS;

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
        <ImageSlider slides={SliderData} />

        <p className="title"> Next time available...: </p>
        <CountdownTimer targetDate={dateTimeAfterTenDays} />
      </header>
    </div>
  );
}

export default App;
