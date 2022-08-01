import React from 'react'; 
// return 하는 div를 div에 넣지 않고 바로 root 바로 아래로 부르고 싶을때 app js에 react를 부른다
import { useState } from 'react';
// useState를 react에서 가져옴

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
  
  // 함수실행
  // retrun을 할 때에는 한 개의 태그만 실행시킬 수 있기 떄문에 전체를 감싸는 div 처리를 하고 나머지는 감싼다.


  return (
    // <div className="App">
    // React.Fragment를 부르면 바로 root  아래 div로 부를 수 있다.
    <React.Fragment>
      

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
