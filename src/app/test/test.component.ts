import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  constructor(private userService: UserService) {}

  products: any = {};
  selected: any = {};

  data: any = [];

  ngOnInit(): void {
    this.data = this.userService.getUsers().subscribe({
      next: (product) => {
        (this.data = product.data),
          (this.products = this.data),
          (this.selected = this.data[0]);
      },
      error: (err) => console.log(err),
    });
  }

  maximize(user: any) {
    this.products = user;
    this.selected = user;
  }
}
