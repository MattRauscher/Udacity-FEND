
function handleSubmit(event) {
    event.preventDefault()
    
    // check what text was put into the form field
    let formText = document.getElementById('name').value

    console.log(`formtext is ${formText}`)
    formText = encodeURIComponent(formText)
    console.log(`new formtext is ${formText}`)
    const params = `?url=${formText}`
    console.log("::: Form Submitted :::")
    fetch(`http://localhost:8080/analysetext${params}`)
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

export { 
    handleSubmit 
}
