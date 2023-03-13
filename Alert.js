'use strict';

let ProcessedWords = ["ALPHA", "BAKER", "CHARLIE", "DELTA", "ECHO", "FOXTROT"];

// Get the modal
let bhmodal = ``;

// Get the button that opens the modal
var btn = document.getElementById("bh-defineBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("bh-close")[0];

// Modal innerHTML
const bhmodalList = document.getElementById("bh-modal-list");

// When the user clicks the button, open the modal 
btn.onclick = function() {
    bhmodal = document.getElementById("bh-myModal");
    bhmodal.style.display = "block";
    let temp = `<dl>`;
    for (let i = 0; i < ProcessedWords.length; i++) {
          temp += `<dt class="bh-modal-item" onclick="getDictionary('` + ProcessedWords[i] + `')">` + `&nbsp;` + ProcessedWords[i] + `</td>`;
    }
    temp += `</dl>`;
    bhmodalList.innerHTML = temp;
    return;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    bhmodal.style.display = "none";
    return;
}

function getDictionary(word) {
    window.open("https://www.merriam-webster.com/dictionary/" + word, "dictName", "toolbar=yes,scrollbars=yes,resizable=yes,top=50,left=700,width=750,height=600");
    return;
}
  
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == bhmodal) {
    bhmodal.style.display = "none";
    return;
  }
}

