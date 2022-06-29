import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
albums:any=[];
  constructor(private service:UsersDataService) { }

  ngOnInit(): void {
    this.service.getalbum().subscribe(res => this.albums = res);
  }

}
