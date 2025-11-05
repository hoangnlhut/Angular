import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [FormsModule]
})
export class LoginComponent {

  onSubmit(formData: NgForm) {
    if(formData.form.invalid)
    {
      console.log('The form is invalid');
      console.log(formData);
      return;
    }

    const enteredEmail = formData.form.value.email;
    const enteredPass = formData.form.value.password;
  }
}
