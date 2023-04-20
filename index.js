
const title =document.getElementById("title");
const msg =document.querySelector("#msg");
// const title1 =document.querySelector("h1");
const a =document.querySelector("#btn");//#用在id
const input =document.querySelector("#input");


// console.log(title);
let lottery= [];

function getRandom(X) {
    return Math.floor(Math.random()*X)+1;
}
const num1=getRandom(101);
let begin=0;
let end=100;
// let amount=0;
a.addEventListener("click",function(){
    let num=input.value;
    input.value=null;
    if(num<begin||num>end){
        alert("請輸入正確數字");
        input.value=null;
        return;
       }

    if(num1==num){title.innerText="BOMB"; msg.innerText=`結束，${num1}`;}
    if(num1!=num && num1<num){
        end=num;
        title.innerText=begin+"-"+end;
        msg.innerText=`加油`;
        
    }
    if(num1!=num && num1>num){
            begin=num;
            title.innerText=begin+"-"+end;
            msg.innerText=`加油`;    

    }

    }
    
);