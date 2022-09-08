//import { catchAnalysis } from './catchAnalysis'
import { fetchNewsData } from './http'
import { expressPolarity } from './polarity';
import { buildNewDOM } from './domHandler'

jest.mock('./http')

test("Mock API works", () =>{
    fetchNewsData("toto")
        .then(response => {
            expect(response.score_tag).toBe("P")
        })
    });


test("Testing Dictionnary", () => {
    fetchNewsData("toto")
        .then(response => {
            expect(expressPolarity(response.score_tag)).toBe("positive")
        })

})

test("Build new DOM", () => {
    fetchNewsData("toto")
        .then(response => {
            let url="nytimes.com"
            let testDom =
            `<table>`+
                        `<tr>`+
                            `<th>Parameter</th>`+
                            `<th>Value</th>`+
                        `<tr>`+
                            `<th>Article URL</th>`+
                            `<th><a href="nytimes.com">Article URL</a></th>`+
                        `<tr>`+
                            `<th>Polarity</th>`+
                            `<th>positive</th>`+
                        `<tr>`+
                            `<th>Subjectivity</th>`+
                            `<th>SUBJECTIVE</th>`+
                        `<tr>`+
                            `<th>Extract</th>`+
                            `<th>the first sentence</th>`+
                        `<tr>`+
                    `</table>` 
            expect(buildNewDOM(url, response)).toEqual(testDom)
        })

})