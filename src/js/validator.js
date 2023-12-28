export default class Validator {
 
    constructor(name) {
        this.name = name; 
    }
    
    validateUserName() {
        if (/\d{4,}/.test(this.name)) {
            throw new Error('Имя не должно содержать больше трёх цифр');
        }
        if (/^\d/.test(this.name)) {
            throw new Error('Имя не должно начинаться с цифры');
        }
        if (/^-/.test(this.name)) {
            throw new Error('Имя не должно начинаться с тире');
        }
        if (/^_/.test(this.name)) {
            throw new Error('Имя не должно начинаться с подчёркивания');
        }

        if (/\d+$/.test(this.name)) {
            throw new Error('Имя не должно заканчиваться цифрой');
        }
        if (/-$/.test(this.name)) {
            throw new Error('Имя не должно заканчиваться тире');
        }
        if (/_$/.test(this.name)) {
            throw new Error('Имя не должно заканчиваться подчёркиванием');
        }
        if (/[^\w-]/.test(this.name)) {
         throw new Error('Имя должно содержать только латинские буквы, подчёркивание или тире');  
        } 
    }
}