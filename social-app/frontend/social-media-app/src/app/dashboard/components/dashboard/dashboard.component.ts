import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {
  userData: any = {
    message: 'Welcome to Viewer Dashboard',
    username: 'testuser',
    name: 'Anshul',
    role: 'USER',
  };

  availableEvents: any[] = [
    {
      name: 'swimming',
      type: 'sport',
      date: '2025-04-14',
      head: 'Anshul',
      location: 'Main Pool Stadium',
      participants: '24/30',
    },
    {
      name: 'basketball',
      type: 'team sport',
      date: '2025-05-20',
      head: 'Anushka',
      location: 'Sports Complex A',
      participants: '18/20',
    },
    {
      name: 'cricket',
      type: 'team sport',
      date: '2025-06-12',
      head: 'Krishna',
      location: 'Cricket Ground',
      participants: '22/22',
    },
    {
      name: 'football',
      type: 'team sport',
      date: '2025-07-05',
      head: 'Sanjog',
      location: 'City Stadium',
      participants: '20/22',
    },
    {
      name: 'volleyball',
      type: 'team sport',
      date: '2025-06-25',
      head: 'Rajesh',
      location: 'Indoor Arena B',
      participants: '12/14',
    },
    {
      name: 'table tennis',
      type: 'individual sport',
      date: '2025-05-12',
      head: 'Khadatkar',
      location: 'Sports Hall 3',
      participants: '16/32',
    },
    {
      name: 'athletics',
      type: 'track & field',
      date: '2025-08-10',
      head: 'Virat',
      location: 'Athletic Stadium',
      participants: '45/50',
    },
    {
      name: 'chess tournament',
      type: 'indoor game',
      date: '2025-04-30',
      head: 'Rohit',
      location: 'Convention Center',
      participants: '28/64',
    },
  ];

  participatedEvents: any[] = [
    {
      name: 'tennis',
      type: 'individual sport',
      date: '2025-03-10',
      head: 'Sunita',
      location: 'Tennis Court 2',
      status: 'Completed',
    },
    {
      name: 'badminton',
      type: 'PV Sindhu',
      date: '2025-02-28',
      head: 'deepak',
      location: 'Indoor Stadium B',
      status: 'Winner',
    },
  ];

  constructor(public router: Router) {}

  ngOnInit() {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      this.router.navigate(['/login']);
      return;
    }

    // Fetch user data from localStorage
    const userEmail = localStorage.getItem('username');

    if (userEmail) {
      this.userData.username = userEmail;
    }

    // Set name to Anshul as requested
    this.userData.name = 'Anshul';
  }

  logout() {
    // Clear all user data
    localStorage.removeItem('username');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    this.router.navigate(['/login']);
  }

  participate() {
    // Navigate to the form component
    this.router.navigate(['/form']);
  }

  registerForEvent() {
    // Implement registration logic
    alert('Event registration will be available soon!');
  }
}
