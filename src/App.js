import React, { useState } from 'react'; 
import './App.css'

function App() {
  let [title, setTitle] = useState(['title01', 'title02','title03'])
  let [good, setGood] = useState([0, 0, 0])
  let [modal, setModal] = useState('true') 
  let [titleNum, setTitleNum] = useState('')
  let [change, setChange] = useState('')
  let [change2, setChange2] = useState(0)
  let [toDate, setToDate]= useState('')
  
  return (
    <div className='app'>
      {
        title.map(function (a, i) { 
          return (
            <div className='contents' key={i}>
              <h2 className='list_title' onClick={() => { 
                setModal(true); setTitleNum(i)
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
              <span>
                {
                  () => {
                    let now = [...toDate]
                    now = new Date();
                    setToDate(now)
                   }
                }
              </span>
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
                  let titleCopy = [...title];
                  titleCopy.splice(i,1);
                  setTitle(titleCopy);
                 } }>삭제하기</span>
              </div>
            </div>
          )
        })
      }
      {
        
      }

      {
        modal === true ? <Modal title={title} titleNum={titleNum} setModal={setModal}></Modal> : null
      }
      <div className='plus_contents'>
        <div className='change_btn'>
            <input onChange={(e) => {
              setChange(e.target.value)
            }} placeholder="아까 했던것 같은데.. 왜?"></input>
          <span className='plus_btn' onClick={(i) => { 
              let titleCopy = [...title];
              let copyGood = [...good];
            
              titleCopy.push(change);
              copyGood.push(change2);
            
              setTitle(titleCopy);
              setGood(copyGood);
            }}>추가하기</span>
          </div>
        </div>
      </div>
  )

 }

function Modal(props) {
  return (
    <div className='modal'>
      <span className='close_modal' onClick={() => { 
        props.setModal(false);
      }}>x</span>
      <h3>{props.title[props.titleNum] }</h3>
      <p>모달 내용입니다.</p>
      <span></span>
    </div>
  )
 }

export default App;
