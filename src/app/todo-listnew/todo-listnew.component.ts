import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-todo-listnew',
  templateUrl: './todo-listnew.component.html',
  styleUrls: ['./todo-listnew.component.css']
})
export class TodoListnewComponent implements OnInit {
  toDos: any = [];
  constructor(private dataService: UsersDataService) { }

  ngOnInit(): void {
    this.dataService.getToDO().subscribe(res => this.toDos = res);
  }

}
