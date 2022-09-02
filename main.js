const li = document.querySelectorAll('li');
const btnRate = document.querySelector('button');
const box1 = document.getElementById("menu");
const box2 = document.getElementById('menu2');
const div = document.querySelector(".addText");
let numOfRate = "";


li.forEach(num => {
num.addEventListener("click", (e) => {
  numOfRate = e.target.value; 
  for(let i = 0; i < li.length; i++){
    li[i].classList.remove("choose")
  }
  num.classList.add("choose")
})
})

function addRate(){
if(!numOfRate){
  return alert('Choose number from 1 to 5 :)');
}
box1.style.display = "none";
btnRate.style.display = "none";
box2.style.display = "block"; 
div.textContent = numOfRate;
}

btnRate.addEventListener("click", addRate)