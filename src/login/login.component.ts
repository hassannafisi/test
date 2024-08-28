import { Component } from '@angular/core';
import { DynamicFormBuilder } from '../shared/dynamic-form-builder';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginViewModelDTO } from './login';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup;
  isVisible: boolean = true;

  constructor(dynamicFormBuilder: DynamicFormBuilder) {
    this.loginForm = dynamicFormBuilder.buildFormFromClass<UserLoginViewModelDTO>(UserLoginViewModelDTO);
    console.log(this.loginForm);
    const a = 0;
  }

}
