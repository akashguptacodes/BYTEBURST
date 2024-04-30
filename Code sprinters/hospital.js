let slide = document.querySelectorAll(".patientReview");
 let card = document.querySelectorAll(".card");
 let closeBtn = document.getElementById("closeBtn");
 let connectBtn = document.getElementById("connectBtn");


 let count = 0;

 slide.forEach(function(slides, index){
    slides.style.left=`${index * 100}%`
 })

 function myFun(){
    slide.forEach(function(curVal){
        curVal.style.transform=`translateX(-${count * 100}%)`
    })
 }
 setInterval(function(){
    count++;
    if(count == slide.length){
        count=0;
    }
    myFun()
 }, 2000)

 
       closeBtn.addEventListener("click", function(){
        document.querySelector(".detail").style.display="none"
       })

 connectBtn.addEventListener("click", function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(email.value == "" && pass.value == "" ){
        alert("Enter Details")
    }else{
        alert("You Logged IN")
    }
 })