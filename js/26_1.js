var texts = ["1", "2", "3", "4", "5", "6", "7", "8"]


for(item in texts){
    function a(item) {
    var name = texts[item];
    //var randomColor = Math.floor(Math.random()*16777215).toString(16);
    
    //document.getElementById(name).style.backgroundColor = "#" + randomColor;
    document.getElementById(name).style.backgroundColor = "lightgreen";

    document.getElementById(name).onclick = function(){
    document.getElementById(name+"_hint").style.visibility="visible";
    //document.getElementById(name+"_hint").style.backgroundColor="#" + randomColor;
    document.getElementById(name+"_hint").style.backgroundColor="lightblue";
        }
    }
    a(item)
}

