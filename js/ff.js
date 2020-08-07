var hints = document.getElementsByClassName("algo_hint");

for (var i=0; i < 7; i++) {
    hints[i].style.visibility="hidden";
}

document.getElementById("see_explain").onclick = function(){
    var seehints = document.getElementsByClassName("algo_hint");

    for (var i=0; i < 7; i++) {
        seehints[i].style.visibility="visible";
        seehints[i].style.backgroundColor="lightgreen";
    }   
}

// document.getElementById("initialize").onclick = function(){
// }