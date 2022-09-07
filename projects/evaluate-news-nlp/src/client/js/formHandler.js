import {catchAnalysis} from './catchAnalysis'

function handleSubmit(event) {
    event.preventDefault()
    
    // check what text was put into the form field
    let params = document.getElementById('name').value
    console.log("param is ", params)
    console.log("check validity", checkValidity(params))
    
    //use URL value to launch Analysis
    return (checkValidity(params) ? catchAnalysis(params) : alert("Please return a valide URL") )
}
export { 
    handleSubmit 
}

function checkValidity(inputURL) {
    if(!inputURL.includes("http")){
        inputURL = "http://"+inputURL
    }
    let regEx = /(.com|.fr|.io|.org|.gov|.net)/;
    return regEx.test(inputURL)
}

export {
    checkValidity
}