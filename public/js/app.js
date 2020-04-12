console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msgOne = document.getElementById('p1');
const msgTwo = document.getElementById('p2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    msgTwo.textContent = 'Loading...'

    fetch('http://localhost:3000/weather?address=' + location).then(
        (response) => {
            response.json().then((data) => {
                if (data.error) {
                    msgTwo.textContent = data.error;
                    //console.log(data.error)
                } else {
                    msgOne.textContent = data.location;
                    msgTwo.textContent = data.forecast;
                    // console.log(data.location)
                    // console.log(data.forecast)
                }
            })
        }
    ).catch(e => {
        console.log(e);
    })
})