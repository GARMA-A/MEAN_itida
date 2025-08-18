import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule for common directives

@Component({
  selector: 'app-d1-assignment-info-card',
  standalone: true, // This makes it a standalone component
  imports: [CommonModule, FormsModule], // Add FormsModule to imports
  templateUrl: './d1-assignment-info-card.html',
  styleUrls: ['./d1-assignment-info-card.css']
})
export class D1AssignmentInfoCardComponent {
  // User data properties for interpolation
  userName: string = 'John Doe';
  userEmail: string = 'john.doe@example.com';
  jobTitle: string = 'Senior Developer';
  currentYear: number = new Date().getFullYear();

  // Property binding - image source and button state
  userImageUrl: string = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face';
  isButtonDisabled: boolean = false;

  // Event binding - click counter
  clickCount: number = 0;

  // Store default values for reset functionality
  private defaultValues = {
    userName: 'John Doe',
    userEmail: 'john.doe@example.com',
    jobTitle: 'Senior Developer'
  };

  // Event binding method - handle button clicks
  onButtonClick(): void {
    this.clickCount++;
  }

  // Toggle button disabled state
  toggleButtonState(): void {
    this.isButtonDisabled = !this.isButtonDisabled;
  }

  // Reset profile to default values
  resetProfile(): void {
    this.userName = this.defaultValues.userName;
    this.userEmail = this.defaultValues.userEmail;
    this.jobTitle = this.defaultValues.jobTitle;
    this.clickCount = 0;
    this.isButtonDisabled = false;
  }
}
