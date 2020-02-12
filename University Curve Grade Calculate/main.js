'use strict';



document.getElementById('calcBtn').addEventListener('click', calulate)

function calculate() {
    //INPUT
    let maxGr = Number(document.getElementById('maxG').value);
    let highGr = Number(document.getElementById('highestGr').value);
    let gr2 = Number(document.getElementById('gr2').value);
    let gr3 = Number(document.getElementById('gr3').value);
    let gr4 = Number(document.getElementById('gr4').value);
    let gr5 = Number(document.getElementById('gr5').value);
    let gr6 = Number(document.getElementById('gr6').value);
    let gr7 = Number(document.getElementById('gr7').value);
    let gr8 = Number(document.getElementById('gr8').value);
    let gr9 = Number(document.getElementById('gr9').value);
    let gr10 = Number(document.getElementById('gr10').value);
    //PROCESS
    let nhGR = Number(maxGr);
    let ngr2 = Number(gr2 + (maxGr-highGr));
    //OUTPUT
    document.getElementById('answer').innerHTML = 'High Grade:' + nhGR + 'Grade 2:' + ngr2;

}