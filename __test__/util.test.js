const {generateText, validateInput, createElement} = require('../util');

describe('Tests de generateText', () => {
    test('inputOK', () => {
        const data = generateText('Miercoles', 24)
        expect(data).toBe('Miercoles (24 years old)');
    })
    
    test('inputNull', () => {
        const data = generateText(null, null)
        expect(data).toBe('null (null years old)');
    })

    test('inputUndefined', () => {
        const data = generateText(undefined, undefined)
        expect(data).toBe('undefined (undefined years old)');
    })
})

describe('Tests de validateInput', () => {
    test('firstValidateInput_False', () => {
        const validate = validateInput(null)
        expect(validate).toBeFalsy;
    })
    
    test('secondValidateInput_False', () => {
        const validate = validateInput('   ', 'Hello World')
        expect(validate).toBeFalsy;
    })

    test('thirdValidateInput_False', () => {
        const validate = validateInput(NaN, ' ', 'Hello World')
        expect(validate).toBeFalsy;
    })

    test('fourthValidateInput_True', () => {
        const validate = validateInput('Hello', 'World', ' ')
        expect(validate).toBeTruthy;
    })
})


