
// This will print to the Dom
const printToDom = (divId, textToPrint) => {
    const selectDiv = document.getElementById(divId);
    selectDiv.innerHTML = textToPrint;
  };

  // selecting buttons and adding event listener.
const selectButton = () => {
    document.getElementById('convertBtn').addEventListener('click', determineConverter);
    document.getElementById('clearBtn').addEventListener('click', clear);
};


// this will build what will print in the dom, plus conditional. 
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
    if (temp === '') {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Temperature field is blank!'
          })
    } else {
    const toCelResult = (temp - 32 )/ 1.8;
    
    domStringBuilder(toCelResult.toFixed(2), 'C');
    };
};

const toFahrenheit =  () => {
    const temp = document.getElementById('tempInput').value;
    if (temp === '') {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Temperature field is blank!'
          })
    } else {

    const toFahResult = (temp * 1.8) + 32;
    domStringBuilder(toFahResult.toFixed(2), 'F');
    };
};

// clear button. 
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

// key up button. 
const enterIsPressed = () => {document.addEventListener('keyup', (e)=>{
    if (e.keyCode === 13) {
        determineConverter();
    }
});
}
const init = () => {
    enterIsPressed();
    selectButton();

};

init();
