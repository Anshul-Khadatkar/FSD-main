import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';
  isSubmitting: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get formControls() {
    return this.loginForm.controls;
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isSubmitting = true;
      this.errorMessage = '';

      const { username, password } = this.loginForm.value;

      // Use test data from environment
      setTimeout(() => {
        if (
          username === environment.testUser.userId &&
          password === environment.testUser.password
        ) {
          // Store user data in localStorage for use in dashboard
          localStorage.setItem('username', username);
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('userName', environment.testUser.name);

          // Navigate to dashboard
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = 'Invalid username or password. Please try again.';
          this.isSubmitting = false;
        }
      }, 1000); // Simulate network delay
    }
  }
}
