const filterInput = document.querySelector('#searchInput');
const names = [...document.querySelectorAll('li a')];


filterInput.addEventListener('keyup', filterName);
filterInput.addEventListener('keyup', letterHighlight);
filterInput.focus();

function filterName() {
    const value = this.value.toUpperCase();
    names.forEach(name =>
        name.textContent.toUpperCase().includes(value) ? name.classList.remove('hide') : name.classList.add('hide')
    );
};


function letterHighlight() {
    const value = this.value;
    let myRegEx = new RegExp(value, 'gi');
    names.forEach((name) => {
        if (myRegEx.test(value)) {
            //get the text value of list that passed in reg ex
            let nameString = name.textContent;

            //decare a var to store the result
            let result;

            //check if the first letter is equal to the input value in Upper case
            if (nameString[0] === value.toUpperCase()) {
                //if yes set the first letter of the text value to span tag
                let firstLetter = "<span class='highlight'>" + nameString[0].toUpperCase() + "</span>";
                
                //extract the first letter and get the remaining letters of the text value
                let theRestLetters = nameString.slice(1);
                //replace all the letters with thw value of the input and put it in the span tag
                let restLetters = theRestLetters.replace(myRegEx, "<span class='highlight'>" + value.toLowerCase() + "</span>");
                // concat the modify first and the rest letters
                result = firstLetter + restLetters;
                

               
              // result = nameString.replace(myRegEx, "<span class='highlight'>" + value + "</span>");
            } else {
                result = nameString.replace(myRegEx, "<span class='highlight'>" + value.toLowerCase() + "</span>");
            }
            name.innerHTML = result;
        }
    });
}