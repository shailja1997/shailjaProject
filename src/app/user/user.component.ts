import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any = [];
  constructor(private service: UsersDataService) { }

  ngOnInit(): void {
    this.service.getuser().subscribe(res => this.users = res);
  }


  
}
