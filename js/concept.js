var texts = ["edges", "change", "send", "sendmore", "sendback", "min", "resedges",
"uins1", "uins2", "vint1", "vint2", "fuv", "fvu", "uins3", "vint3", "cuv",
"nf_def", "uv_sum", "vu_sum", "c_def"]


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

var net_flow_eg = document.getElementById("net_flow_eg")

document.getElementById("cut1").onclick = function(){
    document.getElementById("c1").style.visibility="visible";
    document.getElementById("c2").style.visibility="hidden";
    document.getElementById("c3").style.visibility="hidden";
    document.getElementById("c4").style.visibility="hidden";

    net_flow_eg.getElementById("s").style.stroke="green";
    net_flow_eg.getElementById("s").style.strokeWidth="6";
    net_flow_eg.getElementById("v1").style.stroke="green";
    net_flow_eg.getElementById("v1").style.strokeWidth="6";
    net_flow_eg.getElementById("v2").style.stroke="green";
    net_flow_eg.getElementById("v2").style.strokeWidth="6";

    net_flow_eg.getElementById("v3").style.stroke="blue";
    net_flow_eg.getElementById("v3").style.strokeWidth="6";
    net_flow_eg.getElementById("v4").style.stroke="blue";
    net_flow_eg.getElementById("v4").style.strokeWidth="6";
    net_flow_eg.getElementById("t").style.stroke="blue";
    net_flow_eg.getElementById("t").style.strokeWidth="6";

    net_flow_eg.getElementById("sv1").style.stroke="black";
    net_flow_eg.getElementById("v1v3").style.stroke="blue";
    net_flow_eg.getElementById("v2v1").style.stroke="black";
    net_flow_eg.getElementById("v4v3").style.stroke="black";
    net_flow_eg.getElementById("v3v2").style.stroke="green";
    net_flow_eg.getElementById("v2v4").style.stroke="blue";
    net_flow_eg.getElementById("v4t").style.stroke="black";
    net_flow_eg.getElementById("sv2").style.stroke="black";
    net_flow_eg.getElementById("v3t").style.stroke="black";

    document.getElementById("c1_nf").style.visibility="visible";
    document.getElementById("c2_nf").style.visibility="hidden";
    document.getElementById("c3_nf").style.visibility="hidden";
    document.getElementById("c4_nf").style.visibility="hidden";
}

document.getElementById("cut2").onclick = function(){
    document.getElementById("c1").style.visibility="hidden";
    document.getElementById("c2").style.visibility="visible";
    document.getElementById("c3").style.visibility="hidden";
    document.getElementById("c4").style.visibility="hidden";

    net_flow_eg.getElementById("s").style.stroke="green";
    net_flow_eg.getElementById("s").style.strokeWidth="6";
    net_flow_eg.getElementById("v1").style.stroke="blue";
    net_flow_eg.getElementById("v1").style.strokeWidth="6";
    net_flow_eg.getElementById("v2").style.stroke="blue";
    net_flow_eg.getElementById("v2").style.strokeWidth="6";

    net_flow_eg.getElementById("v3").style.stroke="blue";
    net_flow_eg.getElementById("v3").style.strokeWidth="6";
    net_flow_eg.getElementById("v4").style.stroke="blue";
    net_flow_eg.getElementById("v4").style.strokeWidth="6";
    net_flow_eg.getElementById("t").style.stroke="blue";
    net_flow_eg.getElementById("t").style.strokeWidth="6";

    net_flow_eg.getElementById("sv1").style.stroke="green";
    net_flow_eg.getElementById("v1v3").style.stroke="black";
    net_flow_eg.getElementById("v2v1").style.stroke="black";
    net_flow_eg.getElementById("v4v3").style.stroke="black";
    net_flow_eg.getElementById("v3v2").style.stroke="black";
    net_flow_eg.getElementById("v2v4").style.stroke="black";
    net_flow_eg.getElementById("v4t").style.stroke="black";
    net_flow_eg.getElementById("sv2").style.stroke="green";
    net_flow_eg.getElementById("v3t").style.stroke="black";

    document.getElementById("c1_nf").style.visibility="hidden";
    document.getElementById("c2_nf").style.visibility="visible";
    document.getElementById("c3_nf").style.visibility="hidden";
document.getElementById("c4_nf").style.visibility="hidden";
}

document.getElementById("cut3").onclick = function(){
    document.getElementById("c1").style.visibility="hidden";
    document.getElementById("c2").style.visibility="hidden";
    document.getElementById("c3").style.visibility="visible";
    document.getElementById("c4").style.visibility="hidden";

    net_flow_eg.getElementById("s").style.stroke="green";
    net_flow_eg.getElementById("s").style.strokeWidth="6";
    net_flow_eg.getElementById("v1").style.stroke="green";
    net_flow_eg.getElementById("v1").style.strokeWidth="6";
    net_flow_eg.getElementById("v2").style.stroke="green";
    net_flow_eg.getElementById("v2").style.strokeWidth="6";

    net_flow_eg.getElementById("v3").style.stroke="green";
    net_flow_eg.getElementById("v3").style.strokeWidth="6";
    net_flow_eg.getElementById("v4").style.stroke="green";
    net_flow_eg.getElementById("v4").style.strokeWidth="6";
    net_flow_eg.getElementById("t").style.stroke="blue";
    net_flow_eg.getElementById("t").style.strokeWidth="6";

    net_flow_eg.getElementById("sv1").style.stroke="black";
    net_flow_eg.getElementById("v1v3").style.stroke="black";
    net_flow_eg.getElementById("v2v1").style.stroke="black";
    net_flow_eg.getElementById("v4v3").style.stroke="black";
    net_flow_eg.getElementById("v3v2").style.stroke="black";
    net_flow_eg.getElementById("v2v4").style.stroke="black";
    net_flow_eg.getElementById("v4t").style.stroke="blue";
    net_flow_eg.getElementById("sv2").style.stroke="black";
    net_flow_eg.getElementById("v3t").style.stroke="blue";

    document.getElementById("c1_nf").style.visibility="hidden";
    document.getElementById("c2_nf").style.visibility="hidden";
    document.getElementById("c3_nf").style.visibility="visible";
    document.getElementById("c4_nf").style.visibility="hidden";
}

document.getElementById("cut4").onclick = function(){
    document.getElementById("c1").style.visibility="hidden";
    document.getElementById("c2").style.visibility="hidden";
    document.getElementById("c3").style.visibility="hidden";
    document.getElementById("c4").style.visibility="visible";

    net_flow_eg.getElementById("s").style.stroke="green";
    net_flow_eg.getElementById("s").style.strokeWidth="6";
    net_flow_eg.getElementById("v1").style.stroke="blue";
    net_flow_eg.getElementById("v1").style.strokeWidth="6";
    net_flow_eg.getElementById("v2").style.stroke="green";
    net_flow_eg.getElementById("v2").style.strokeWidth="6";

    net_flow_eg.getElementById("v3").style.stroke="green";
    net_flow_eg.getElementById("v3").style.strokeWidth="6";
    net_flow_eg.getElementById("v4").style.stroke="blue";
    net_flow_eg.getElementById("v4").style.strokeWidth="6";
    net_flow_eg.getElementById("t").style.stroke="blue";
    net_flow_eg.getElementById("t").style.strokeWidth="6";

    net_flow_eg.getElementById("sv1").style.stroke="blue";
    net_flow_eg.getElementById("v1v3").style.stroke="green";
    net_flow_eg.getElementById("v2v1").style.stroke="blue";
    net_flow_eg.getElementById("v4v3").style.stroke="green";
    net_flow_eg.getElementById("v3v2").style.stroke="black";
    net_flow_eg.getElementById("v2v4").style.stroke="blue";
    net_flow_eg.getElementById("v4t").style.stroke="black";
    net_flow_eg.getElementById("sv2").style.stroke="black";
    net_flow_eg.getElementById("v3t").style.stroke="blue";

    document.getElementById("c1_nf").style.visibility="hidden";
    document.getElementById("c2_nf").style.visibility="hidden";
    document.getElementById("c3_nf").style.visibility="hidden";
    document.getElementById("c4_nf").style.visibility="visible";
}

document.getElementById("cut_reset").onclick = function(){
    document.getElementById("c1").style.visibility="hidden";
    document.getElementById("c2").style.visibility="hidden";
    document.getElementById("c3").style.visibility="hidden";
    document.getElementById("c4").style.visibility="hidden";

    net_flow_eg.getElementById("s").style.stroke="blue";
    net_flow_eg.getElementById("s").style.strokeWidth="1";
    net_flow_eg.getElementById("v1").style.stroke="green";
    net_flow_eg.getElementById("v1").style.strokeWidth="1";
    net_flow_eg.getElementById("v2").style.stroke="green";
    net_flow_eg.getElementById("v2").style.strokeWidth="1";

    net_flow_eg.getElementById("v3").style.stroke="green";
    net_flow_eg.getElementById("v3").style.strokeWidth="1";
    net_flow_eg.getElementById("v4").style.stroke="green";
    net_flow_eg.getElementById("v4").style.strokeWidth="1";
    net_flow_eg.getElementById("t").style.stroke="blue";
    net_flow_eg.getElementById("t").style.strokeWidth="1";

    net_flow_eg.getElementById("sv1").style.stroke="black";
    net_flow_eg.getElementById("v1v3").style.stroke="black";
    net_flow_eg.getElementById("v2v1").style.stroke="black";
    net_flow_eg.getElementById("v4v3").style.stroke="black";
    net_flow_eg.getElementById("v3v2").style.stroke="black";
    net_flow_eg.getElementById("v2v4").style.stroke="black";
    net_flow_eg.getElementById("v4t").style.stroke="black";
    net_flow_eg.getElementById("sv2").style.stroke="black";
    net_flow_eg.getElementById("v3t").style.stroke="black";

    document.getElementById("c1_nf").style.visibility="hidden";
    document.getElementById("c2_nf").style.visibility="hidden";
    document.getElementById("c3_nf").style.visibility="hidden";
    document.getElementById("c4_nf").style.visibility="hidden";
}


var capacity_eg = document.getElementById("capacity_eg")

document.getElementById("cut1_c").onclick = function(){
    capacity_eg.getElementById("c1").style.visibility="visible";
    capacity_eg.getElementById("c2").style.visibility="hidden";
    capacity_eg.getElementById("c3").style.visibility="hidden";
    capacity_eg.getElementById("c4").style.visibility="hidden";

    capacity_eg.getElementById("s").style.stroke="green";
    capacity_eg.getElementById("s").style.strokeWidth="6";
    capacity_eg.getElementById("v1").style.stroke="green";
    capacity_eg.getElementById("v1").style.strokeWidth="6";
    capacity_eg.getElementById("v2").style.stroke="green";
    capacity_eg.getElementById("v2").style.strokeWidth="6";

    capacity_eg.getElementById("v3").style.stroke="blue";
    capacity_eg.getElementById("v3").style.strokeWidth="6";
    capacity_eg.getElementById("v4").style.stroke="blue";
    capacity_eg.getElementById("v4").style.strokeWidth="6";
    capacity_eg.getElementById("t").style.stroke="blue";
    capacity_eg.getElementById("t").style.strokeWidth="6";

    capacity_eg.getElementById("sv1").style.stroke="black";
    capacity_eg.getElementById("v1v3").style.stroke="blue";
    capacity_eg.getElementById("v2v1").style.stroke="black";
    capacity_eg.getElementById("v4v3").style.stroke="black";
    capacity_eg.getElementById("v3v2").style.stroke="green";
    capacity_eg.getElementById("v2v4").style.stroke="blue";
    capacity_eg.getElementById("v4t").style.stroke="black";
    capacity_eg.getElementById("sv2").style.stroke="black";
    capacity_eg.getElementById("v3t").style.stroke="black";

    document.getElementById("c1_capa").style.visibility="visible";
    document.getElementById("c2_capa").style.visibility="hidden";
    document.getElementById("c3_capa").style.visibility="hidden";
    document.getElementById("c4_capa").style.visibility="hidden";
}

document.getElementById("cut2_c").onclick = function(){
    capacity_eg.getElementById("c1").style.visibility="hidden";
    capacity_eg.getElementById("c2").style.visibility="visible";
    capacity_eg.getElementById("c3").style.visibility="hidden";
    capacity_eg.getElementById("c4").style.visibility="hidden";

    capacity_eg.getElementById("s").style.stroke="green";
    capacity_eg.getElementById("s").style.strokeWidth="6";
    capacity_eg.getElementById("v1").style.stroke="blue";
    capacity_eg.getElementById("v1").style.strokeWidth="6";
    capacity_eg.getElementById("v2").style.stroke="blue";
    capacity_eg.getElementById("v2").style.strokeWidth="6";

    capacity_eg.getElementById("v3").style.stroke="blue";
    capacity_eg.getElementById("v3").style.strokeWidth="6";
    capacity_eg.getElementById("v4").style.stroke="blue";
    capacity_eg.getElementById("v4").style.strokeWidth="6";
    capacity_eg.getElementById("t").style.stroke="blue";
    capacity_eg.getElementById("t").style.strokeWidth="6";

    capacity_eg.getElementById("sv1").style.stroke="green";
    capacity_eg.getElementById("v1v3").style.stroke="black";
    capacity_eg.getElementById("v2v1").style.stroke="black";
    capacity_eg.getElementById("v4v3").style.stroke="black";
    capacity_eg.getElementById("v3v2").style.stroke="black";
    capacity_eg.getElementById("v2v4").style.stroke="black";
    capacity_eg.getElementById("v4t").style.stroke="black";
    capacity_eg.getElementById("sv2").style.stroke="green";
    capacity_eg.getElementById("v3t").style.stroke="black";

    document.getElementById("c1_capa").style.visibility="hidden";
    document.getElementById("c2_capa").style.visibility="visible";
    document.getElementById("c3_capa").style.visibility="hidden";
    document.getElementById("c4_capa").style.visibility="hidden";
}

document.getElementById("cut3_c").onclick = function(){
    capacity_eg.getElementById("c1").style.visibility="hidden";
    capacity_eg.getElementById("c2").style.visibility="hidden";
    capacity_eg.getElementById("c3").style.visibility="visible";
    capacity_eg.getElementById("c4").style.visibility="hidden";

    capacity_eg.getElementById("s").style.stroke="green";
    capacity_eg.getElementById("s").style.strokeWidth="6";
    capacity_eg.getElementById("v1").style.stroke="green";
    capacity_eg.getElementById("v1").style.strokeWidth="6";
    capacity_eg.getElementById("v2").style.stroke="green";
    capacity_eg.getElementById("v2").style.strokeWidth="6";

    capacity_eg.getElementById("v3").style.stroke="green";
    capacity_eg.getElementById("v3").style.strokeWidth="6";
    capacity_eg.getElementById("v4").style.stroke="green";
    capacity_eg.getElementById("v4").style.strokeWidth="6";
    capacity_eg.getElementById("t").style.stroke="blue";
    capacity_eg.getElementById("t").style.strokeWidth="6";

    capacity_eg.getElementById("sv1").style.stroke="black";
    capacity_eg.getElementById("v1v3").style.stroke="black";
    capacity_eg.getElementById("v2v1").style.stroke="black";
    capacity_eg.getElementById("v4v3").style.stroke="black";
    capacity_eg.getElementById("v3v2").style.stroke="black";
    capacity_eg.getElementById("v2v4").style.stroke="black";
    capacity_eg.getElementById("v4t").style.stroke="blue";
    capacity_eg.getElementById("sv2").style.stroke="black";
    capacity_eg.getElementById("v3t").style.stroke="blue";

    document.getElementById("c1_capa").style.visibility="hidden";
    document.getElementById("c2_capa").style.visibility="hidden";
    document.getElementById("c3_capa").style.visibility="visible";
    document.getElementById("c4_capa").style.visibility="hidden";
}

document.getElementById("cut4_c").onclick = function(){
    capacity_eg.getElementById("c1").style.visibility="hidden";
    capacity_eg.getElementById("c2").style.visibility="hidden";
    capacity_eg.getElementById("c3").style.visibility="hidden";
    capacity_eg.getElementById("c4").style.visibility="visible";

    capacity_eg.getElementById("s").style.stroke="green";
    capacity_eg.getElementById("s").style.strokeWidth="6";
    capacity_eg.getElementById("v1").style.stroke="blue";
    capacity_eg.getElementById("v1").style.strokeWidth="6";
    capacity_eg.getElementById("v2").style.stroke="green";
    capacity_eg.getElementById("v2").style.strokeWidth="6";

    capacity_eg.getElementById("v3").style.stroke="green";
    capacity_eg.getElementById("v3").style.strokeWidth="6";
    capacity_eg.getElementById("v4").style.stroke="blue";
    capacity_eg.getElementById("v4").style.strokeWidth="6";
    capacity_eg.getElementById("t").style.stroke="blue";
    capacity_eg.getElementById("t").style.strokeWidth="6";

    capacity_eg.getElementById("sv1").style.stroke="blue";
    capacity_eg.getElementById("v1v3").style.stroke="green";
    capacity_eg.getElementById("v2v1").style.stroke="blue";
    capacity_eg.getElementById("v4v3").style.stroke="green";
    capacity_eg.getElementById("v3v2").style.stroke="black";
    capacity_eg.getElementById("v2v4").style.stroke="blue";
    capacity_eg.getElementById("v4t").style.stroke="black";
    capacity_eg.getElementById("sv2").style.stroke="black";
    capacity_eg.getElementById("v3t").style.stroke="blue";

    document.getElementById("c1_capa").style.visibility="hidden";
    document.getElementById("c2_capa").style.visibility="hidden";
    document.getElementById("c3_capa").style.visibility="hidden";
    document.getElementById("c4_capa").style.visibility="visible";
}

document.getElementById("cut_reset_c").onclick = function(){
    capacity_eg.getElementById("c1").style.visibility="hidden";
    capacity_eg.getElementById("c2").style.visibility="hidden";
    capacity_eg.getElementById("c3").style.visibility="hidden";
    capacity_eg.getElementById("c4").style.visibility="hidden";

    capacity_eg.getElementById("s").style.stroke="blue";
    capacity_eg.getElementById("s").style.strokeWidth="1";
    capacity_eg.getElementById("v1").style.stroke="green";
    capacity_eg.getElementById("v1").style.strokeWidth="1";
    capacity_eg.getElementById("v2").style.stroke="green";
    capacity_eg.getElementById("v2").style.strokeWidth="1";

    capacity_eg.getElementById("v3").style.stroke="green";
    capacity_eg.getElementById("v3").style.strokeWidth="1";
    capacity_eg.getElementById("v4").style.stroke="green";
    capacity_eg.getElementById("v4").style.strokeWidth="1";
    capacity_eg.getElementById("t").style.stroke="blue";
    capacity_eg.getElementById("t").style.strokeWidth="1";

    capacity_eg.getElementById("sv1").style.stroke="black";
    capacity_eg.getElementById("v1v3").style.stroke="black";
    capacity_eg.getElementById("v2v1").style.stroke="black";
    capacity_eg.getElementById("v4v3").style.stroke="black";
    capacity_eg.getElementById("v3v2").style.stroke="black";
    capacity_eg.getElementById("v2v4").style.stroke="black";
    capacity_eg.getElementById("v4t").style.stroke="black";
    capacity_eg.getElementById("sv2").style.stroke="black";
    capacity_eg.getElementById("v3t").style.stroke="black";

    document.getElementById("c1_capa").style.visibility="hidden";
    document.getElementById("c2_capa").style.visibility="hidden";
    document.getElementById("c3_capa").style.visibility="hidden";
    document.getElementById("c4_capa").style.visibility="hidden";
}


var lemmas = ['26_1', "26_3", "26_4"]


for(item in lemmas){
    function b(item) {
        var lem = lemmas[item];
        document.getElementById(lem).onclick = function show() {
            window.open ("./popups/"+ lem +".html", "", "height=500, width=1250, top=200, left=300, titlebar=no, toolbar=no, menubar=no, scrollbars=yes, resizable=no,location=no, status=no");
        }
    }
    b(item)
}

document.getElementById("see_remain").onclick = function(){
    document.getElementById("yellow_equations").style.visibility="visible";
    document.getElementById("reverse_equation").style.visibility="hidden";
    document.getElementById("remove_equation").style.visibility="hidden";
    document.getElementById("final_equation").style.visibility="hidden";

    document.getElementById("blue_lines").style.visibility="hidden";
    document.getElementById("yellow_lines").style.visibility="visible";

    document.getElementById("blue_nums").style.visibility="hidden";
    document.getElementById("yellow_nums").style.visibility="visible";


    document.getElementById("v1v3_yellow").style.visibility="visible";
    document.getElementById("v4v3_yellow").style.visibility="visible";
    document.getElementById("v4t_yellow").style.visibility="visible";

    document.getElementById("v1v3_yellow_num").style.visibility="visible";
    document.getElementById("v4v3_yellow_num").style.visibility="visible";
    document.getElementById("v4t_yellow_num").style.visibility="visible";

}

document.getElementById("see_reverse").onclick = function(){
    document.getElementById("yellow_equations").style.visibility="hidden";
    document.getElementById("reverse_equation").style.visibility="visible";
    document.getElementById("remove_equation").style.visibility="hidden";
    document.getElementById("final_equation").style.visibility="hidden";

    document.getElementById("blue_lines").style.visibility="visible";
    document.getElementById("yellow_lines").style.visibility="hidden";

    document.getElementById("blue_nums").style.visibility="visible";
    document.getElementById("yellow_nums").style.visibility="hidden";

    document.getElementById("v1v3_yellow").style.visibility="hidden";
    document.getElementById("v4v3_yellow").style.visibility="hidden";
    document.getElementById("v4t_yellow").style.visibility="hidden";

    document.getElementById("v1v3_yellow_num").style.visibility="hidden";
    document.getElementById("v4v3_yellow_num").style.visibility="hidden";
    document.getElementById("v4t_yellow_num").style.visibility="hidden";

}


document.getElementById("put_2").onclick = function(){
    document.getElementById("yellow_equations").style.visibility="hidden";
    document.getElementById("reverse_equation").style.visibility="hidden";
    document.getElementById("remove_equation").style.visibility="hidden";
    document.getElementById("final_equation").style.visibility="hidden";

    document.getElementById("blue_lines").style.visibility="visible";
    document.getElementById("yellow_lines").style.visibility="visible";

    document.getElementById("blue_nums").style.visibility="visible";
    document.getElementById("yellow_nums").style.visibility="visible";

    document.getElementById("v1v3_yellow").style.visibility="visible";
    document.getElementById("v4v3_yellow").style.visibility="visible";
    document.getElementById("v4t_yellow").style.visibility="visible";

    document.getElementById("v1v3_yellow_num").style.visibility="visible";
    document.getElementById("v4v3_yellow_num").style.visibility="visible";
    document.getElementById("v4t_yellow_num").style.visibility="visible";

}

document.getElementById("remove_0").onclick = function(){
    document.getElementById("yellow_equations").style.visibility="hidden";
    document.getElementById("reverse_equation").style.visibility="hidden";
    document.getElementById("remove_equation").style.visibility="visible";
    document.getElementById("final_equation").style.visibility="visible";

    document.getElementById("blue_lines").style.visibility="visible";
    document.getElementById("yellow_lines").style.visibility="visible";

    document.getElementById("blue_nums").style.visibility="visible";
    document.getElementById("yellow_nums").style.visibility="visible";

    document.getElementById("v1v3_yellow").style.visibility="hidden";
    document.getElementById("v4v3_yellow").style.visibility="hidden";
    document.getElementById("v4t_yellow").style.visibility="hidden";

    document.getElementById("v1v3_yellow_num").style.visibility="hidden";
    document.getElementById("v4v3_yellow_num").style.visibility="hidden";
    document.getElementById("v4t_yellow_num").style.visibility="hidden";
}


document.getElementById("reset_build").onclick = function(){
    document.getElementById("yellow_equations").style.visibility="hidden";
    document.getElementById("reverse_equation").style.visibility="hidden";
    document.getElementById("remove_equation").style.visibility="hidden";
    document.getElementById("final_equation").style.visibility="hidden";

    document.getElementById("blue_lines").style.visibility="hidden";
    document.getElementById("yellow_lines").style.visibility="hidden";

    document.getElementById("blue_nums").style.visibility="hidden";
    document.getElementById("yellow_nums").style.visibility="hidden";

    document.getElementById("v1v3_yellow").style.visibility="hidden";
    document.getElementById("v4v3_yellow").style.visibility="hidden";
    document.getElementById("v4t_yellow").style.visibility="hidden";

    document.getElementById("v1v3_yellow_num").style.visibility="hidden";
    document.getElementById("v4v3_yellow_num").style.visibility="hidden";
    document.getElementById("v4t_yellow_num").style.visibility="hidden";
}
