let day=document.getElementById("day");
let month=document.getElementById("month");
let year=document.getElementById("year");
let hour=document.getElementById("hour");
let minute=document.getElementById("minute");
let second=document.getElementById("second");
let mon=document.getElementById("mon")
let tue=document.getElementById("tue")
let wed=document.getElementById("wed")
let thu=document.getElementById("thu")
let fri=document.getElementById("fri")
let sat=document.getElementById("sat")
let sun=document.getElementById("sun")
 setInterval(()=>{
    let todayDate=new Date();
    day.innerText=todayDate.getDate();
    month.innerText=todayDate.getMonth();
    let yearHalf=todayDate.getFullYear().toString().slice(2)
    year.innerText=yearHalf;
    if(todayDate.getHours() <=9){
          hour.innerText=0 + todayDate.getHours().toString();
    }else {
         hour.innerText=todayDate.getHours();
    }
    if(todayDate.getMinutes() <=9){
          minute.innerText=0 + todayDate.getMinutes().toString();
    }else {
            minute.innerText=todayDate.getMinutes();
     }
    if(todayDate.getSeconds() <=9){
          second.innerText=0 + todayDate.getSeconds().toString();
    }else {
            second.innerText=todayDate.getSeconds();
      }
    //   let days=
  let dayToday=todayDate.getDay()
  if(dayToday == 0){
         sun.checked=true
 } else if(dayToday == 1){
         mon.checked=true
   }else if(dayToday == 2){
    tue.checked=true
   }else if(dayToday == 3){
        wed.checked=true
   }else if(dayToday == 4){
     thu.checked=true
  }else if(dayToday == 5){
        fri.checked=true
   }else if(dayToday == 6){
        sat.checked=true
   }
},1000)