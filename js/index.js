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
       lines[5].style.display="block";

        setTimeout(() => {lines[6].style.display="block";}, 2500);
        setTimeout(() => {lines[1].style.display="block";}, 5000);
        setTimeout(() => {lines[2].style.display="block";}, 7500);

        setTimeout(() => {lines[3].style.display="block";}, 12000);

        setTimeout(() => {lines[7].style.display="block";}, 15000);
        setTimeout(() => {lines[8].style.display="block";
        lines[4].style.display="block";}, 18000);
}


document.getElementById("flow_reset").onclick = function(){
    window.location.reload();
}

document.getElementById("v1_anime").onclick = function(){
    document.getElementsByClassName("capacity_value")[0].style.display="none";    
    document.getElementsByClassName("flow_value")[0].style.display="block";
    
    document.getElementById("v1").style.fill="red";
    document.getElementById("v2").style.fill="lightgreen";
    document.getElementById("v3").style.fill="lightgreen";
    document.getElementById("v4").style.fill="lightgreen";
    
    document.getElementById("sv1_flow_v").style.fill="red";
    document.getElementById("v1v3_flow_v").style.fill="purple";
    document.getElementById("v3v2_flow_v").style.fill="black";
    document.getElementById("v2v4_flow_v").style.fill="black";
    document.getElementById("v4t_flow_v").style.fill="black";
    document.getElementById("sv2_flow_v").style.fill="black";
    document.getElementById("v2v1_flow_v").style.fill="red";
    document.getElementById("v4v3_flow_v").style.fill="black";
    document.getElementById("v3t_flow_v").style.fill="black";
    
    document.getElementById("v1_sum").style.visibility="visible";
    document.getElementById("v2_sum").style.visibility="hidden";
    document.getElementById("v3_sum").style.visibility="hidden";
    document.getElementById("v4_sum").style.visibility="hidden";
}

document.getElementById("v2_anime").onclick = function(){
    document.getElementsByClassName("capacity_value")[0].style.display="none";    
    document.getElementsByClassName("flow_value")[0].style.display="block";
    
    document.getElementById("v1").style.fill="lightgreen";
    document.getElementById("v2").style.fill="red";
    document.getElementById("v3").style.fill="lightgreen";
    document.getElementById("v4").style.fill="lightgreen";
    
    document.getElementById("sv1_flow_v").style.fill="black";
    document.getElementById("v1v3_flow_v").style.fill="black";
    document.getElementById("v3v2_flow_v").style.fill="red";
    document.getElementById("v2v4_flow_v").style.fill="purple";
    document.getElementById("v4t_flow_v").style.fill="black";
    document.getElementById("sv2_flow_v").style.fill="red";
    document.getElementById("v2v1_flow_v").style.fill="purple";
    document.getElementById("v4v3_flow_v").style.fill="black";
    document.getElementById("v3t_flow_v").style.fill="black";
    
    document.getElementById("v1_sum").style.visibility="hidden";
    document.getElementById("v2_sum").style.visibility="visible";
    document.getElementById("v3_sum").style.visibility="hidden";
    document.getElementById("v4_sum").style.visibility="hidden";
}


document.getElementById("v3_anime").onclick = function(){
    document.getElementsByClassName("capacity_value")[0].style.display="none";    
    document.getElementsByClassName("flow_value")[0].style.display="block";
    
    document.getElementById("v1").style.fill="lightgreen";
    document.getElementById("v2").style.fill="lightgreen";
    document.getElementById("v3").style.fill="red";
    document.getElementById("v4").style.fill="lightgreen";
    
    document.getElementById("sv1_flow_v").style.fill="black";
    document.getElementById("v1v3_flow_v").style.fill="red";
    document.getElementById("v3v2_flow_v").style.fill="purple";
    document.getElementById("v2v4_flow_v").style.fill="black";
    document.getElementById("v4t_flow_v").style.fill="black";
    document.getElementById("sv2_flow_v").style.fill="black";
    document.getElementById("v2v1_flow_v").style.fill="black";
    document.getElementById("v4v3_flow_v").style.fill="red";
    document.getElementById("v3t_flow_v").style.fill="purple";
    
    document.getElementById("v1_sum").style.visibility="hidden";
    document.getElementById("v2_sum").style.visibility="hidden";
    document.getElementById("v3_sum").style.visibility="visible";
    document.getElementById("v4_sum").style.visibility="hidden";
}


document.getElementById("v4_anime").onclick = function(){
    document.getElementsByClassName("capacity_value")[0].style.display="none";    
    document.getElementsByClassName("flow_value")[0].style.display="block";
    
    document.getElementById("v1").style.fill="lightgreen";
    document.getElementById("v2").style.fill="lightgreen";
    document.getElementById("v3").style.fill="lightgreen";
    document.getElementById("v4").style.fill="lightgreen";
    
    document.getElementById("sv1_flow_v").style.fill="black";
    document.getElementById("v1v3_flow_v").style.fill="black";
    document.getElementById("v3v2_flow_v").style.fill="black";
    document.getElementById("v2v4_flow_v").style.fill="red";
    document.getElementById("v4t_flow_v").style.fill="purple";
    document.getElementById("sv2_flow_v").style.fill="black";
    document.getElementById("v2v1_flow_v").style.fill="black";
    document.getElementById("v4v3_flow_v").style.fill="purple";
    document.getElementById("v3t_flow_v").style.fill="black";
    
    document.getElementById("v1_sum").style.visibility="hidden";
    document.getElementById("v2_sum").style.visibility="hidden";
    document.getElementById("v3_sum").style.visibility="hidden";
    document.getElementById("v4_sum").style.visibility="visible";
}

document.getElementById("reset_anime").onclick = function(){
    document.getElementsByClassName("capacity_value")[0].style.display="none";    
    document.getElementsByClassName("flow_value")[0].style.display="block";
    
    document.getElementById("v1").style.fill="lightgreen";
    document.getElementById("v2").style.fill="lightgreen";
    document.getElementById("v3").style.fill="lightgreen";
    document.getElementById("v4").style.fill="lightgreen";
    
    document.getElementById("sv1_flow_v").style.fill="black";
    document.getElementById("v1v3_flow_v").style.fill="black";
    document.getElementById("v3v2_flow_v").style.fill="black";
    document.getElementById("v2v4_flow_v").style.fill="black";
    document.getElementById("v4t_flow_v").style.fill="black";
    document.getElementById("sv2_flow_v").style.fill="black";
    document.getElementById("v2v1_flow_v").style.fill="black";
    document.getElementById("v4v3_flow_v").style.fill="black";
    document.getElementById("v3t_flow_v").style.fill="black";
    
    document.getElementById("v1_sum").style.visibility="hidden";
    document.getElementById("v2_sum").style.visibility="hidden";
    document.getElementById("v3_sum").style.visibility="hidden";
    document.getElementById("v4_sum").style.visibility="hidden";
}

document.getElementById("reset_anime").onclick = function(){
    document.getElementsByClassName("capacity_value")[0].style.display="none";    
    document.getElementsByClassName("flow_value")[0].style.display="block";
    
    document.getElementById("v1").style.fill="lightgreen";
    document.getElementById("v2").style.fill="lightgreen";
    document.getElementById("v3").style.fill="lightgreen";
    document.getElementById("v4").style.fill="lightgreen";
    
    document.getElementById("sv1_flow_v").style.fill="black";
    document.getElementById("v1v3_flow_v").style.fill="black";
    document.getElementById("v3v2_flow_v").style.fill="black";
    document.getElementById("v2v4_flow_v").style.fill="black";
    document.getElementById("v4t_flow_v").style.fill="black";
    document.getElementById("sv2_flow_v").style.fill="black";
    document.getElementById("v2v1_flow_v").style.fill="black";
    document.getElementById("v4v3_flow_v").style.fill="black";
    document.getElementById("v3t_flow_v").style.fill="black";
    
    document.getElementById("v1_sum").style.visibility="hidden";
    document.getElementById("v2_sum").style.visibility="hidden";
    document.getElementById("v3_sum").style.visibility="hidden";
    document.getElementById("v4_sum").style.visibility="hidden";
}

document.getElementById("final_sum").onclick = function(){
    document.getElementsByClassName("capacity_value")[0].style.display="none";    
    document.getElementsByClassName("flow_value")[0].style.display="block";
    
    document.getElementById("v1").style.fill="lightgreen";
    document.getElementById("v2").style.fill="lightgreen";
    document.getElementById("v3").style.fill="lightgreen";
    document.getElementById("v4").style.fill="lightgreen";
    
    document.getElementById("sv1_flow_v").style.fill="black";
    document.getElementById("v1v3_flow_v").style.fill="black";
    document.getElementById("v3v2_flow_v").style.fill="black";
    document.getElementById("v2v4_flow_v").style.fill="black";
    document.getElementById("v4t_flow_v").style.fill="red";
    document.getElementById("sv2_flow_v").style.fill="black";
    document.getElementById("v2v1_flow_v").style.fill="black";
    document.getElementById("v4v3_flow_v").style.fill="black";
    document.getElementById("v3t_flow_v").style.fill="red";
    
    document.getElementById("v1_sum").style.visibility="hidden";
    document.getElementById("v2_sum").style.visibility="hidden";
    document.getElementById("v3_sum").style.visibility="hidden";
    document.getElementById("v4_sum").style.visibility="hidden";
    document.getElementById("t_sum").style.visibility="visible";
}


document.getElementById("final_sum_reset").onclick = function(){
    document.getElementsByClassName("capacity_value")[0].style.display="none";    
    document.getElementsByClassName("flow_value")[0].style.display="block";
    
    document.getElementById("v1").style.fill="lightgreen";
    document.getElementById("v2").style.fill="lightgreen";
    document.getElementById("v3").style.fill="lightgreen";
    document.getElementById("v4").style.fill="lightgreen";
    
    document.getElementById("sv1_flow_v").style.fill="black";
    document.getElementById("v1v3_flow_v").style.fill="black";
    document.getElementById("v3v2_flow_v").style.fill="black";
    document.getElementById("v2v4_flow_v").style.fill="black";
    document.getElementById("v4t_flow_v").style.fill="black";
    document.getElementById("sv2_flow_v").style.fill="black";
    document.getElementById("v2v1_flow_v").style.fill="black";
    document.getElementById("v4v3_flow_v").style.fill="black";
    document.getElementById("v3t_flow_v").style.fill="black";
    
    document.getElementById("v1_sum").style.visibility="hidden";
    document.getElementById("v2_sum").style.visibility="hidden";
    document.getElementById("v3_sum").style.visibility="hidden";
    document.getElementById("v4_sum").style.visibility="hidden";
    document.getElementById("t_sum").style.visibility="hidden";
}



