console.log('Vishal');

// 4 js projects with chai or code 

let body = document.querySelector("body");
let button = document.querySelectorAll(".button");

button.forEach(function (button){
    console.log(button);
    button.addEventListener("click", function(e){
        console.log(e);
        // console.log(e.target);
      if(e.target.id === "blue"){
        body.style.backgroundColor = e.target.id;
      }
      if(e.target.id === "red"){
        body.style.backgroundColor = e.target.id;
      }
      if(e.target.id === "yellow"){
        body.style.backgroundColor = e.target.id;
      }
      if(e.target.id === "pink"){
        body.style.backgroundColor = e.target.id;
      }
        
    })
   
})