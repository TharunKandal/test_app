import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formcomponent',
  templateUrl: './formcomponent.component.html',
  styleUrls: ['./formcomponent.component.scss'],
})
export class FormcomponentComponent implements OnInit {
  constructor(private router: Router) {}

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    avatar: new FormControl(''),
  });

  ngOnInit(): void {}

  onSubmit() {
    console.warn(this.profileForm.value);
    this.router.navigate(['/welcome']);
  }
}
