var texts = ["edges", "change", "send", "sendmore", "sendback", "min", "resedges"]


for(item in texts){
    function a(item) {
    var name = texts[item];
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor);

    document.getElementById(name).style.backgroundColor = "#" + randomColor;

    document.getElementById(name).onclick = function(){
    document.getElementById(name+"_hint").style.visibility="visible";
    document.getElementById(name+"_hint").style.backgroundColor="#" + randomColor;
        }
    }
    a(item)
}


