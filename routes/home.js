var typeString = ['Megha', 'web developer' ];
    var i = 0;
    var count = 0;
    var selectText = '';
    var text = '';
    (function type() {
        if (count == typeString.length){
            count = 0;
        }
        selectText = typeString[count];
        text = selectedText.slice(0, ++i);
        document.getElementById('typing').innerHTML = text;
        if (text.length === selectedText.length) {
            count++;
            i = 0;
        }
        setTimeout(type, 200);
    });

    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i =0; i< 1e7; i++) {
            if((new Date().getTime() - start) > milliseconds){
                break;
            }
        }
    }