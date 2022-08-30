function expressPolarity(polarity){
    let polarityDictionary = {}
    polarityDictionary["P+"]= "strong positive"
    polarityDictionary["P"]= "positive"
    polarityDictionary["NEU"]= "neutral"
    polarityDictionary["N"]= "negative"
    polarityDictionary["N+"]= "strong negative"
    polarityDictionary["NONE"]= "without polar"
    
    return polarityDictionary[polarity]
}
export {
    expressPolarity
}