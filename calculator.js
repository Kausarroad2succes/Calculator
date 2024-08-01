const btns=document.querySelectorAll(".one");

var display=document.querySelector(".head");
var btnn;



btns.forEach((btn)=>{
    btn.addEventListener("click",function () {
      
      btnn=btn.value; headValue=document.querySelector(".head").value; document.querySelector(".head").value=headValue+btnn;
       
    })
});


//calculation 

function calculate (){
    
    try{
       display.value=eval(display.value);
       
    } catch(error) {
        display.value="Syntax Error"
    }
    
}

const delAll=document.querySelector(".c");
delAll.addEventListener("click",function (){
   display.value="";
})



function del(){
let string=display.value;
   string=string.slice(0,string.length-1);
   display.value=string;
}



