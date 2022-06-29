import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{FormsModule} from '@angular/forms';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoListnewComponent } from './todo-listnew/todo-listnew.component';
import { UserComponent } from './user/user.component';
import { PhotosComponent } from './photos/photos.component';
import { CommentComponent } from './comment/comment.component';
import { AlbumComponent } from './album/album.component'

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoListnewComponent,
    UserComponent,
    PhotosComponent,
    CommentComponent,
    AlbumComponent,
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
