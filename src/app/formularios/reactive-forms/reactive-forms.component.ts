import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {

  emailControl = new FormControl(
    '', [ Validators.required,
          Validators.email,]
  );
  
  passwordControl = new FormControl(
    '', [Validators.required,]
  )
  registerForm: FormGroup;

  constructor(public formBuilder: FormBuilder){
    this.registerForm = this.formBuilder.group({
      name:['',[Validators.required, Validators.maxLength(14)]],
      lastName:['',[Validators.required, Validators.minLength(3)]],
      Email: this.emailControl,
      Password: this.passwordControl,
      zip:['',[Validators.required, Validators.minLength(3)]],
    });
  }
  onSubmit (): void {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    } else{
      alert('El formulario no es valido')
    }
  }
}
