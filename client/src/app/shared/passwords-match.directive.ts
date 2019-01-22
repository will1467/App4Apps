import { AbstractControl } from '@angular/forms';

export function checkPasswordValidator(control : AbstractControl): {[key: string]: boolean}
 {
    const password = control.get("password");
    const repeatedPassword = control.get("repeatedPassword");

    if(password.value === repeatedPassword.value){
        return {passwordsMatch : true}
    }
    return {passwordsMatch : false};
}