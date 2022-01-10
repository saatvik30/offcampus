import React,{useState,useEffect} from "react";
import {Card,Button} from 'react-bootstrap'
import fetch from 'isomorphic-fetch'
import { useLocation } from "react-router-dom";


export default function Batch2022({api}) {
    const location=useLocation()
    if(location.state!=null){
       var {Batch} =location.state
    }
    else{
        var Batch="hiii"
    }
    const [content, setcontent] = useState([])
    let vr=new Set()
    useEffect(() => {
        console.log(Batch.arr1[0])
        api.data.map(({attributes})=>{
          attributes.categrories.data.map(({attributes})=>{
            vr.add(attributes.batch)
          })
        }  
          )
        
    }, [])
  return (
    <div>
        {
        api.data.map(({attributes,id})=>{
            // attributes.categrories.data.map(({id})=>{
            //     if(id===)
            // })
            return(
        <Card style={{ width: "18rem",display:"inline-block",margin:10}} key={id}>
         <Card.Img variant="top" src={`http://localhost:1337${attributes.logo.data.attributes.url}`}/>
         <Card.Body>
           <Card.Title>{attributes.title}</Card.Title>
           <Card.Text>
             {attributes.Description}
           </Card.Text>
          <a href={attributes.link}><Button variant="primary">Apply</Button></a>
         </Card.Body>
       </Card>
    )
})
        }
    </div>
  );
}
