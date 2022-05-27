import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-formcomponent',
  templateUrl: './formcomponent.component.html',
  styleUrls: ['./formcomponent.component.scss'],
})
export class FormcomponentComponent implements OnInit {
  data: any;
  products: any;
  selected: any;
  id: any;
  constructor(
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    avatar: new FormControl(''),
  });

  ngOnInit(): void {
    this.data = this.userService.getUsers().subscribe({
      next: (product: { data: any }) => {
        (this.data = product.data),
          (this.products = this.data),
          (this.id = this.route.snapshot.paramMap.get('id'));
        console.log(this.id, this.products);
        if (this.id) {
          this.selected = this.products.filter((product: { id: any }) => {
            return product.id == this.id;
          });
          console.log(this.selected);
          this.profileForm.patchValue({
            firstName: this.selected.first_name,
            lastName: this.selected.last_name,
            email: this.selected.email,
          });
        }
        console.log(this.profileForm);
      },
      error: (err: any) => console.log(err),
    });
  }

  onSubmit() {
    console.warn(this.profileForm.value);
    this.router.navigate(['/welcome']);
  }
}
