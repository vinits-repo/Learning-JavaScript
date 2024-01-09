const form = document.querySelector('form')
// const height = parseInt(document.querySelector('#height').value) // this will give us empty value

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const about = document.querySelector('#about')

    if(height === '' || height <= 0 || isNaN(height)){
        results.innerHTML = `Please provide a valid height: ${height}`
    }else if (weight === '' || weight <= 0 || isNaN(weight)) {
        results.innerHTML = `Please provide a valid weight: ${weight}`
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        if(bmi < 18.6){
            about.innerHTML = "You underweight."
        }else if (bmi > 18.6 && bmi < 24.9) {
            about.innerHTML = "You are in the normal range."
        }else {
            about.innerHTML = "You are overweight."
        }
        // showing the result
        results.innerHTML = `<span>${bmi}</span>`
    }
});