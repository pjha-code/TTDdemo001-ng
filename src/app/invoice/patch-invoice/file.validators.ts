import { AbstractControl, ValidationErrors } from '@angular/forms';

export class FileValidators {
    static fileExtensionCheck(control: AbstractControl): ValidationErrors | null {
        console.log(control);
        const completeFileName = control.value as String;
        let resp = null;
        if (completeFileName != '') {
            const fileParts = completeFileName.split('.');
            const extension = fileParts[fileParts.length - 1].toLocaleUpperCase();
            if (extension != 'CSV') {
                resp = {
                    valid: false,
                    isNotCSV: true,
                    message: 'Only CSV files are eligible'
                };
            } else {
                resp = {
                    valid: true
                };
            }
        } else {
            resp = {
                valid: false,
                required: true,
                message: 'File is required'
            };
        }
        return resp;
    }
}
