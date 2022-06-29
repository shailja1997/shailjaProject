import { Component, OnInit } from '@angular/core';
import { throwIfEmpty } from 'rxjs';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comment:any = [];

  constructor(private service:UsersDataService) { }

  ngOnInit(): void {
    this.service.getcomments().subscribe(res => this.comment = res)
  }
}
