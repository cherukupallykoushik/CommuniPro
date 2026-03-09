function login(){
window.location.href="dashboard.html"
}

function correct(){
document.getElementById("result").innerHTML="Correct Answer! 🎉"
}

function wrong(){
document.getElementById("result").innerHTML="Wrong Answer"
}
function finishTest(){

localStorage.setItem("finalScore", score)

window.location.href="medals.html"

}
function updateScore(){

document.getElementById("score").innerText = score

localStorage.setItem("finalScore", score)

}