import React,{useEffect,useState} from 'react';
import './App.css';

 const App = () => {
  const [data,setData] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos').then(
      Response => Response.json()
    ).then(json => setData(json))
  },[])
  return(
    <div>
      {data.map(item => <li key={item.id}>{item.title}</li>)}
    </div>
  )
 }

export default App;
