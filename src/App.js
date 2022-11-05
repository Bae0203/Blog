import "./App.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState([
    "남자 가방 추천",
    "여자 맨투맨 추천",
    "남녀 공용 신발 추천",
  ]);
  let [reco, setReco] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      <div className="list">
        <h4>
          {title[0]}
          <span
            onClick={() => {
              setReco((e) => e + 1);
            }}
          >
            ❤️
          </span>
          {reco}
        </h4>
        <p>11월 4일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>11월 4일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>11월 4일 발행</p>
      </div>
    </div>
  );
}

export default App;
