const printToDom = (divId, textToPrint) => {
    const selectDiv = document.getElementById(divId);
    selectDiv.innerHTML = textToPrint;
  };

const selectButton = () => {
    document.getElementById('convertBtn').addEventListener('click', determineConverter);
};



const toCelsius =  () => {
    const inputValue = document.getElementById('tempInput').value;
    
    printToDom('tempOutput', `<h3>${inputValue}&#176;C</h3>`);

};

const toFahrenheit =  () => {
    const inputValue = document.getElementById('tempInput').value;

    printToDom('tempOutput', `<h3>${inputValue}&#176;F</h3>`);

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
