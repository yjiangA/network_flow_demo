var lemmas = ['26_1', "26_3", "26_4", "26_5"]

for(item in lemmas){
    function b(item) {
        var lem = lemmas[item];
        document.getElementById(lem).onclick = function show() {
            window.open ("./popups/"+ lem +".html", "", "height=500, width=1250, top=200, left=300, titlebar=no, toolbar=no, menubar=no, scrollbars=yes, resizable=no,location=no, status=no");
        }
    }
    b(item)
}


