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
  const [inputText, setInputText] = useState('');

  function newPost() {
    if (inputText === '') return;
    // const newPost = [...postTitle, inputText];
    const newPost = postTitle;
    newPost.unshift([inputText]);

    setPostTitleState(newPost);
  }

  return (
    <div className="App">
      <div className="black-nav">Dongwan Kim</div>
      <div className="section">
        {postTitle.map((t, i) => {
          return (
            <div className="posts" key={i}>
              <h3
                onClick={() => {
                  setPostIndex(i);
                  setModal(true);
                }}
              >
                {t}
              </h3>
              <Likes />
              <p>Date</p>
              <div className="border"></div>
            </div>
          );
        })}
      </div>
      <div className="publish">
        <input
          type="text"
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            if (inputText === '') return;
            // const newPost = [inputText, ...postTitle];
            const newPost = [...postTitle];
            newPost.unshift(inputText);
            setPostTitleState(newPost);
          }}
        >
          Save
        </button>
      </div>
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
