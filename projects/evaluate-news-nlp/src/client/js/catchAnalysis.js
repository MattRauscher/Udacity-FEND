
import { fetchNewsData } from './http'
import { buildNewDOM } from './domHandler'

async function catchAnalysis(params) {
    console.log("::: Form Submitted :::")
    fetchNewsData(params)
        .then(response => response.text())
        .then(result => {
            let jsonresult = JSON.parse(result)
            document.getElementById('results').innerHTML = buildNewDOM(params, jsonresult)
        })  
        .catch(error => console.log('error', error));
    }



export {
    buildNewDOM,
    catchAnalysis
}