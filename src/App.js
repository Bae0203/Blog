import "./App.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState([
    "남자 가방 추천",
    "여성 맨투맨 추천",
    "남녀 공용 신발 추천",
  ]);
  const [reco, setReco] = useState(0);
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>

      <button
        onClick={() => {
          let newArr = [...title];
          newArr.sort();
          setTitle(newArr);
        }}
      >
        가나다순정렬
      </button>

      <button
        onClick={() => {
          let newArr = [...title];
          newArr[0] = "여성 가방 추천";
          setTitle(newArr);
        }}
      >
        버튼
      </button>
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
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {title[2]}
        </h4>
        <p>11월 4일 발행</p>
      </div>
      {modal == true ? <Modal /> : null}
    </div>
  );
}
//컴포넌트를 만들땐 앞글자는 무조건 대문자!
const Modal = () => {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>
  );
};

/**
 * 동적인 UI만드는 과정
 * 1) html css 구현 완료
 * 2) UI현재 상태 State로 저장
 * 3) State에 따라 어떻게 할지 작성
 */

export default App;
