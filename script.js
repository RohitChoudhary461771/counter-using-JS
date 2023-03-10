const countvalue =document.querySelector('#counter');
//const countvalue =document.getElementByid('counter');


//simple function

function decrement(){
    //get the value from UI
    let value =parseInt(countvalue.innerText);
    //update the value
    value--;
    //set the value onto UI
    countvalue.innerText=value;
};

//Arrow function

const increment=()=>{
    //get the value from UI
    let value =parseInt(countvalue.innerText);
    //update the value
    value++;
    //set the value onto UI
    countvalue.innerText=value;
};