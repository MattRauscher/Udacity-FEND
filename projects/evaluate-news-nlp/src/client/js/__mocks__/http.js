
function fetchNewsData(){
    console.log("::: MOCK API :::")
    const responseData = {
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
        "subjectivity": "SUBJECTIVE",
        "sentence_list": [
            {
                "text":"the first sentence"
            }
        ]
    }
    
    return Promise.resolve(responseData)
}

export {
    fetchNewsData
}
