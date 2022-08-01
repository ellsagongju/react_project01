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
  
  let post = '강남 우동 맛집';
  let [글제목, b] = useState(['여자 코트 추천','강남 우동맛집','파이썬독학']);
  // state를 써야 하는 이유는
  // state를 써야 하는 이유는
  // state를 써야 하는 이유는
  // post 가 변경되면 다 따라다니면서 바꿔줘야 하지만,
  // 글 제목으로 변수명을 저장했기 때문에 state 내용이 자동 return됨
  // state가 좋지만, 로고같은 변동 사항이 많지 않은 것은 state로 굳이 할 필요 없다.



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
      <div className="list">
        <h3>{글제목[0]}</h3>
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



    </React.Fragment>
    // </div>
  );
}

export default App;
