import React, {useState, useEffect} from 'react';
import './App.css';

const App = () => {
  const [currentTime, setcurrentTime] = useState('');

  useEffect(() => {
    const timerID = setInterval( () => setcurrentTime(time), 100);

    return function cleanup() {
      clearInterval(timerID);
    }
  }, [])
  const today = new Date()
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  return (
  <div className="clock">{currentTime}
  </div>
  )
}
export default App;
