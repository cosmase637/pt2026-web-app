import {useState,useEffect} from 'react';
import './App.css';
function App(){const[message,setMessage] = useState('Inapakia...');
  useEffect(() => {
    fetch('http://localhost:5000/api/hello')
    .then((res) => res.json())
    .then((data) => setMessage(data.message))
    .catch((err) => setMessage('Hitilafu: server haipatkani'));
  },[]);
  return(
    <div style={{ textAlign: 'center', marginTop: '50px'}}>
    <h1>PT 2026: Web App Development</h1>
    <p>Ujumbe kutoka backend:</p>
    <h2>{message}</h2>
    </div>
  );
}
export default App;