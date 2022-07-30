import React from "react";
import "./style.css";
import data from "./rocords.json";
import { useState } from "react";
const Main = ({type}) => {
    let arr=new Array(data.length).fill(false);
    const newData=type==="all"?data:data.filter(d=>d.type===type)
    console.log(newData);
    const [Open,setChanges]=useState(arr);
    const changeHeight=(id)=>{
      var temp=document.getElementById(id);
      var value=temp.style.height;
      if(value==='600px') temp.style.height='400px';
      else temp.style.height='600px';
      setChanges((prevState) =>{
          return(prevState.map((item,idx)=>{
            if(`div${idx+1}`===id){
              item=!item
            }
            return item
          }))
      });
    };
  return (
    <div className="container"> 
      <h1></h1>
    <hr />
        <div className="row">
          {newData.map((record) => {
             return (
              <div className="box" key={record.id} id={`div${record.id}`}>
                <div className="title">
                  <span className="QueNo">{record.id}</span>
                  <h2>{record.title}</h2>
                </div>
                <div className="image">
                  <img src={record.image} alt="" />
                </div>
                <span>{record.content}</span>
                <button className="btn" onClick={()=>changeHeight(`div${record.id}`)}>Show Answer</button>
                {Open[record.id-1] && (<p>{record.solution}</p>)}
              </div>
            );
          })}
        </div>
    </div>
    
  );
};

export default Main;
