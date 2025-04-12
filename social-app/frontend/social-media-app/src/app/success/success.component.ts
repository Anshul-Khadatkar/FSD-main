import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="success-container">
      <div class="success-card">
        <h2 class="success-title">Success!</h2>
        <p class="success-message">Participant registered successfully!</p>
        <button routerLink="/" class="btn btn-primary">Return to Login</button>
      </div>
    </div>
  `,
  styles: [
    `
      .success-container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: #f5f5f5;
      }

      .success-card {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        text-align: center;
        max-width: 500px;
        width: 100%;
      }

      .success-title {
        color: #28a745;
        margin-bottom: 1rem;
      }

      .success-message {
        font-size: 1.2rem;
        margin-bottom: 2rem;
      }

      .btn-primary {
        background-color: #007bff;
        color: white;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        text-decoration: none;
      }

      .btn-primary:hover {
        background-color: #0056b3;
      }
    `,
  ],
})
export class SuccessComponent {}
