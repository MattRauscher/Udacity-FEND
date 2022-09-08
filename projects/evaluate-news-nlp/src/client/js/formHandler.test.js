import { checkValidity } from "./formHandler";

test("checkValidity to refuse not URL", () => {
    let testURL = "Hello"
    expect(checkValidity(testURL)).toBeFalsy()
})


test("checkValidity to accept URL", () => {
    let testURL = "www.nytimes.com"
    expect(checkValidity(testURL)).toBeTruthy()
})

