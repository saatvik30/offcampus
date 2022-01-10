import React,{useState,useEffect} from 'react';
import {BrowserRouter, Link,Route,Routes,useNavigate} from 'react-router-dom'
import Batch2022 from './Batch2022';
export default function Nav({api}) {
    const [ans, setans] = useState([])
    const navigate=useNavigate()
    const ids=new Set()

    const SetDatas=()=>{
      api.data.map(({attributes})=>{
        attributes.categrories.data.map(({attributes,id})=>{
          ids.add(`${id}-${attributes.batch}`)
        })
      } )
        return(
          Array.from(ids).map((item)=>{
            const arr1=item.split('-')
            return(
          <Link key={arr1[0]} className="dropdown-item" to={`/Batch${arr1[1]}`} state={{Batch:{arr1}}}>{arr1[1]}</Link>
          )}
          )
        )
    }
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">OffCampusUpdates</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page"to="#">About Me</Link>
        </li>
        <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Select batch
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <SetDatas key={api.id}/>
        </div>
      </li>
    </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </div>
  );
}