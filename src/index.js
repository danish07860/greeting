import React from "react";
import  ReactDOM  from "react-dom";
import './index.css';


let date=new Date();
date=date.getHours();
let date1=new Date();
let time=date1.getHours()+':'+date1.getMinutes()+':'+date1.getSeconds();
let greeting='';
const cssStyle={

};
if(date>=1 && date<12)
{
  greeting='Good Morning';
  cssStyle.color='green';
}else if(date>=12 && date<19)
{
  greeting='Good Afternoon';
  cssStyle.color='red';
}else{
  greeting='Good Night';
  cssStyle.color='blue';
}

ReactDOM.render(
  <><div><h1>Hello sir, <span style={cssStyle}>{greeting} </span>   </h1>
  <h2 >Time: {time}</h2>
  
</div></>, document.getElementById("root")
);
