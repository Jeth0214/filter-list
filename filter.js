const filterInput = document.querySelector('#searchInput');
const names = [...document.querySelectorAll('li a')];


filterInput.addEventListener('keyup', filterName);
filterInput.addEventListener('keyup', letterHighlight);
filterInput.focus();

function filterName() {
    const value = this.value.toUpperCase();
    names.forEach(name =>
        name.textContent.toUpperCase().includes(value) ? name.classList.remove('hide')  : name.classList.add('hide') 
    );
};


function letterHighlight() {
    const value = this.value.toUpperCase();
    names.forEach((name) => {
        if(name.textContent.toUpperCase().includes(value)){
            let nameString = name.textContent;
            let myRegEx = new RegExp(value, 'gi');
            let result = nameString.replace(myRegEx, "<span class='highlight'>" + value + "</span>");

            name.innerHTML = result;
        }
    });
}