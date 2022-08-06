import React, { useState } from 'react'; 
import './App.css'

<<<<<<< HEAD
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
=======
function App() {
  let [title, setTitle] = useState(['title01', 'title02','title03'])
  let [good, setGood] = useState([0, 0, 0])
  let [modal, setModal] = useState('true') 
  let [titleNum, setTitleNum] = useState('')
  let [change, setChange] = useState('')

  return (
    <div className='app'>
      {
        title.map(function (a, i) { 
          return (
            <div className='contents'>
              <h2 className='list_title' onClick={() => { 
                setModal(modal === true); setTitleNum(i)
              }}>
                {title[i]}
                <span className='good_btn' onClick={(e) => { 
                  e.stopPropagation();
                  let copyGood = [...good];
                  copyGood[i] = copyGood[i] + 1;
                  setGood(copyGood);
                }}>👍</span>
                {good[i] }
              </h2>
              <p>글 내용입니다.</p>
              <span>2022.08.06</span>
              <div className='change_btn'>
                <input onChange={(e) => {
                  setChange(e.target.value)
                }}></input>
                <span className='edit_btn' onClick={(i) => { 
                  let titleCopy = [...title];
                  titleCopy[i] = change;
                  setTitle(titleCopy);
                }}>수정하기</span>
                <span className='del_btn' onClick={(i) => {

                  title.slice(i);
                 } }>삭제하기</span>
              </div>
            </div>
>>>>>>> 154c1db5267629b7c7da51adf24f3cff74dcd481
          )
        })
      }

      {
<<<<<<< HEAD
        modal === true ? <Modal title={title} 글제목={글제목}></Modal> : null
      }
    </div>
  )
}
=======
        modal === true ? <Modal title={title} titleNum={titleNum}></Modal> : null
      }
      <div className='plus_contents'>
        <div className='change_btn'>
            <input onChange={(e) => {
              setChange(e.target.value)
            }} placeholder="왜 한번 다른 동작을 하고 와야 실행되나"></input>
            <span className='plus_btn' onClick={() => { 
              title.push(change);
              
            }}>추가하기</span>
          </div>
        </div>
      </div>
  )
>>>>>>> 154c1db5267629b7c7da51adf24f3cff74dcd481

 }

<<<<<<< HEAD
function Modal(props) { 
  return (
    <div className='modal'>
      <h3>{props.글제목[props.title]}</h3>
      <p>모달내용</p>
      <span>모달날짜입니다만</span>
    </div>
  )
}
=======
function Modal(props) {
  return (
    <div className='modal'>
      <h3>{props.title[props.titleNum] }</h3>
      <p>모달 내용입니다.</p>
    </div>
  )
 }
>>>>>>> 154c1db5267629b7c7da51adf24f3cff74dcd481

export default App;
