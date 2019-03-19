const printToDom = (divId, textToPrint) => {
    const selectDiv = document.getElementById(divId);
    selectDiv.innerHTML = textToPrint;
  };

const selectButton = () => {
    document.getElementById('convertBtn').addEventListener('click', determineConverter);
};

const toCelsius =  () => {
    const temp = document.getElementById('tempInput').value;
    const toCelResult = (temp - 32 )/ 1.8;
    
    printToDom('tempOutput', `<h2>${toCelResult} degrees C</h2>`);

};

const toFahrenheit =  () => {
    const temp = document.getElementById('tempInput').value;
    const toFahResult = (temp * 1.8) + 32;

    printToDom('tempOutput', `<h2>${toFahResult} degrees F</h2>`);

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
