import { onInputChange } from '../lib/utils'

describe("input change validation", () => {
    test("empty input should return 'input is empty'", () => {
        const expectedOutput = 'input is empty'
        const testInputVal = ''

        const emptyCallback = (e: any) => void

        expect(onInputChange(testInputVal, emptyCallback)).toEqual(expectedOutput)

    });

    test("non-int should return 'invalid number'", () => {
        const expectedOutput = 'invalid number'
        const testInputVal = 'abc'

        const emptyCallback = (e: any) => void

        expect(onInputChange(testInputVal, emptyCallback)).toEqual(expectedOutput)

    });

    test("it should return the parsed value", () => {
        const expectedOutput = 5
        const testInputVal = '5'

        const emptyCallback = (e: any) => void

        expect(onInputChange(testInputVal, emptyCallback)).toEqual(expectedOutput)

    });
});
