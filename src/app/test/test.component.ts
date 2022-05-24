import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private userService:UserService) { }

  image:string = ""
  selected:object ={
    id:'',
    first_name:'',
    last_name:'',
    email:'',
    avatar:''
  }

  data:any = [];

  ngOnInit(): void {
  this.data = this.userService.getUsers();
  this.image = "https://reqres.in/img/faces/7-image.jpg",
  this.selected = this.data[0];
  }

  maximize(user:any){
    this.image = user.avatar;
    this.selected = user;
    console.log('Maximize')
  }
}
