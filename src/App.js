import React, { useState } from 'react'; 
import './App.css'

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
          )
        })
      }

      {
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

 }

function Modal(props) {
  return (
    <div className='modal'>
      <h3>{props.title[props.titleNum] }</h3>
      <p>모달 내용입니다.</p>
    </div>
  )
 }

export default App;

