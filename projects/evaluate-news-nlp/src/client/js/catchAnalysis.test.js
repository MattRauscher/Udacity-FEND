//import { catchAnalysis } from './catchAnalysis'

jest.mock('./http')

import { fetchNewsData } from './http'


test("Mock API works", () =>{
    let testing = fetchNewsData()
    console.log(`fetchNewsData is ${testing}`)

    let fetchedResults = JSON.parse(fetchNewsData())
    expect(fetchedResults.score_tag).toBe("P")
    
})