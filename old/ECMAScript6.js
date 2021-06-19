for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 2000)
}

for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 2000)
}

// *********************************************** //

function getAge(year) {
    const current = new Date().getFullYear();
    return current - year;
}

const calcAge = (year) => {
    const current = new Date().getFullYear();
    return current - year;
}

const _getAge = year => {
    const current = new Date().getFullYear();
    return current - year;
}

const _calcAge = year => {
    return new Date().getFullYear() - year;
}

const _getAgeGreat = year => new Date().getFullYear() - year;

const logAge = year => console.log(year);

const person = {
    age: 22,
    name: 'Max',
    logNameWithTimeout: function() {
        setTimeout(function() {
            console.log(this.name);
        }.bind(this), 2000)
    }
}

const human = {
    age: 22,
    name: 'Max',
    logNameWithTimeout() {
        setTimeout(() => {
            console.log(this.name);
        }, 2000)
    }
}

//***************************************************/

const createPost = (title, text, date) => {
    return {title,text,date,}
}

createPost('Скоро новый год!', 'Скоро будет 2021', '10.29.2020')


//***************************************************/


const bmw = {
    name: 'BMW',
    ['model']: 'X6',

    logFields() {
        const {name, year, model} = this;
        console.log(name, model, year);
    }
}

console.log(bmw);
bmw.logFields();

// form //

const form = document.querySelector('form')

form.addEventListener('submit', event => {
    event.preventDefault();
    const title = form.title.value;
    const text = form.text.value;
    const description = form.description.value;

    saveForm({title, text, description})
    saveForm2(title, text, description)
})

//Spread
function saveForm(data) {
    const formData = {
        date: new Date().toLocaleDateString(),
        ...data
    }

    console.log('Form data: ', formData)
}

//Rest
function saveForm2(...args) {
    const [title, text, description] = args
    const formData = {
        date: new Date().toLocaleDateString(),
        title, text, description
    }

    console.log('Form data: ', formData)
}


// String ES6

const createLink = ({path, name}) => `<a href="${path}">${name}</a>`
