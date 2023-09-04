"use strict";
const display  = document.getElementById('display');
const equals = document.getElementById("equals");
const plus = document.getElementById("plus");
const minus = document.getElementById('minus');
const ac = document.getElementById("AC");
const multiplication = document.getElementById('multiply')
const divide = document.getElementById('divide');
const sign = document.getElementById('sign');
const percentage = document.getElementById('percent');
let ans = "";
let number = "";
let LOp = '';
let count = 0;

const click = document.querySelectorAll(".number").forEach(function(item){
    item.addEventListener('click',function(event){
        console.log(event.target.getAttribute('data-value'));
    number = number+event.target.getAttribute('data-value');
    display.innerText = number;
});
});
const operator = document.querySelectorAll(".operator");

function lastOperator(LOp){
    switch(LOp){
        case 'plus':
            if(number==''){
                break;
            }
            ans = Number(ans) + Number(number);
            display.style.color = "blue";
            display.innerText = ans;
            number = '';
            break;
        case 'minus':
            if(number==''){
                break;
            }
            ans = Number(ans) - Number(number);
            display.style.color = "blue";
            display.innerText = ans;
            number = '';
            break;
        case 'multiply':
            if(number==''){
                break;
            }
            ans = Number(ans) * Number(number);
            display.style.color = "blue";
            display.innerText = ans;
            number = '';
            break;
        case 'divide':
            if(number==''){
                break;
            }
            ans = Number(ans) / Number(number);
            display.style.color = "blue";
            display.innerText = ans;
            number = '';
            break;
    }
};
equals.addEventListener('click', function(){
    console.log(ans);
   lastOperator(LOp);
})
// 2 + 1 - 3
function addition(n1,n2){
    console.log("Number = "+ number);
    lastOperator(LOp);
    if(n1==''){
    ans = n2;
   }
    number = "";
    display.style.color = "white";
    LOp = 'plus';
    
}
function subtraction(n1 ,n2){
    lastOperator(LOp);
    if(n1==''){
    ans = n2;
   }
    display.style.color = "white";
    LOp = 'minus';
    number = "";
}
 function multi(n1,n2){
    lastOperator(LOp);
   if(n1==''){
    ans = n2;
   }
    console.log(ans);
    LOp = 'multiply';
    display.style.color = "white";
    number = "";
}
  function div(n1,n2){
    lastOperator(LOp);
    if(n1==''){
    ans = n2;
   }
    console.log(ans);
    LOp = 'divide';
    display.style.color = "white";
    number = "";
} 
 function signChange(n2){
    count++;
    if(count%2==0)
{
    number = n2;
    display.innerText = number;
}
else{
    number = -n2;
    count = 0;
    display.innerText = number;
}
}
 function percent(n1, n2){
    if(n1==''){
        n1 = n2;
        display.style.color = "blue";
        display.innerText = n1/100;
    }
    else{
        display.style.color = "blue";
        display.innerText = n1/100;
    }
}
plus.addEventListener('click', function(){
    addition(ans,number);
});
minus.addEventListener('click', function(){
    subtraction(ans, number);
});
multiplication.addEventListener('click', ()=> multi(ans,number));
divide.addEventListener('click', ()=> div(ans,number));

ac.addEventListener('click', function(){
    ans = "";
    number = "";
    display.innerText = "Cleared";
    display.style.color = "white";
})
sign.addEventListener('click', ()=> signChange(number));
percentage.addEventListener('click', ()=> percent(ans, number));
