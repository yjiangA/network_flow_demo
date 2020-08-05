var texts = ["edges", "change", "send", "sendmore", "sendback", "min", "resedges"]


for(item in texts){
    function a(item) {
    var name = texts[item];
    var randomColor = Math.floor(Math.random()*16777215).toString(16);

    document.getElementById(name).style.backgroundColor = "#" + randomColor;

    document.getElementById(name).onclick = function(){
    document.getElementById(name+"_hint").style.visibility="visible";
    document.getElementById(name+"_hint").style.backgroundColor="#" + randomColor;
        }
    }
    a(item)
}


var cycle = document.getElementById("cycle")
document.getElementById("cycle_play").onclick = function(){
    cycle.getElementsByClassName("flow_demo")[0].style.display="block";
    var lines = cycle.getElementsByClassName("flow")

    lines[1].style.display="block";
    setTimeout(() => {lines[2].style.display="block";}, 2500);
    setTimeout(() => {lines[6].style.display="block";}, 7500);
}

document.getElementById("cycle_reset").onclick = function(){
    window.location.reload();
}

var fill = document.getElementById("fill")

document.getElementById("fill_play").onclick = function(){
    fill.getElementsByClassName("flow_demo")[0].style.display="block";
    var lines = fill.getElementsByClassName("flow")

    lines[0].style.display="block";
    fill.getElementById("sv1_flow_v").firstChild.nodeValue="12/16";;
    fill.getElementById("sv1_flow_v").style.fill="blue";

    setTimeout(() => {lines[1].style.display="block";
    fill.getElementById("v1v3_flow_v").firstChild.nodeValue="12/12";;
    fill.getElementById("v1v3_flow_v").style.fill="blue";
    }, 3000);
    
    setTimeout(() => {lines[8].style.display="block";
    fill.getElementById("v3t_flow_v").firstChild.nodeValue="19/20";;
    fill.getElementById("v3t_flow_v").style.fill="blue";
    }, 7000);

}

document.getElementById("fill_reset").onclick = function(){
    window.location.reload();
}


