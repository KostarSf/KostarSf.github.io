
function nextWord() {
    var lastWord = document.getElementById("output").innerHTML;

    var text = document.getElementById("input").value;
    var words = text.split(',');

    var lastWordNumber;

    if (words[words.length-1].trim() != "") {
        lastWordNumber = words.length;
    }
    else {
        lastWordNumber = words.length-1;
    }

    var wordNumber = Math.floor(Math.random() * lastWordNumber);
    var word = words[wordNumber].trim();

    while (word == lastWord) {
        var wordNumber = Math.floor(Math.random() * lastWordNumber);
        var word = words[wordNumber].trim();
    }

    if (text == "") {
        document.getElementById("output").innerHTML = "...";
    }
    else {
        document.getElementById("output").innerHTML = word;
    }
}

let input = document.querySelector("#file"); // !!

input.onchange = () => {
    if (!input.files.length) return;
    
    let reader = new FileReader();
    reader.onload = (e) => {   // !!
        var text = e.target.result.replace(/\r|\n/g, ',');
        var textArray = text.split('');

        var index;
        for (index = 0; index < textArray.length - 1; index++) {
            if (textArray[index] == ',') {
                if (textArray[index + 1] == ',') {
                    textArray[index] = '';
                }
            }
        }

        document.getElementById("input").value = textArray.join('');
    };
    reader.readAsText(input.files[0]);

    input.value = "";
};
