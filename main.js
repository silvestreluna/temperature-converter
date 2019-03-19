const printToDom = (divId, textToPrint) => {
    const selectDiv = document.getElementById(divId);
    selectDiv.innerHTML = textToPrint;
  };

const selectButton = () => {
    document.getElementById('convertBtn').addEventListener('click', determineConverter);
    document.getElementById('clearBtn').addEventListener('click', clear);
};


const domStringBuilder = (finalTemp, unit) => { 
    let divClass = ''
    if (finalTemp > 90 && unit === 'F') {
        divClass = 'red';
    } else if (finalTemp > 32 && unit === "C") {
        divClass = 'red';
    } else if (finalTemp < 32 && unit === "F") {
        divClass = 'blue';
    } else if (finalTemp < 0 && unit === "C") {
        divClass = 'blue';
    } else {
        divClass = 'green';
    }
    let buildText = `<h2 class="${divClass}">${finalTemp} degrees ${unit}</h2>`
    
    printToDom('tempOutput', buildText);
};


const toCelsius =  () => {
    const temp = document.getElementById('tempInput').value;
    const toCelResult = (temp - 32 )/ 1.8;
    
    domStringBuilder(toCelResult.toFixed(2), 'C');

};

const toFahrenheit =  () => {
    const temp = document.getElementById('tempInput').value;
    const toFahResult = (temp * 1.8) + 32;
   
    domStringBuilder(toFahResult.toFixed(2), 'F');

};

const clear = () => {
    document.getElementById('tempInput').value = '';
    document.getElementById('tempOutput').innerHTML = '';
    document.getElementById('celsius').checked = false;
    document.getElementById('fahrenheit').checked = false;

    
};


const determineConverter = () => {
   const targetIdC = document.getElementById('celsius').checked;
   const targetIdF = document.getElementById('fahrenheit').checked;

    if ( targetIdC === true) {
        toCelsius();
    }  
    else if (targetIdF=== true) {
        toFahrenheit();
    };
};


const init = () => {

    selectButton();

};

init();
