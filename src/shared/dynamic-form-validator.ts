// import { FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// export class DynamicFormValidator {

//     public static validateControl(classInstance: any): ValidatorFn {
//         const func = (control: FormControl): ValidationErrors | null => {

//             let valid = null;
//             const controlName = DynamicFormValidator.getControlName(control);
//             if (controlName) {
//                 const transformedValue =
//                     PropertyUtils.transformPropertyValue(classInstance, controlName, control.value);

//                 PropertyUtils.setProperty(classInstance, controlName, transformedValue);

//                 const valResult: ValidationError[] = validateSync(classInstance, { skipMissingProperties: true });

//                 if (valResult.length > 0) {
//                     const msgs: Array<String> =
//                         DynaValidator.convertValidationErrorToMsgsArray(valResult, controlName);
//                     if (msgs && msgs.length > 0) {
//                         valid = { 'dynaControlError': { noValid: true, messages: msgs } };
//                     }
//                 }
//             }
//             return valid;
//         };
//         return func;
//     }

//     private static convertValidationErrorToMsgsArray(
//         result: ValidationError[], propertyName: string, msgs: Array<String> = []): Array<String> {
//         for (const valid of result) {  // iterate list
//             if (valid.property === propertyName && valid.constraints) {
//                 for (const constr in valid.constraints) {  // iterate object properties
//                     if (valid.constraints.hasOwnProperty(constr)) {
//                         msgs.push(valid.constraints[constr]);
//                     }
//                 }
//             }
//             if (valid.children && valid.children.length > 0) {
//                 this.convertValidationErrorToMsgsArray(
//                     valid.children, propertyName, msgs);  // find constraints in children
//             }
//         }

//         return msgs;
//     }

//     private static getControlName(control: FormControl): string {
//         let controlName: string = null;
//         const parent = control['parent'];

//         if (parent instanceof FormGroup) {  // iterate only if parent is a FormGroup
//             Object.keys(parent.controls).forEach((name) => {
//                 // compare passed control with child control
//                 if (control === parent.controls[name]) {  // if same references
//                     controlName = name;
//                 }
//             });
//         }
//         return controlName;  // return the name or null if not found
//     }

// }
