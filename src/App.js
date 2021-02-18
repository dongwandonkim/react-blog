import { useState } from 'react';

import './App.css';

function App() {
  const [postTitle, setPostTitleState] = useState([
    'men jacket',
    'good jean',
    'fancy shirt',
  ]);
  const [modal, setModal] = useState(false);
  const [postIndex, setPostIndex] = useState(0);

  function changeTitle() {
    let newTitleArray = [...postTitle];
    newTitleArray[0] = 'women coat';
    setPostTitleState(newTitleArray);
  }
  function sortPosts() {
    let sortArray = [...postTitle];
    sortArray.sort();
    setPostTitleState(sortArray);
  }

  return (
    <div className="App">
      <div className="black-nav">Dongwan Kim</div>
      <div className="section">
        {postTitle.map((t) => {
          return (
            <div className="posts">
              <h3
                onClick={() => {
                  setPostIndex(postTitle.indexOf(t));
                  setModal(true);
                }}
              >
                {t}
              </h3>
              <Likes />
              <p>내용</p>
              <p>Date</p>
              <div className="border"></div>
            </div>
          );
        })}
      </div>

      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        Show
      </button>
      {modal === true ? (
        <Modal
          postTitle={postTitle}
          postIndex={postIndex}
          setModal={setModal}
        />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.postTitle[props.postIndex]}</h2>
      <p>date</p>
      <p>desc</p>
      <button
        onClick={() => {
          props.setModal(false);
        }}
      >
        close
      </button>
    </div>
  );
}

function Likes() {
  const [count, setCount] = useState(0);
  return (
    <div
      onClick={() => {
        setCount(count + 1);
      }}
    >
      👍 {count}
    </div>
  );
}

export default App;
