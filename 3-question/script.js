console.log("i'm here");

const gridContainer = document.querySelector('.grid-container');

const rowButton = document.querySelector(".row-button");


let numberOfRows = 0;
rowButton.addEventListener('click', (e)=>{
    const rowInput = document.querySelector('.row-number')
    console.log(rowInput.value);
    numberOfRows = rowInput.value;

    gridContainer.innerHTML = "";
})

let numberOfCols = 0;
const columnButton = document.querySelector('.column-button')
columnButton.addEventListener('click', (e)=>{
    const colInput = document.querySelector('.column-number');
    console.log(colInput.value);
    numberOfCols = colInput.value;

    gridContainer.innerHTML = "";


})

const populateButton = document.querySelector('.populate-button')



populateButton.addEventListener('click', (e)=>{
    
    // gridContainer.classList.forEach(element => {
        // console.log(element);
        
        // if(element.startsWith('grid-rows-')){
        //     gridContainer.classList.remove(element);
        // }
        // if(element.startsWith('grid-cols-')){
            // gridContainer.classList.remove(element);
        // }
    // });

    gridContainer.classList.add(`grid-cols-${numberOfCols}`);
    // gridContainer.classList.add(`grid-rows-${numberOfRows}`);
    

    let value = 1;
    for (let i = 0; i < numberOfRows; i++) {
        for (let j = 0; j < numberOfCols; j++) {
            const  box = document.createElement('div');
            box.classList.add('flex', 'border-1','justify-center')
            box.textContent = value;
            gridContainer.appendChild(box);
            value++;
        }
    }


})