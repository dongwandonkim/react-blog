import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [postTitle, setPostTitleState] = useState([
    'men jacket',
    'good jean',
    'fancy shirt',
  ]);
  const [likeCount, setLikeCount] = useState(0);

  function changeTitle() {
    let newTitleArray = [...postTitle];
    newTitleArray[0] = 'women coat';
    setPostTitleState(newTitleArray);
  }
  return (
    <div className="App">
      <div className="black-nav">Dongwan Kim</div>
      <div className="section">
        <div className="posts">
          <h3>
            {postTitle[0]}
            <span
              onClick={() => {
                setLikeCount(likeCount + 1);
              }}
              style={{ cursor: 'pointer' }}
            >
              👍
            </span>
            {likeCount}
          </h3>
          <p>내용</p>
          <p>Date</p>
          <button onClick={changeTitle}>click</button>
          <div className="border"></div>
        </div>
        <div className="posts">
          <h3>{postTitle[1]}</h3>
          <p>내용</p>
          <p>Date</p>
          <div className="border"></div>
        </div>
        <div className="posts">
          <h3>{postTitle[2]}</h3>
          <p>내용</p>
          <p>Date</p>
          <div className="border"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
