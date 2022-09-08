import { expressPolarity } from './polarity'

function buildNewDOM(params, jsonresult){
    const newDom =
        `<table>`+
            `<tr>`+
                `<th>Parameter</th>`+
                `<th>Value</th>`+
            `<tr>`+
                `<th>Article URL</th>`+
                `<th><a href="${params}">Article URL</a></th>`+
            `<tr>`+
                `<th>Polarity</th>`+
                `<th>${expressPolarity(jsonresult.score_tag)}</th>`+
            `<tr>`+
                `<th>Subjectivity</th>`+
                `<th>${jsonresult.subjectivity}</th>`+
            `<tr>`+
                `<th>Extract</th>`+
                `<th>${jsonresult.sentence_list[0].text}</th>`+
            `<tr>`+
        `</table>` 
    console.log("::: Done! :::")
    return newDom
}

export {
    buildNewDOM
}