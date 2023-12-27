import Validator from "../js/validator.js";

test('check the name', () => {

    const userName1 = new Validator("puti_12-3bik");
    const result = userName1.validateUserName()
    expect(result).toEqual("puti_12-3bik");
})

test('check the name again 2', () => {
    const userName3 = new Validator("cvcv_3564fdf");
    const result = userName3.validateUserName();
    expect(result).toThrow(('Имя не отвечает условиям'));
});

test('check the name again 3', () => {
    const userName4 = new Validator("7qwefzxcv55v");
    const result = userName4.validateUserName();
    expect(result).toThrow(('Имя не отвечает условиям'));
});

test('check the name again 4', () => {
    const userName5 = new Validator("-dfdf56-fg_4cv1b");
    const result = userName5.validateUserName();
    expect(result).toThrow(('Имя не отвечает условиям'));
});

test('check the name again 5', () => {
    const userName6 = new Validator("_oi34iag");
    const result = userName6.validateUserName();
    expect(result).toThrow(('Имя не отвечает условиям'));
});