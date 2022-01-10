import React,{useState,useEffect} from "react";
import {Card,Button} from 'react-bootstrap'
import fetch from 'isomorphic-fetch'


export default function Batch2021({api}) {
    const [content, setcontent] = useState([])
    let vr=new Set()
    useEffect(() => {
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
