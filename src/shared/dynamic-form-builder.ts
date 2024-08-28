import { animate } from "@angular/animations";
import { Injectable } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

interface LooseObject {
    [key: string]: any
}

@Injectable({ providedIn: 'root' })
export class DynamicFormBuilder {

    constructor(private formBuilder: FormBuilder) {
    }

    public buildFormFromClass<T extends object>(classConstructor: (new () => T)): FormGroup {
        const classInstance = new classConstructor();
        const formControls: LooseObject = {};
        const formFieldList: any = [];
        Object.keys(classInstance).forEach(k => {
            formControls[k] = new FormControl(null, null);
            formFieldList.push(k);
        });
        const formInstance = this.formBuilder.group(formControls, formFieldList);
        //formInstance['formFields'] = formFieldList;
        formInstance.patchValue(classInstance);
        return formInstance;
    }


    public validateAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        });
    }


    public getAllErrors(formGroup: FormGroup): string {
        let errorMessage = '';
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                if (!control.valid) {
                    //const m = control.errors!['dynaControlError'].messages;
                    const m = control.errors!['dynaControlError'].messages;
                    // m.forEach(elem => {
                    //     errorMessage += elem + '<br/>';
                    // });
                    m.array.forEach((e: string) => {
                        errorMessage += e + '<br/>';
                    });
                }
            } else if (control instanceof FormGroup) {
                errorMessage += this.getAllErrors(control);
            }
        });
        return errorMessage;
    }


}
