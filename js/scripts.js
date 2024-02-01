'use strict';

document.addEventListener('DOMContentLoaded', function () {
    console.log('Content Loaded');

    const myList= document.querySelector('#myList');
    
    generateList.addEventListener('click', function () {
        const inputItems = document.querySelectorAll('input');
        const listElement = document.createElement('ul'); //create ul items from input

        inputItems.forEach(function (inputItem) {
            const listItem = document.createElement('li'); 
            listItem.innerText = inputItem.value;
            listElement.appendChild(listItem); //add li to ul
        });
            // myList.innerHTML = "";// Clear existing content in myListContainer

            myList.appendChild(listElement); // Append the generated list to the myListContainer

            inputItems.forEach(function (inputItem) {  // Clear text inputs
            inputItem.value = ""; });
        
    });
});
