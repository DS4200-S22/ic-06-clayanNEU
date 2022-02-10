/*

In-class activity 07 starter code
Prof. Mosca 
Modified: 12/06/21 

*/

//Starter code for Button 1 click
// You will need to call this function when Button 1 is clicked
// You will need to modiffy the body of this function as described in the assignment Readme
function button1Clicked() {
  console.log("Button 1 was clicked");
  let button = document.getElementById("random_num");
  button.innerHTML = Math.random();
}

function button2Clicked() {
  console.log("Button 2 was clicked");
  let circle1 = document.getElementById("circle1");
  if ((circle1.style.fill = "blue")) {
    circle1.style.fill = "green";
  } else {
    circle1.style.fill = "blue";
  }
}
