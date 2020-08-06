var texts = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
"11", "12" ,"13", "14", "15", "16", "17", "18", "19", "20"]


for(item in texts){
    function a(item) {
    var name = texts[item];
    document.getElementById(name).style.backgroundColor = "lightgreen";

    document.getElementById(name).onclick = function(){
    document.getElementById(name+"_hint").style.visibility="visible";
    document.getElementById(name+"_hint").style.backgroundColor="lightblue";
        }
    }
    a(item)
}

