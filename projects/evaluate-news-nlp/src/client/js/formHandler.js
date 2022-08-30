import {catchAnalysis} from './catchAnalysis'

function handleSubmit(event) {
    event.preventDefault()
    
    // check what text was put into the form field
    let params = document.getElementById('name').value

    console.log(`parameter is ${params}`)
    //use URL value to launch Analysis
    catchAnalysis(params)
}
export { 
    handleSubmit 
}
