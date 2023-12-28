import Validator from "../js/validator.js";

test('check the name for numbers', () => {
    const userName1 = new Validator("cvcv_3564fdf");
    const result = () => userName1.validateUserName();
    expect(result).toThrow(('Имя не должно содержать больше трёх цифр'));
});

test('check the name for the number at the beginning', () => {
    const userName2 = new Validator("7qwefzxcv55v");
    const result = () => userName2.validateUserName();
    expect(result).toThrow(('Имя не должно начинаться с цифры'));
});

test('check the name with a dash at the beginning', () => {
    const userName3 = new Validator("-dfdf56-fg_4cv1b");
    const result = () => userName3.validateUserName();
    expect(result).toThrow(('Имя не должно начинаться с тире'));
});

test('check the name for an underscore at the beginning', () => {
    const userName4 = new Validator("_oi34iag");
    const result = () => userName4.validateUserName();
    expect(result).toThrow(('Имя не должно начинаться с подчёркивания'));
});

test('check the name for the number at the end', () => {
    const userName6 = new Validator("oi34ia7");
    const result = () => userName6.validateUserName();
    expect(result).toThrow(('Имя не должно заканчиваться цифрой'));
});

test('check the name with a dash at the end', () => {
    const userName7 = new Validator("oi34ia-");
    const result = () => userName7.validateUserName();
    expect(result).toThrow(('Имя не должно заканчиваться тире'));
});

test('check the name with a dash at the end', () => {
    const userName8 = new Validator("oi34ia_");
    const result = () => userName8.validateUserName();
    expect(result).toThrow(('Имя не должно заканчиваться подчёркиванием'));
});

test('check the name', () => {
    const userName9 = new Validator("гордый$");
    const result = () => userName9.validateUserName();
    expect(result).toThrow(('Имя должно содержать только латинские буквы, подчёркивание или тире'));
});