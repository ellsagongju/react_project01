import React from 'react'; 
// return 하는 div를 div에 넣지 않고 바로 root 바로 아래로 부르고 싶을때 app js에 react를 부른다
import { useState } from 'react';
// useState를 react에서 가져옴
import './App.css'

function App() {

  const [numbero, setNumber] = useState(1);
  // 파라미터로 함수를 변수저장
  const double2 = (numbero) => {
    setNumber(numbero * 2);
    console.log(numbero);
  };

    let number = 1;
  const double = (number) => {
    return number * 2;
  };
  const printbye = () => {
    console.log('bye')
  };
  
  let [글제목, 제목변경] = useState(['남자 코트 추천','강남 우동맛집','파이썬독학']);
  let [따봉, 따봉변경] = useState(0);
  // state를 써야 하는 이유는
  // state를 써야 하는 이유는
  // state를 써야 하는 이유는
  // post 가 변경되면 다 따라다니면서 바꿔줘야 하지만,
  // 글 제목으로 변수명을 저장했기 때문에 state 내용이 자동 return됨
  // state가 좋지만, 로고같은 변동 사항이 많지 않은 것은 state로 굳이 할 필요 없다.

  // function 함수() {
  //   console.log(1);
  // }
  // 함수 저장 하는 전통적인 예시

  // 함수실행
  // retrun을 할 때에는 한 개의 태그만 실행시킬 수 있기 떄문에 전체를 감싸는 div 처리를 하고 나머지는 감싼다.
  return (
    // <div className="App">
    // React.Fragment를 부르면 바로 root  아래 div로 부를 수 있다.
    <React.Fragment>
      <div className="header">
        <div className="black-nav">
          <h2>ReactBlog</h2>
        </div>
        <p>소제목이다</p>
      </div>

      {/* 비효율적인 코드 작성법  */}
      {/* <span onClick={() => {
        제목변경(['여자 코트 추천','강남 우동맛집','파이썬독학']);
      }}>change</span> */}

      {/* 일반적인 코드 작성법 */}
      {/* <span onClick={() => {
        글제목[0] = '여자코트 추천'
        제목변경(글제목);
      }}>change</span>  */}

      {/* 관습적인 좋은 코드 작성법 */}
      {/* array로 최초로 저장한것은 남겨두고 따로 array를 카피해서 변경한다. */}

      {/* <span onClick={() => {
        let copy = 글제목;
        copy[0] = '여자코트 추천';
        제목변경(copy);
      }}>change</span>  */}
      {/* 이거 왜 안돼 */}

      <span onClick={() => {
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        제목변경(copy);
      }}>change</span> 

      <button onClick={() => {
        let copy = [...글제목];
        copy.sort();
        제목변경(copy);
      }}>가나다순정렬</button>

      <div className="list">
        <h3>{글제목[0]}
          <span onClick={() => { 따봉변경(따봉 + 1) }}>❤</span>{따봉}</h3>
        <p>글 내용이다.</p>
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>글 내용이다.</p>
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>글 내용이다.</p>
      </div>

      <div>{numbero}</div>
      <button onClick={double2}>x2</button>

      <div>{double(number)}</div>
      
      <button onClick={() => {
        console.log('hello')
      }}>hello</button>
      <button onClick={printbye}>bye</button>
      <Modal></Modal>


    </React.Fragment>
    // </div>
  );
}

function Modal() {
  return (
    <div className="modal">모야모야</div>
  )
}
// 1.반복적인 목록이 나오는 경우

export default App;
