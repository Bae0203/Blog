import "./App.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState([
    "남자 가방 추천",
    "여성 맨투맨 추천",
    "남녀 공용 신발 추천",
  ]);
  const [reco, setReco] = useState(0);

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
              setReco(reco + 1);
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
      <span onClick={setTitle((title[0] = "여성 가방 추천"))}>버튼</span>
    </div>
  );
}

export default App;
