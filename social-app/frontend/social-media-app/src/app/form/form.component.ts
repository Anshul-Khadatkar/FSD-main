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

  // Mock data for testing
  private mockData = {
    testUser: {
      name: 'Test User',
    },
    participantId: 'P2024001',
  };

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.registrationForm = this.fb.group({
      name: [{ value: this.mockData.testUser.name, disabled: true }],
      pId: [{ value: this.mockData.participantId, disabled: true }],
      referralSource: ['', Validators.required],
      type: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1), Validators.max(120)]],
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

    // Navigate to success page
    this.router.navigate(['/success']);
  }
}
