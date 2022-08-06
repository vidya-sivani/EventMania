import { useState } from 'react';
import React from 'react';
import './App.css';
import {defaultEvents} from './events'

export default function Useform() {
    const [name,setName]=useState("KS-AUDI") 
    const [date,setDate]=useState()
    const [time,setTime]=useState("10:00")
   
    const handleSubmit = (event) => {
        event.preventDefault();
        
        var isAvailable=0
        for(var i=0;i<6;i++){
          if(defaultEvents[i].name==name){
            if(defaultEvents[i].date==date){
              if(defaultEvents[i].time==time){
                isAvailable=1
                break
              }
            }
          }
        }
        if(isAvailable==0){
          alert(name+" is Available on "+date)
        }
        else{
          alert(name+" is not Available on "+date)
        }
        
      }
  return (
    <div style={{backgroundColor:"#DDDDDD",border:"1px solid #626262", boxShadow: "10px 10px 5px #aaaaaa"
    ,width:"200px",padding:"20px",marginLeft:"auto",marginRight:"auto"}}>
        <form onSubmit={handleSubmit}>
        <label for="rno">Room</label>
        <input type="text" id="rno" name="rno"  value={name}
          onChange={(e) => setName(e.target.value)}/><br></br>
        <label for="edate">Date</label><br></br>
        <input type="date" id="date" name="edate" value={date} onChange={(e) =>{
         
          var inpdate=e.target.value
          var splitDate = inpdate.split('-');
          var year = splitDate[0];
          var month = splitDate[1];
          var day = splitDate[2]; 
          setDate(day + '-' + month + '-' + year)
          
        } }></input><br></br>
        <label for="etime">Time</label><br></br>
        <input type="time" id="etime" name="etime" style={{marginBottom:"10px"}}
        value={time} 
        onChange={(e)=>{
         
          setTime(e.target.value)

        }}
        ></input><br></br>
        <input type="submit"/>
        </form>




    </div>
  )
}
