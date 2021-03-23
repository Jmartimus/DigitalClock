import React, {useState, useEffect} from 'react';
import './App.css';

const App = () => {
  const [currentTime, setcurrentTime] = useState('');

  function updateTime() {
    
    const today = new Date()
    const time = today.toLocaleTimeString();
    setcurrentTime(time);
  }

  useEffect(() => {
    const timerID = setInterval(updateTime, 1000);
    return function cleanup() {
      clearInterval(timerID);
    }
  }, [])
  
  return (
      <div id="container">
        <div className="clock">{currentTime}</div>
      </div>
  );
}
export default App;
