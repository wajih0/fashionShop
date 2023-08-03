import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // Declare the userForm variable without initialization
  userForm: HTMLElement | null;

  constructor() {
    // Query the DOM inside the constructor or ngOnInit
    // This will be executed when the component is initialized
    this.userForm = document.querySelector(".user-form");
  }

  ngOnInit(): void {
    if (this.userForm !== null) {
      // Now you can safely use 'userForm'
      this.userForm.classList.add("active");
    } else {
      // Handle the case when 'userForm' is null (optional)
    }

    // Use 'userForm' in your code as needed to avoid the 'never read' error
    // For example, you can add event listeners or manipulate the DOM based on 'userForm'.
  }
}
