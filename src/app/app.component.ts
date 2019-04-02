import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  state = 'step1';

  isLoaading = false;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,

  ]);

  matcher = new MyErrorStateMatcher();

  goNext() {
    this.isLoaading = true;
    //console.log(this.emailFormControl.value);
    setTimeout(() => {
      this.isLoaading = false;
      this.state = 'step2';
    }, 2000);
  }

  goPrevious() {
    this.state = 'step1' ;
  }
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
