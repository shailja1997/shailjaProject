import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: any = [];
  constructor(private service: UsersDataService) { }

  ngOnInit(): void {
    this.service.getphotos().subscribe(res => this.photos = res);
  }

}
