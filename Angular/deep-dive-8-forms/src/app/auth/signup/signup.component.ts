import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, of } from 'rxjs';

function confirmPass(control: AbstractControl){
  if (control.value?.password === control.value?.confirmPassword)
  {
    return of(null);
  }

  return of({ isNotTheSamePassword: true });
}

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  imports: [ReactiveFormsModule]
})
export class SignupComponent {
  private destroyRef = inject(DestroyRef);

    
  form = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      passwords: new FormGroup({
          password: new FormControl('', {
          validators: [Validators.required, Validators.minLength(6)]
        }),
        confirmPassword: new FormControl('', {
          validators: [Validators.required, Validators.minLength(6)]
        })}, 
        {asyncValidators : [confirmPass]}),
      firstName: new FormControl('', { validators: [Validators.required]}),
      lastName: new FormControl('', { validators: [Validators.required]}),
      address: new FormGroup({
        street: new FormControl('', { validators: [Validators.required]}),
        number: new FormControl('', { validators: [Validators.required]}),
        postal: new FormControl('', { validators: [Validators.required]}),
        city: new FormControl('', { validators: [Validators.required]}),
      }),
      role: new FormControl<'student' | 'teacher' | 'employee' | 'founder' | 'other'>('student', { validators: [Validators.required]}),
      terms: new FormControl(false, { validators: [Validators.required]})
  });

  get validEmail(){
    return (this.form.controls.email.touched && 
      this.form.controls.email.dirty &&
      this.form.controls.email.invalid
    );
  }

  get validPassword(){
    return (this.form.controls.passwords.touched && 
      this.form.controls.passwords.dirty &&
      this.form.controls.passwords.invalid
    );
  }

  // get validConfirmPassword(){
  //   return (this.form.controls.confirmPassword.touched && 
  //     this.form.controls.confirmPassword.dirty &&
  //     this.form.controls.confirmPassword.invalid
  //   );
  // }


  // ngOnInit(): void {
  //   const subscription = this.form.valueChanges.pipe(debounceTime(500)).subscribe({
  //     next: (value)=> window.localStorage.setItem('saved-input', JSON.stringify({email: value.email, pass: value.password, confirmPass: value.confirmPassword}))
  //   });

  //   this.destroyRef.onDestroy(() => subscription.unsubscribe());
  // }

  onSubmit(){
    if(this.form.invalid) return;

    console.log(this.form);

    const enteredEmail = this.form.controls.email.value;
    const enteredPassword = this.form.controls.passwords.value;

    console.log(enteredEmail, enteredPassword);
  }

  onReset(){
    this.form.reset();
  }
}
