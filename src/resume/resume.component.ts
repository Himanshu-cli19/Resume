import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DogapiService } from '../app/Service/dogapi.service';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,MatChipsModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  isAuthenticated = false;

  loginForm: FormGroup;
  contactForm: FormGroup;

  apidog:any



  constructor(private fb: FormBuilder , private http:DogapiService)  {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onLogin() {
    const { username, password } = this.loginForm.value;

   
    if (username === 'user' && password === 'password') {
      this.isAuthenticated = true;
    } else {
      alert('Invalid credentials');
    }
  }

  onSubmit() {
    if (this.contactForm.valid) {
      alert('Contact form submitted!');
      this.contactForm.reset();
    }
  }

  onLogout() {
    this.isAuthenticated = false;
    this.loginForm.reset();
  }

   
   fetchmydog()
   {
      this.http.dogapi().subscribe((dogy)=>{
        this.apidog = dogy
      })
   }




}
