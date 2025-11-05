import { afterNextRender, Component, DestroyRef, inject, viewChild, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [FormsModule]
})
export class LoginComponent {
   private formVc = viewChild.required<NgForm>('form');
   private destroyRef = inject(DestroyRef);

  constructor(){
      afterNextRender(()=>{
        const subscription = this.formVc().valueChanges?.pipe(debounceTime(500)).subscribe({
          next: (value) =>
            window.localStorage.setItem('saved-login-form', JSON.stringify({email: value.email})),
        });

        this.destroyRef.onDestroy(()=> subscription?.unsubscribe());
      });
  }

  onSubmit(formData: NgForm) {
    if(formData.form.invalid)
    {
      console.log('The form is invalid');
      console.log(formData);
      return;
    }

    const enteredEmail = formData.form.value.email;
    const enteredPass = formData.form.value.password;

    formData.form.reset();
  }
}
