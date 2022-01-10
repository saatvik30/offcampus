import './App.css';
import React,{useState,useEffect} from 'react'
import Nav from './Nav';
import { BrowserRouter } from "react-router-dom";
import {Route,Routes} from "react-router-dom";
import Batch2021 from './Batch2021';
import Batch2022 from './Batch2022';
import Home from './Home';
export default function App() {
  const [content, setcontent] = useState([])
  useEffect(() => {
    fetch('http://localhost:1337/api/campusupdates?populate=*')
    .then((response)=>{
        if(response.status>=400){
            throw new Error("Bad Response from server")
        }
        return response.json()
    }).then((contents)=>{
        setcontent(contents)
    })
}, [])
  return (
    <>
    {
    content.length===0?<h1 style={{textAlign:"center"}}>Loading</h1>:
    <BrowserRouter>
    <Nav api={content}/>
    <Routes>
          <Route exact path="/Batch2021" element={<Batch2021 api={content}/>}/>
          <Route exact path="/Batch2022" element={<Batch2022 api={content}/>}/>
          <Route exact path="/" element={<Home/>}/>
          </Routes>
    </BrowserRouter>
    }
    </>
    
  );
}
