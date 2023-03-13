'use strict';

const El = {
    MetaStats1: document.getElementById('metastats1'),
    MetaStats2: document.getElementById('metastats2'),
    MetaStats3: document.getElementById('metastats3'),
    MetaStats4: document.getElementById('metastats4'),
}
El.MetaStats2.innerHTML = '100<br>40' ;

debugger;
const hintDiv = setUpHintDiv();

function setUpHintDiv() {
    let gameScreen;
    gameScreen = document.getElementById('bh-myModal');
    const parent = gameScreen.parentElement;
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.append(gameScreen);
    parent.append(container);

    const hintDiv = document.createElement('div');
    hintDiv.style.padding = '10px';
    hintDiv.id = 'metastat';
    container.append(hintDiv);

    // Bee Hive HTML
    hintDiv.innerHTML = `
    <table>
        <td id="metastats1">Total points:&nbsp<br>Total words:&nbsp<br>Words Found:&nbsp</td>
        <td id="metastats2"></td>
        <td id="metastats3">Genius level:&nbsp<br>Total pangrams:&nbsp<br>Pangrams Found:&nbsp</td>
        <td id="metastats4"></td>
    </table>
    `;
return hintDiv;
}

