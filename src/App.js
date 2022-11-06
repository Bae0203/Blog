import "./App.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState([
    "남자 가방 추천",
    "여성 맨투맨 추천",
    "남녀 공용 신발 추천",
  ]);
  const [reco, setReco] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);

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

      {/*
       * map 함수란
       * 1) 왼쪽 배열 자료만큼 내부코드 실행
       * 2) return 오른쪽에 있는걸 배열로 담아줌
       * 3) 유용한 파라미터 2개 사용가능
       */}
      {title.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitleIndex(i);
              }}
            >
              {title[i]}
            </h4>
            <span
              onClick={() => {
                let a = [...reco];
                a[i] = a[i] + 1;
                setReco(a);
              }}
            >
              ❤️
            </span>
            {reco[i]}
            <p>11월 4일 발행</p>
          </div>
        );
      })}
      {modal == true ? (
        <Modal title={title} setTitle={setTitle} titleIndex={titleIndex} />
      ) : null}
    </div>
  );
}
//컴포넌트를 만들땐 앞글자는 무조건 대문자!
const Modal = (props) => {
  return (
    <div className="modal">
      <h4>{props.title[props.titleIndex]}</h4>
      <p>날짜</p>
      <p>상세 내용</p>
      <button
        onClick={() => {
          let a = [...props.title];
          a[0] = "여자 코트 추천";
          props.setTitle(a);
        }}
      >
        수정
      </button>
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
