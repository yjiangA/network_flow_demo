
function show(content_id, button_id){
    document.getElementById(content_id).style.display="block";
}

function hide(content_id, button_id){
    document.getElementById(content_id).style.display="none";
}


var buttons = ["vis", "tu", "y", "mfv", "rom", "sol", "bud"]

var btn_on;
var btn_off;

for(item in buttons){
    function a(item) {
    var name = buttons[item];
    console.log(name + "_btn")
    btn_on = document.getElementById(name + "_btn");
    btn_on.onclick = function(){show(name, name+"_btn")}

    btn_off = document.getElementById(name+"_btn_hide");
    btn_off.onclick = function(){hide(name, name+"_btn_hide")}
    }
    a(item)
}


