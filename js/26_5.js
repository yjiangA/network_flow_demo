var texts = ["1", "2", "3", "4"]

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

var lemmas = ['26_4']


for(item in lemmas){
    function b(item) {
        var lem = lemmas[item];
        document.getElementById(lem).onclick = function show() {
            window.open ("./"+ lem +".html", "", "height=500, width=1250, top=200, left=300, titlebar=no, toolbar=no, menubar=no, scrollbars=yes, resizable=no,location=no, status=no");
        }
    }
    b(item)
}


