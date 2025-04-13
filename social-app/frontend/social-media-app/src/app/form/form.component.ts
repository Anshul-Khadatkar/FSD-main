import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  styles: [
    `
      :host {
        display: block;
        background: #f5f5f5 !important;
        background-image: none !important;
        min-height: 100vh;
      }

      :host::ng-deep body,
      :host::ng-deep html {
        background: #f5f5f5 !important;
        background-image: none !important;
      }
    `,
  ],
})
export class FormComponent implements OnInit {
  registrationForm!: FormGroup;
  isSubmitting = false;
  errorMessage = '';

  referralSources = [
    'Social Media',
    'College Notice',
    'Friend',
    'Faculty',
    'Other',
  ];
  types = ['Internal', 'External'];

  eventNames = [
    'Cricket Tournament',
    'Basketball Championship',
    'Football League',
    'Swimming Competition',
    'Tennis Championship',
    'Badminton Tournament',
    'Table Tennis Competition',
    'Chess Tournament',
    'Athletics Meet',
    'Volleyball Tournament',
  ];

  departments = [
    'Computer Science Engineering',
    'Information Technology',
    'Electronics & Communication',
    'Electrical Engineering',
    'Mechanical Engineering',
    'Civil Engineering',
    'Chemical Engineering',
    'Biotechnology',
    'Aeronautical Engineering',
    'Applied Sciences',
    'Management Studies',
  ];

  // Mock data for testing
  private mockData = {
    testUser: {
      name: 'Anshul',
    },
    participantId: 'P2024001',
  };

  constructor(private fb: FormBuilder, public router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.registrationForm = this.fb.group({
      name: [{ value: this.mockData.testUser.name, disabled: true }],
      pId: [{ value: this.mockData.participantId, disabled: true }],
      referralSource: ['', Validators.required],
      type: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(15), Validators.max(120)]],
      gender: ['', Validators.required],
      eventName: ['', Validators.required],
      department: ['', Validators.required],
      medicalCondition: [''],
    });
  }

  onSubmit(): void {
    if (this.registrationForm.invalid) {
      return;
    }

    this.isSubmitting = true;
    console.log('Form submitted:', this.registrationForm.value);

    // Navigate to success page after 1 second to simulate API call
    setTimeout(() => {
      this.router.navigate(['/success']);
    }, 1000);
  }

  navigateBack(): void {
    this.router.navigate(['/dashboard']);
  }
}
