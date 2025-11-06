import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  imports: [ReactiveFormsModule]
})
export class SignupComponent {
    
  form = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(6)]
      }),
  });

  get validEmail(){
    return (this.form.controls.email.touched && 
      this.form.controls.email.dirty &&
      this.form.controls.email.invalid
    );
  }

  get validPassword(){
    return (this.form.controls.password.touched && 
      this.form.controls.password.dirty &&
      this.form.controls.password.invalid
    );
  }



  onSubmit(){
    if(this.form.invalid) return;
    
    console.log(this.form);

    const enteredEmail = this.form.controls.email.value;
    const enteredPassword = this.form.controls.password.value;

    console.log(enteredEmail, enteredPassword);
  }

  onReset(){
    this.form.reset();
  }
}
