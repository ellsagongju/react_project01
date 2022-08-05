import React, { useState } from 'react'; 
import './App.css'

function App(){
  let [글제목, 글제목변경] = useState(['글제목1', '글제목2', '글제목3'])
  let [따봉, 따봉변경] = useState([0, 0, 0])
  let [modal, setModal] = useState('true')
  let [title, setTitle] = useState('')
  let [change, setChange] = useState('false')
  return (
    <div className='App'>
      {
        글제목.map(function(a,i){
          return(
          <div className='Blog_list'>
              <h2 onClick={() => {
                setModal(modal == 'true'); setTitle(i);
               }}>
                { 글제목[i]}
                <span onClick={(e) => {
                  e.stopPropagation();
                  let good = [...따봉];
                  good[i] = good[i] + 1;
                  따봉변경(good);
              }}>🤞</span>{따봉[i]}
            </h2>
            <p>글 내용입니다.</p>
              <span>2022.08.05</span>
              <div className='change_btn'>
                <span className='edit_btn' onClick={() => { 

                }}>수정하기</span>
                <span className='del_btn'>삭제하기</span>
              </div>
          </div>
          )
        })
      }

      {
        modal === true ? <Modal title={title} 글제목={글제목}></Modal> : null
      }
    </div>
  )
}


function Modal(props) { 
  return (
    <div className='modal'>
      <h3>{props.글제목[props.title]}</h3>
      <p>모달내용</p>
      <span>모달날짜입니다만</span>
    </div>
  )
}

export default App;
