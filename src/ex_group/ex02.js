import React, { useState } from 'react'; 
import './App.css'

function App() {
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동 맛집', '파이선독학'])
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState('false');
  let [title, setTitle] = useState('0');
  let [입력값, 입력값변경] = useState('');

  // [1, 2, 3].map(function (a) {
  //   console.log(a)
  // });

  // [1, 2, 3].map(function (b) { 
  //   return '12342'
  // });

  // 1, 2, 3 보다 갯수가 많아지면 어쩔꺼임.계속 숫자 늘려줄거임 ?
  //   아니지 결국 state를 이용한다 state useState로 저장한게 array 상태니까
  // .map을 쓸 때 array 대신 useState의 이름을 가져다 놓으면 완성임


  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={() => {
        let titleCopy = [...글제목]
        titleCopy[0] = '여자코트 추천';
        글제목변경(titleCopy);
      }}>글제목 수정하기</button>

      
      {/* 원래 했던 코드
      <div className="blog_list">
        <h5>{글제목[0]}<span onClick={() => { 따봉변경(따봉 + 1) }}>❤</span> {따봉}</h5>
        <p>7월 발행</p>
      </div>
      <div className="blog_list">
        <h5>{글제목[1]}<span onClick={()=> {setModal( modal = true)}}>모달띄우기</span></h5>
        <p>7월 발행</p>
      </div>
      <div className="blog_list">
        <h5>{글제목[2]}</h5>
        <p>7월 발행</p>
      </div> */}

      {/* 콜백함수를 쓰게 되면 */}
        {/* {
          글제목.map(function(a){
            return(
              <div className="blog_list">
                <h5>{a}<span onClick={() => { 따봉변경(따봉 + 1) }}>❤</span> {따봉}</h5>
                <p>7월 발행</p>
              </div>
            )
          })
      } */}
       
      {/* array 개수만큼 숫자가 늘어나는 정수 i */}
              {
          글제목.map(function(a, i){
            return(
              <div className="blog_list">
                <h5 onClick={() => { setModal(modal = true);  setTitle(i)}}>
                  {글제목[i]}
                  <span onClick={(e) => {
                    e.stopPropagation();
                      let copy = [...따봉];
                      copy[i] = copy[i] + 1;
                      따봉변경(copy);
                      }}>❤
                  </span> 
                  {따봉[i]}
                </h5>
                <p>7월 발행</p>
              </div>
            )
          })
      }
      
      <input onChange={(e) => {
        입력값변경(e.target.value)
        console.log(입력값)
      }}></input>

      <button onClick={() => { setTitle(0) }}>글제목0</button>
      <button onClick={() => { setTitle(1) }}>글제목1</button>
      <button onClick={() => { setTitle(2) }}>글제목2</button>

        {
        modal === true ? <Modal title={title} 글제목={글제목} /> : null
        }
        {/* 조건식 ? 참일 떄 실행할 코드 : 거짓일 때 실행할 코드 */}

    </div>
  );
}


function Modal(props){
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <span>날짜</span>
      <p></p>
    </div>
  )
}

// [동적인 ui 만드는 step]
// 1. html css로 미리 디자인 완성
// 2. ui의 현재상태를 state로 저장


export default App;
