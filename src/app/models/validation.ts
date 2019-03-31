import { FormGroup } from "@angular/forms";

export class Validation {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config = {
            'required': 'Required',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'minlength': `Minimum length ${validatorValue.requiredLength}`,
            'invalidUsername': 'Invalid username, the username may not contain any special characters.'
        };
        return config[validatorName];
    }

    static usernameValidator(control) {
        if (control.value.match(/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/)) {
            return null;
        }
        else {
            return { 'invalidUsername': true }
        }
    }

    static emailValidator(control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmailAddress': true };
        }
    }

    static checkPasswords(group: FormGroup) { // here we have the 'passwords' group
        let pass = group.controls.password.value;
        let confirmPass = group.controls.confirmedPassword.value;

        return pass === confirmPass ? null : { notSame: true }
    }

    static checkEmails(group: FormGroup) { // here we have the 'passwords' group
    let email = group.controls.email.value;
    let confirmedEmail = group.controls.confirmedEmail.value;

    return email === confirmedEmail ? null : { notSame: true }
}

    static passwordValidator(control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,30}$/)) {
            return null;
        } else {
            return { 'invalidPassword': true };
        }
    }
}