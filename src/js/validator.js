export default class Validator {
 
    constructor(name) {
        this.name = name; 
    }
    
    validateUserName() {
        const login = /^[\w-]+$/i;
        const negative = /^(?![\d_-])(?![\d_-]*$)(\d{0,3})+$/;
        
        if (login.test(this.name) && negative.test(this.name)) {
            return this.name;
        } else {
            throw new Error('Имя не отвечает условиям');
        }
    }
}