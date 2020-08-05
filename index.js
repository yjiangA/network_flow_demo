
document.getElementById("eg_flow").onclick = function(){
    document.getElementsByClassName("capacity_value")[0].style.display="none";
    document.getElementsByClassName("flow_value")[0].style.display="block";
}

document.getElementById("eg_capacity").onclick = function(){
    document.getElementsByClassName("flow_value")[0].style.display="none";
    document.getElementsByClassName("capacity_value")[0].style.display="block";
}


document.getElementById("flow_anime").onclick = function(){
    document.getElementsByClassName("flow_demo")[0].style.display="block";
    var lines = document.getElementsByClassName("flow")

       lines[0].style.display="block";
        setTimeout(() => {lines[1].style.display="block";}, 2500);

        lines[0].style.cssText += "stroke-dasharray: 1000;stroke-dashoffset: 1000;animation: dash 25s linear forwards;";
}


document.getElementById("flow_reset").onclick = function(){
    window.location.reload();
}