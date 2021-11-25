const {generateText, validateInput, createElement} = require('../util');

test('inputOK', () => {
    const data = generateText('Miercoles', 24) //Lógica
    expect(data).toBe('Miercoles (24 years old)');
})

test('inputOK2', () => {
    const data2 = generateText('Miercoles', 24) //Lógica
    expect(data2).toMatch(/Miercoles/);
})

test('inputOK3', () => {
    const data2 = generateText() //Lógica
    expect(data2).toBe('undefined (undefined years old)');
})

test('inputOK3', () => {
    const data3 = generateText('Miercoles', 24) //Lógica
    expect(typeof(data3)).toBe('string');
})

test('validacion1', () => {
    const valid = validateInput('arroz') //Lógica
    expect(valid).toBeFalsy; // espero TRUE o FALSE
})

test('validacion3', () => {
    const valid = validateInput(null) //Lógica
    expect(valid).toBeFalsy(); // espero TRUE o FALSE
})

test('validacion4', () => {
    const valid = validateInput('  hola  ') //Lógica
    expect(valid).toBeFalsy; // espero TRUE o FALSE
})

test('validacion5', () => {
    const valid = validateInput(NaN, false, false) //Lógica
    expect(valid).toBeFalsy(); // espero TRUE o FALSE
})

test('validacion6', () => {
    const valid = validateInput(NaN, false, true) //Lógica
    expect(valid).toBeFalsy(); // espero TRUE o FALSE
})

test('validacion7', () => {
    const valid = validateInput(NaN, true, false) //Lógica
    expect(valid).toBeFalsy(); // espero TRUE o FALSE
})

test('validacion8', () => {
    const valid = validateInput(NaN, true, true) //Lógica
    expect(valid).toBeFalsy(); // espero TRUE o FALSE
})


