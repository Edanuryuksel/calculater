let input1=document.querySelector("#first")
let input2=document.querySelector("#second")
let calculate=document.querySelector("#check")
let option=document.querySelector("#option");
let result=document.querySelector("#result");
let r=0;
calculate.addEventListener("click",()=>{
    if(option.value=="+"){
        r=Number(input1.value) + Number(input2.value)
        result.innerHTML=r;
    }
    else if(option.value=="-"){
        r=Number(input1.value) - Number(input2.value)
        result.innerHTML=r;
    }
    else if(option.value=="/"){
        r=Number(input1.value) / Number(input2.value)
        result.innerHTML=r;
    }
    else {
        r=Number(input1.value) * Number(input2.value)
        result.innerHTML=r;
    }
})