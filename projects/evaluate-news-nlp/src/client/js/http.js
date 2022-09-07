
function fetchNewsData(params){
    console.log('::: Fetching Data :::');
    return fetch(`http://localhost:8080/analysetext?url=${params}`)
        
}

export {
    fetchNewsData
}
