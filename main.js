const printToDom = (divId, textToPrint) => {
    const selectDiv = document.getElementById(divId);
    selectDiv.innerHTML = textToPrint;
  };

const selectButton = () => {
    document.getElementById('convertBtn').addEventListener('click', toCelsius);
    document.getElementById('convertBtn').addEventListener('click', toFahrenheit);

    document.getElementById('celsius').addEventListener('click', determineConverter);
    document.getElementById('fahrenheit').addEventListener('click', determineConverter);
};

// const test = () => {
//     const inputValue = document.getElementById('tempInput').value;

//     printToDom('tempOutput', `<h3>${inputValue}</h3>`);
// };



const toCelsius =  () => {
    const inputValue = document.getElementById('tempInput').value;

    printToDom('tempOutput', `<h3>${inputValue} C</h3>`);

}

const toFahrenheit =  () => {
    const inputValue = document.getElementById('tempInput').value;

    printToDom('tempOutput', `<h3>${inputValue} F</h3>`);

}


const determineConverter = (e) => {
   // const inputValue = document.getElementById('tempInput').value;

    if (e.target.id === 'celsius') {
        toCelsius();
    } else if (e.target.id === 'fahrenheit') {
        toFahrenheit();
    };
};


const init = () => {

    selectButton();
};

init();
