import { expressPolarity } from "./polarity";

test("test Polarity Dictionary", () => {
    expect(expressPolarity("P+")).toEqual("strong positive")
})