import { expressPolarity } from './polarity'

async function catchAnalysis(params) {
        console.log("::: Form Submitted :::")
        fetch(`http://localhost:8080/analysetext?url=${params}`)
            .then(response => response.text())
            .then(result => {
                let jsonresult = JSON.parse(result)
                document.getElementById('results').innerHTML = 
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
            })  
            .catch(error => console.log('error', error));
    }

export {
    catchAnalysis
}