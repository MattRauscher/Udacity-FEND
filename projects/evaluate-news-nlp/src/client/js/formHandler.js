function handleSubmit(event) {
    alert("preventing default!")
    event.preventDefault()
   
    // check what text was put into the form field
    let formText = document.getElementById('name').value

    alert("form text is ", formText)
    setTimeout(console.log("Timed Out", 5000));
    
    /*
    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })*/
}

export { handleSubmit }
