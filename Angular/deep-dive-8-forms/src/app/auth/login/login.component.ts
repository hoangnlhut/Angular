import { afterNextRender, Component, DestroyRef, inject, viewChild, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [FormsModule, ReactiveFormsModule]
})
export class LoginComponent {

//REACTIVE FORM APPROACH
form = new FormGroup({
  email: new FormControl(''),
  password: new FormControl('')
});

onSubmit(){
    console.log(this.form);
    const enteredEmail = this.form.value.email;
    const enteredPass = this.form.value.password;

    console.log(enteredEmail, enteredEmail);

}

//END OF REACTIVE FORM APPROACH
}


// TEMPLATE-DRIVEN APPROACH
//  private formVc = viewChild.required<NgForm>('form');
//    private destroyRef = inject(DestroyRef);

//   constructor(){
//       const savedForm = window.localStorage.getItem('saved-login-form');

//       if(savedForm){
//         const loadedFormData = JSON.parse(savedForm);
//         const savedEmail = loadedFormData.email;
//         setTimeout(()=> {
//             this.formVc().controls['email'].setValue(savedEmail);
//         }, 1);
//       }

//       afterNextRender(()=>{
//         const subscription = this.formVc().valueChanges?.pipe(debounceTime(500)).subscribe({
//           next: (value) =>
//             window.localStorage.setItem('saved-login-form', JSON.stringify({email: value.email})),
//         });

//         this.destroyRef.onDestroy(()=> subscription?.unsubscribe());
//       });
//   }

//   onSubmit(formData: NgForm) {
//     if(formData.form.invalid)
//     {
//       console.log('The form is invalid');
//       console.log(formData);
//       return;
//     }

//     const enteredEmail = formData.form.value.email;
//     const enteredPass = formData.form.value.password;

//     formData.form.reset();
//   }
// END OF TEMPLATE-DRIVEN APPROACH
