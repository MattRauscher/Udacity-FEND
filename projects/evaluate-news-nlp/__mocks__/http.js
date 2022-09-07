
function fetchNewsData(){
    console.log("::: MOCK API :::")
    let responseData = {
        "agreement": "DISAGREEMENT",
        "confidence": "86",
        "irony": "NONIRONIC",
        "model": "general_en",
        "score_tag": "P",
        "status": {
            "code": "0",
            "msg": "OK",
            "credits": "3",
            "remaining_credits": "19849"
        },
        "subjectivity": "SUBJECTIVE"
    }
    console.log(`response Text is ${response.text()}`)
    return Promise.resolve(response)
}

export {
    fetchNewsData
}
