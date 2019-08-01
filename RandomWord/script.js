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

    var cycleCount = 0;
    while (word == lastWord) {
        if (cycleCount < 5) {
            cycleCount++;
        } 
        else {
            word = lastWord + '..';
            break;
        }
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

let uploadFileButton = document.querySelector("#file"); 
uploadFileButton.onchange = () => {
    if (!uploadFileButton.files.length) return;
    
    let reader = new FileReader();
    reader.onload = (e) => {  
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
    reader.readAsText(uploadFileButton.files[0]);

    uploadFileButton.value = "";
};

let textArea = document.querySelector("#input");
textArea.oninput = () => {
    resizeText();
    document.querySelector("#output").innerHTML = textArea.value.length;
}

function resizeText() {
    if (textArea.value.length > 91) {
        textArea.classList.add("textSize4");
        textArea.classList.remove("textSize1", "textSize2", "textSize3");
    }
    else if (textArea.value.length > 50) {
        textArea.classList.add("textSize3");
        textArea.classList.remove("textSize1", "textSize2", "textSize4");
    } 
    else if (textArea.value.length > 21) {
        textArea.classList.add("textSize2");
        textArea.classList.remove("textSize1", "textSize3", "textSize4");
    }
    else {
        textArea.classList.add("textSize1");
        textArea.classList.remove("textSize2", "textSize3", "textSize4");
    }
}

function katA() {
    document.querySelector("#input").value += "ア, カ, サ, タ, ナ, ハ, マ, ヤ, ラ, ワ, ";
    resizeText();
}

function katAr() {
    document.querySelector("#input").value += "A, Ka, Ta, Sa, Na, Ha, Ma, Ya, Ra, Wa, ";
    resizeText();
}

function katI() {
    document.querySelector("#input").value += "イ, キ, シ, チ, ニ, ヒ, ミ, リ, ";
    resizeText();
}

function katIr() {
    document.querySelector("#input").value += "I, Ki, Shi, Chi, Ni, Hi, Mi, Ri, ";
    resizeText();
}

function clearInput() {
    document.querySelector("#input").value = "";
    document.querySelector("#output").innerHTML = "...";
    resizeText();
}