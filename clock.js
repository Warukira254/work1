let secondHand=document.querySelector("#sec")
let minHand=document.querySelector("#min")
let hourHand=document.querySelector("#hr")

setInterval(clockRotating, 1000)

function clockRotating(){
    var date=new Date();
    var getSeconds=date.getSeconds()/60;
    var getMinutes=date.getMinutes()/60;
    var getHours=date.getHours()/12;

    secondHand.style.transform="rotate("+getSeconds*360 +"deg)"
    hourHand.style.transform="rotate("+getHours*360 +"deg)"
    minHand.style.transform="rotate("+getMinutes*360 +"deg)"



    
   

    // console.log(getSeconds)
    // console.log(getMinutes)
    // console.log(getHours)








}