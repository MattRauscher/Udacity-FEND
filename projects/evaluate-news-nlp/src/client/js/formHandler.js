
function handleSubmit(event) {
    event.preventDefault()
    
    // check what text was put into the form field
    let formText = document.getElementById('name').value

    console.log(`formtext is ${formText}`)
    //formText = encodeURIComponent(formText)
    //console.log(`new formtext is ${formText}`)
    const params = `?url=${formText}`
    

    async function catchAnalysis() {
        console.log("::: Form Submitted :::")
        fetch(`http://localhost:8080/analysetext${params}`)
            .then(response => response.text())
            .then(result => {
                document.getElementById('results').innerHTML = result
                console.log(result)
            })   
            .catch(error => console.log('error', error));
        
    }

    catchAnalysis()
}

export { 
    handleSubmit 
}
