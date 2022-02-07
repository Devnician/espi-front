import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { isNullOrUndefined } from 'is-what';

interface HashTable<T> {
  [key: string]: string;
}
/**
 * This class must be injected as a public property to be visible to the template
 */
@Injectable()
export class Valido {
  private errorMessages: HashTable<string> = {};
  private forbiddenWords = [
    'fuck',
    'select',
    'insert',
    'update',
    'delete',
    'drop',
  ];

  constructor() {
    try {
      this.loadErrorMessages();
    } catch (error) {
      // *
    }
  }
  private loadErrorMessages(): void {
    this.errorMessages['required'] = 'Полето е задължително';
    this.errorMessages['minlength'] = 'минимална дължина!';
  }

  getErrorMessageFromControl(control: any, patternMessage?: string): string {
    if (control.hasError('required')) {
      return this.errorMessages['required'];
    } else if (control.hasError('minlength')) {
      return (
        'Минимална дължина : ' +
        control.errors.minlength.requiredLength +
        ' символа'
      );
    } else if (control.hasError('maxlength')) {
      return (
        'Максимална дължина : ' +
        control.errors.maxlength.requiredLength +
        ' символа'
      );
    } else if (control.hasError('pattern')) {
      return 'Невалиден формат. ' + patternMessage;
    } else if (control.hasError('min')) {
      console.log(control.errors.min);
      return 'Минимална стойност: ' + control.errors.min.min;
    } else if (control.hasError('exist')) {
      return 'Вече съществува в базата данни';
    } else if (control.hasError('max')) {
      return 'Максимална стойност: ' + control.errors.max.max;
    } else if (control.hasError('samePassword')) {
      return 'Полето "Стара парола" и полето "Нова парола" са с еднакви стойности!';
    } else if (control.hasError('wrongPassword')) {
      return 'Грешна парола!';
    } else if (control.hasError('matDatepickerMin')) {
      return 'Избраната дата не е позволена';
    } else if (control.errors) {
      // next error
      console.log(control.errors);
      return 'error';
    }
    return '';
  }

  // private getErrorMessage(field: string): string {
  //   const displayError: string = this.errorMessages[field];
  //   if (displayError) {
  //     return displayError;
  //   }
  //   return this.errorMessages['required'];
  // }

  /**
   * Checks user input string with every word in collection with forbidden words.
   * @param userInput the user input
   */
  isThereForbiddenWords(userInput: string): boolean {
    for (const word of this.forbiddenWords) {
      if (userInput.toLowerCase().includes(word)) {
        return true;
      }
    }
    return false;
  }

  validateText(min: number, max: number, required: boolean): ValidatorFn[] {
    const compose = [Validators.minLength(min), Validators.maxLength(max)];
    if (required) {
      compose.push(Validators.required);
    }
    return compose;
  }

  validateNumber(min: number, max: number): ValidatorFn[] {
    return [
      Validators.required,
      Validators.min(min),
      Validators.max(max),
      Validators.pattern('[0-9]+'), // validates input is digit
    ];
  }

  validateNumberDigits(min: number, digits: number): ValidatorFn[] {
    return [
      Validators.required,
      Validators.min(min),
      Validators.pattern('[0-9]*[.,]?[0-9]{1,' + digits + '}'), // validates input is digit
    ];
  }

  /**
   * Minimum min characters, at least one uppercase letter, one lowercase letter, one number and one special character:
   */
  validatePassowrd(min: number, max: number): ValidatorFn[] {
    return [
      Validators.required,
      Validators.minLength(min),
      Validators.maxLength(max),
      Validators.pattern(
        this.buildRegexForPassword(min, max)
        // '(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\\#\\$\\%\\=\\@\\!\\{\\}\\,\\`\\~\\&\\*\\(\\)\\<\\>\\?\\.\\:\\;\\_\\|\\^\\/\\+\\t\\[\\]\\"\\-])[\\da-zA-Z\\#\\$\\%\\=\\@\\!\\{\\}\\,\\`\\~\\&\\*\\(\\)\\<\\>\\?\\.\\:\\;\\_\\|\\^\\/\\+\\t\\[\\]\\"\\-]{' +
        //   min +
        //   ',' +
        //   max +
        //   '}'
      ), // validates input is digit
    ];
  }

  validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        if (!control.valid) {
          console.log(control.errors);
          console.log('Invalid field: ' + field);
        }
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  matchPassword(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password').value;
    const confirm = control.get('passwordConfirmed').value;

    if (password !== confirm) {
      return { noMatch: true };
    }

    return null;
  }

  prepareTheSearchCriteria(criteria: string): string {
    if (isNullOrUndefined(criteria)) {
      return '%';
    }
    criteria = criteria.trim();
    return criteria.length ? '%' + criteria + '%' : '%';
  }

  /**
   * Disables passed form controls if we need ReadOnly mode. On Submit should use getRawValue() method
   * @param formGroup  The group
   * @param names names of control
   */
  disableFormControlsByName(formGroup: FormGroup, ...names: string[]): void {
    names.forEach((element) => {
      formGroup.controls[element]?.disable();
    });
  }
  resetFormControlsByName(formGroup: FormGroup, ...names: string[]): void {
    names.forEach((element) => {
      formGroup.controls[element]?.reset();
    });
  }
  /**
   * Generates an expression if at least one Boolean is truе, `min` is greater than zero and `max` is greater than `min`.
   * For all other cases return expression that likes all strings
   *
   * USING : valido.buildRegexForPassword(true, false, false, false, 5, 15);  // for 5-15 lowercase string
   *
   * @param min min length
   * @param max max length
   * @param containsLowercase  to contain lowercase in the expression
   * @param containsUppercase to contain uppercase in the expression
   * @param containsNumbers to contain numbers in the expression
   * @param containsSpecialCharacters to contain special characters in the expression
   * @returns regex for password
   */
  buildRegexForPassword(
    min: number,
    max: number,
    containsLowercase = true,
    containsUppercase = true,
    containsNumbers = true,
    containsSpecialCharacters = true
  ): string {
    if (
      (containsLowercase ||
        containsUppercase ||
        containsNumbers ||
        containsSpecialCharacters) &&
      min > 0 &&
      max > 1 &&
      max >= min
    ) {
      const lowercasePositiveLookahead = containsLowercase ? '(?=.*[a-z])' : '';
      const uppercasePositiveLookahead = containsUppercase ? '(?=.*[A-Z])' : '';
      const numbersPositiveLookahead = containsNumbers ? '(?=.*[0-9])' : '';
      const specialCharactersLookahead = containsSpecialCharacters
        ? '(?=.*[\\#\\$\\%\\=\\@\\!\\{\\}\\,\\`\\~\\&\\*\\(\\)\\<\\>\\?\\.\\:\\;\\_\\|\\^\\/\\+\\t\\[\\]\\"\\-])'
        : '';

      const lowercase = containsLowercase ? 'a-z' : '';
      const uppercase = containsUppercase ? 'A-Z' : '';
      const numbers = containsNumbers ? '\\d' : '';
      const characters = containsSpecialCharacters
        ? '\\#\\$\\%\\=\\@\\!\\{\\}\\,\\`\\~\\&\\*\\(\\)\\<\\>\\?\\.\\:\\;\\_\\|\\^\\/\\+\\t\\[\\]\\"\\-'
        : '';

      const regex =
        `${lowercasePositiveLookahead}${uppercasePositiveLookahead}${numbersPositiveLookahead}` +
        `${specialCharactersLookahead}[${lowercase}${uppercase}${numbers}${characters}]{${min},${max}}`;

      return regex;
    } else {
      console.log('Finds a match in all strings. Read docs.');
      return '.*';
    }
  }
}
